const addProduct = require("./addProduct");
const updateProduct = require("./updateProduct");
const deleteProduct = require("./deleteProduct");

module.exports = {
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct
  }
};
