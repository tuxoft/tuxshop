const { getAvailableProducts } = require("../../models/product");

const availableProducts = (_, { options = {} }) => {
  return getAvailableProducts(options).then(result => {
    return result;
  });
};

module.exports = availableProducts;
