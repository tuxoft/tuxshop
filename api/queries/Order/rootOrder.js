const { getOrderById } = require("../../models/order");

const order = (_, { id }) => {
  console.log("order: ", id);

  return getOrderById(id).then(result => {
    return result;
  });
};

module.exports = order;