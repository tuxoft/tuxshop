const { getAvailableSouvenirs } = require("../../models/souvenir");

const availableSouvenirs = () => {
  return getAvailableSouvenirs().then(result => {
    return result;
  });
};

module.exports = availableSouvenirs;