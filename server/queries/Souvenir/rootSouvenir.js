const { getSouvenirById } = require("../../models/souvenir");

const souvenir = (id) => {
  return getSouvenirById(id).then(result => {
    return result;
  });
};

module.exports = souvenir;