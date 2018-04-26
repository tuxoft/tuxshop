const { getCount } = require("../../models/product");

const count = (_, { options = {} }) => {
  return getCount(options).then(result => {
    return result;
  });
};

module.exports = count;
