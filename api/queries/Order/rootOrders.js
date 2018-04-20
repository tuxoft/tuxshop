const { getOrders } = require("../../models/order");

const orders = () => {
  return getOrders().then(result => {
    return result;
  });
};

module.exports = orders;