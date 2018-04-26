const { getAvailableProductsCount } = require("../../models/product");

const count = (_, { options = {} }) => {
  return getAvailableProductsCount(options).then(result => {
    return result;
  });
};

module.exports = count;
