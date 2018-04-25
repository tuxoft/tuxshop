const { saveProduct, getProductById } = require("../../models/product");
const UserError = require("../../utils/UserError");

module.exports = (_, { product }, { user }) => {
  if (!user) {
    return new UserError("You must be signed in to create the product", "authentication");
  }

  return saveProduct(product).then(result => {
    // Get generated key from rethinkdb
    const id = result.generated_keys[0];

    return getProductById(id).then(result => {
      return result;
    });
  });
};
