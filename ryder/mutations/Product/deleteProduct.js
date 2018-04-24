const { deleteProduct, getProductById } = require("../../models/product");

module.exports = (_, { id }, { user }) => {
  console.log("deleteProduct: " + id + " user: " + user);

  return deleteProduct(id);
};
