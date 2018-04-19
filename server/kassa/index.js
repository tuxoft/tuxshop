const fetch = require("node-fetch");
const nanoid = require("nanoid");

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

class Kassa {
  constructor(token) {
    this.token = token;
  }

  async process(order, params = { shouldFail: false }) {
    const processing = (details) => {
      const request_id = nanoid();

      if (params.shouldFail) {
        return {
          status: "failure",
          request_id,
          details
        };
      }

      return {
        status: "waiting",
        request_id,
        details
      };
    };

    const response = await delay(200).then(() => processing(order));

    console.log("response: ", response);

    return response;
  };
}

module.exports = new Kassa("kassa_token");