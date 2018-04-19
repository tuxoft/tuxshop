const { updateOrder, getOrderById } = require("../../models/order");

module.exports = (_, { id, order }) => {
  return updateOrder(id, order).then(result => {
    return getOrderById(id).then(result => {
      return result;
    });
  });
};