const { db } = require("./db");

const getOrderById = (id) => {
  return db
    .table("orders")
    .get(id)
    .run()
    .then(result => {
      return result;
    });
};

const getOrders = () => {
  return db
    .table("orders")
    .run();
};

const storeOrder = (order) => {
  return db
    .table("orders")
    .insert(order)
    .run();
};

module.exports = {
  getOrderById: getOrderById,
  getOrders: getOrders,
  storeOrder: storeOrder
};