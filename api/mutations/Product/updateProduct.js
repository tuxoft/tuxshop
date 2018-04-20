const { updateProduct, getProductById } = require("../../models/product");

module.exports = (_, { id, product }) => {
  return updateProduct(id, product).then(result => {
    return getProductById(id).then(result => {
      return result;
    });
  });
};
