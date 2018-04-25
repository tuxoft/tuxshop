const { deleteProduct, getProductById } = require("../../models/product");
const UserError = require("../../utils/UserError");

module.exports = (_, { id }, { user }) => {
  if (!user) {
    return new UserError("You must be signed in to delete the product", "authentication");
  }

  return deleteProduct(id);
};
