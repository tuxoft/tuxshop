const { getProductById } = require("../../models/product");

const product = (_, { id }) => {
  return getProductById(id).then(result => {
    return result;
  });
};

module.exports = product;
