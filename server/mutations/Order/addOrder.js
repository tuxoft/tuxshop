const { saveOrder, getOrderById } = require("../../models/order");
const kassa = require("../../kassa");

module.exports = (_, { order }) => {
  return saveOrder(order).then(result => {
    // Get generated key from rethinkdb
    const id = result.generated_keys[0];

    return getOrderById(id).then(result => {
      return kassa.process(order)
        .then(kassaResult => {
          return {
            ...result,
            status: kassaResult.status,
            requestId: kassaResult.request_id
          };
        });

      // return result;
    });
  });
};