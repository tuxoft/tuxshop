const { deleteProduct, getProductById } = require("../../models/product");

module.exports = (_, { id }) => {
  return deleteProduct(id);
};
