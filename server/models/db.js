const PRODUCTION = process.env.NODE_ENV === "production";

const config = {
  db: "tuxshop",
  max: 500,
  buffer: 5,
  timeoutGb: 60 * 1000
};

const r = require("rethinkdbdash")(config);

module.exports = { db: r };