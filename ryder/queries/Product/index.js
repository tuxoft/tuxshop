const product = require("./rootProduct");
const products = require("./rootProducts");
const availableProducts = require("./rootAvailableProducts");

module.exports = {
  Query: {
    product,
    products,
    availableProducts,
  },
};
