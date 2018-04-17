module.exports = {
  db: "tuxshop",
  driver: "rethinkdbdash",
  pool: true,
  servers: [
    { host: "localhost", port: 28015 }
  ],
  ssl: false
};