const { deleteProduct, getProductById } = require("../../models/product");

module.exports = (_, { id }, { user }) => {
  if (!user) {
    throw new Error("You must be signed in to delete the product");
  }

  return deleteProduct(id);
};
