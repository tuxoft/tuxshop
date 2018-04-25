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

const saveOrder = (order) => {
  return db
    .table("orders")
    .insert(order)
    .run();
};

const updateOrder = (id, order) => {
  return db
    .table("orders")
    .get(id)
    .update(order)
    .run();
};

module.exports = {
  getOrderById: getOrderById,
  getOrders: getOrders,
  saveOrder: saveOrder,
  updateOrder: updateOrder
};
