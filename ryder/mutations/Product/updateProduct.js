const { updateProduct, getProductById } = require("../../models/product");

module.exports = (_, { id, product }, { user }) => {
  if (!user) {
    throw new Error("You must be signed in to update the product");
  }

  return updateProduct(id, product).then(result => {
    return getProductById(id).then(result => {
      return result;
    });
  });
};
