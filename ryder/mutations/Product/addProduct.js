const { saveProduct, getProductById } = require("../../models/product");

module.exports = (_, { product }, { user }) => {
  if (!user) {
    throw new Error("You must be signed in to create the product");
  }

  return saveProduct(product).then(result => {
    // Get generated key from rethinkdb
    const id = result.generated_keys[0];

    return getProductById(id).then(result => {
      return result;
    });
  });
};
