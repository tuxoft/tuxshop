const { db } = require("./db");

const PRODUCTS_PER_PAGE = 10;

const filterQuery = query => {
  const queryPattern = query.toLowerCase();

  return db.or(
    db
      .row("title")
      .downcase()
      .match(queryPattern),
    db
      .row("author")
      .downcase()
      .match(queryPattern),
    db
      .row("description")
      .downcase()
      .match(queryPattern)
  );
};

const getProductsCount = (options = {}) => {
  return db
    .table("products")
    .filter(options.type ? { type: options.type } : {})
    .filter(options.query ? filterQuery(options.query) : {})
    .count()
    .run();
};

const getAvailableProductsCount = (options = {}) => {
  return db
    .table("products")
    .filter(db.row("quantity").gt(0))
    .filter(options.type ? { type: options.type } : {})
    .filter(options.query ? filterQuery(options.query) : {})
    .count()
    .run();
};

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
  return db
    .table("products")
    .filter(options.type ? { type: options.type } : {})
    .filter(options.query ? filterQuery(options.query) : {})
    .orderBy("createdAt")
    .skip(options.skip || 0)
    .limit(options.limit || PRODUCTS_PER_PAGE)
    .run();
};

const getAvailableProducts = (options = {}) => {
  return db
    .table("products")
    .filter(db.row("quantity").gt(0))
    .filter(options.type ? { type: options.type } : {})
    .filter(options.query ? filterQuery(options.query) : {})
    .orderBy("createdAt")
    .skip(options.skip || 0)
    .limit(options.limit || PRODUCTS_PER_PAGE)
    .run();
};

const saveProduct = product => {
  return db
    .table("products")
    .insert({
      ...product,
      createdAt: new Date()
    })
    .run();
};

const updateProduct = (id, product) => {
  return db
    .table("products")
    .get(id)
    .update(product)
    .run();
};

const deleteProduct = id => {
  return db
    .table("products")
    .get(id)
    .delete()
    .run();
};

module.exports = {
  getProductsCount: getProductsCount,
  getAvailableProductsCount: getAvailableProductsCount,
  getProductById: getProductById,
  getProducts: getProducts,
  getAvailableProducts: getAvailableProducts,
  saveProduct: saveProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};
