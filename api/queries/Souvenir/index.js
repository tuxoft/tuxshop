const souvenir = require("./rootSouvenir");
const souvenirs = require("./rootSouvenirs");
const availableSouvenirs = require("./rootAvailableSouvenirs");

module.exports = {
  Query: {
    souvenir,
    souvenirs,
    availableSouvenirs
  }
};