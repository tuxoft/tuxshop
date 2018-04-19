const { getSouvenirs } = require("../../models/souvenir");

const souvenirs = () => {
  return getSouvenirs().then(result => {
    return result;
  });
};

module.exports = souvenirs;