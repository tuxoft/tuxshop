const { db } = require("./db");

const getProductById = (id) => {
  return db
    .table("products")
    .get(id)
    .run()
    .then(result => {
      return result;
    });
};

const getProducts = () => {
  return db
    .table("products")
    .run();
};

const getAvailableProducts = () => {
  return db
    .table("products")
    .filter(db.row("quantity").gt(0))
    .run();
};

const saveProduct = (product) => {
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

module.exports = {
  getProductById: getProductById,
  getProducts: getProducts,
  getAvailableProducts: getAvailableProducts,
  saveProduct: saveProduct,
  updateProduct: updateProduct
};
