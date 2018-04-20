const { getProducts } = require("../../models/product");

const products = (_, { options = {} }) => {
  return getProducts(options).then(result => {
    return result;
  });
};

module.exports = products;
