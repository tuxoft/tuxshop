const nanoid = require("nanoid");
const { saveOrder, updateOrder, getOrderById } = require("../../models/order");
const kassa = require("../../kassa");

module.exports = (_, { order }) => {
  // Generate idempotence key
  const idempotenceKey = nanoid();

  return saveOrder({
    ...order,
    status: "pending",
    idempotenceKey,
  }).then(storedOrder => {
    const id = storedOrder.generated_keys[0];

    return kassa.process(id, { idempotenceKey }).then(kassaResponse => {
      return updateOrder(id, {
        ...order,
        paymentId: kassaResponse.payment_id,
        confirmationUrl: kassaResponse.confirmation_url,
      }).then(() => {
        return getOrderById(id).then(updatedOrder => {
          return updatedOrder;
        });
      });
    });
  });
};
