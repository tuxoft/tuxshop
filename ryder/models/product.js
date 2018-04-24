const { db } = require("./db");

const getProductById = id => {
  return db
    .table("products")
    .get(id)
    .run()
    .then(result => {
      return result;
    });
};

const getProducts = (options = {}) => {
  let filters = {};

  if (options.type) {
    filters.type = options.type;
  }

  return db
    .table("products")
    .filter(filters)
    .run();
};

const getAvailableProducts = (options = {}) => {
  let filters = {};

  if (options.type) {
    filters.type = options.type;
  }

  return db
    .table("products")
    .filter(db.row("quantity").gt(0))
    .filter(filters)
    .run();
};

const saveProduct = product => {
  return db
    .table("products")
    .insert(product)
    .run();
};

const updateProduct = (id, product) => {
  return db
    .table("products")
    .get(id)
    .update(product)
    .run();
};

const deleteProduct = (id) => {
  return db
    .table("products")
    .get(id)
    .delete()
    .run();
};

module.exports = {
  getProductById: getProductById,
  getProducts: getProducts,
  getAvailableProducts: getAvailableProducts,
  saveProduct: saveProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
