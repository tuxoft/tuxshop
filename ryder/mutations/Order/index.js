const addOrder = require("./addOrder");
const updateOrder = require("./updateOrder");
const updateOrderWithPayment = require("./updateOrderWithPayment");

module.exports = {
  Mutation: {
    addOrder,
    updateOrder,
    updateOrderWithPayment
  }
};