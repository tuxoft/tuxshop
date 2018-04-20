// const fetch = require("node-fetch");
const nanoid = require("nanoid");

const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class Kassa {
  constructor(token) {
    this.token = token;
  }

  async process(orderId, params = { idempotenceKey }) {
    const processing = orderId => {
      const payment_id = nanoid();

      return {
        payment_id,
        confirmation_url: "http://localhost:3000/checkout/" + orderId,
        order_id: orderId,
      };
    };

    const response = await delay(200).then(() =>
      processing(orderId, params.idempotenceKey),
    );

    return response;
  }

  // async status(request) {
  //   const processing = (request) => {
  //     if (request.status === "waiting") {
  //       return {
  //         ...request,
  //         status: "success"
  //       };
  //     }
  //     else {
  //       return {
  //         ...request,
  //         status: "failure"
  //       };
  //     }
  //   };

  //   const response = await delay(300).then(() => processing(request));

  //   console.log("status: ", response);

  //   return response;
  // }
}

module.exports = new Kassa("kassa_token");
