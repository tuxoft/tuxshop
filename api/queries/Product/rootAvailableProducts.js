const { getAvailableProducts } = require("../../models/product");

const availableProducts = () => {
  return getAvailableProducts().then(result => {
    return result;
  });
};

module.exports = availableProducts;
