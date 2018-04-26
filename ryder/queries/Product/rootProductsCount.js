const { getProductsCount } = require("../../models/product");

const count = (_, { options = {} }) => {
  return getProductsCount(options).then(result => {
    return result;
  });
};

module.exports = count;
