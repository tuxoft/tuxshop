const product = require("./rootProduct");
const products = require("./rootProducts");
const availableProducts = require("./rootAvailableProducts");
const productsCount = require("./rootProductsCount");

module.exports = {
  Query: {
    product,
    products,
    availableProducts,
    productsCount,
  },
};
