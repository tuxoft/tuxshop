const { updateProduct, getProductById } = require("../../models/product");
const UserError = require("../../utils/UserError");

module.exports = (_, { id, product }, { user }) => {
  if (!user) {
    return new UserError("You must be signed in to update the product", "authentication");
  }

  return updateProduct(id, product).then(result => {
    return getProductById(id).then(result => {
      return result;
    });
  });
};
