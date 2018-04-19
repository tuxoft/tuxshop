const { saveOrder, getOrderById } = require("../../models/order");

module.exports = (_, { order }) => {
  return saveOrder(order).then(result => {
    // Get generated key from rethinkdb
    const id = result.generated_keys[0];

    return getOrderById(id).then(result => {
      return result;
    });
  });
};