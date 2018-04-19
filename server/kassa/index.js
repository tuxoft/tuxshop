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
    const processing = (order) => {
      const request_id = nanoid();

      if (params.shouldFail) {
        return {
          status: "failure",
          request_id,
          order
        };
      }

      return {
        status: "waiting",
        request_id,
        order
      };
    };

    const response = await delay(200).then(() => processing(order));

    console.log("process: ", response);

    return response;
  };

  async status(request) {
    const processing = (request) => {
      if (request.status === "waiting") {
        return {
          ...request,
          status: "success"
        };
      }
      else {
        return {
          ...request,
          status: "failure"
        };
      }
    };

    const response = await delay(300).then(() => processing(request));

    console.log("status: ", response);

    return response;
  }
}

module.exports = new Kassa("kassa_token");