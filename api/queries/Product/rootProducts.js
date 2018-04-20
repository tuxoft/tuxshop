const { getProducts } = require("../../models/product");

const products = () => {
  return getProducts().then(result => {
    return result;
  });
};

module.exports = products;
