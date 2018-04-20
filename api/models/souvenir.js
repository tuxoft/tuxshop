const { db } = require("./db");

const getSouvenirById = (id) => {
  return db
    .table("souvenirs")
    .get(id)
    .run()
    .then(result => {
      return result;
    });
};

const getSouvenirs = () => {
  return db
    .table("souvenirs")
    .run();
};

const getAvailableSouvenirs = () => {
  return db
    .table("souvenirs")
    .filter(db.row("quantity").gt(0))
    .run();
};

module.exports = {
  getSouvenirById: getSouvenirById,
  getSouvenirs: getSouvenirs,
  getAvailableSouvenirs: getAvailableSouvenirs
};