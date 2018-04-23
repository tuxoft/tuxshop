// DB connection
const config = {
  db: "tuxshop",
  max: 500,
  buffer: 5,
  timeoutGb: 60 * 1000
};

const db = require("rethinkdbdash")(config);

const getOrderByPaymentId = paymentId => {
  return db
    .table("orders")
    .filter({
      paymentId
    })
    .run()
    .then(result => {
      if (!result || !result.length) {
        console.log("Order not found...");
      }

      return result[0];
    });
};

const updateOrder = (id, order) => {
  return db
    .table("orders")
    .get(id)
    .update(order)
    .run();
};

const kassaWaitingForCaptureEvent = async ({ event }) => {
  getOrderByPaymentId(event.object.id).then(order => {
    if (!order) {
      return;
    }

    updateOrder(order.id, {
      ...order,
      status: "paid"
    }).then(() => {
      return "done";
    });
  });
};

const kassaSucceededEvent = async ({ event }) => {
  return "done";
};

const WebhookHandler = {
  for: async event => {
    const handler = {
      "payment.waiting_for_capture": kassaWaitingForCaptureEvent,
      "payment.succeeded": kassaSucceededEvent
    }[event.event];

    if (!handler || handler === undefined) {
      console.log("Handler not found: " + event.event);
      return;
    }

    return await handler({ event });
  }
};

const handleWebhooks = async (req, res) => {
  let event = JSON.parse(req.body);

  if (!event) {
    console.log("No event found!");
    return;
  }

  return await WebhookHandler.for(event)
    .then(() =>
      res
        .status(200)
        .send("Webhook received: " + event.event + " for: " + event.object.id)
    )
    .catch(error => {
      console.log("Error happened: " + error);
    });
};

module.exports = {
  handleWebhooks
};
