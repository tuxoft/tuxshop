const repl = require("repl");
const { db } = require("./models/db");
const kassa = require("./kassa");

const replServer = repl.start();

replServer.context.db = db;
replServer.context.kassa = kassa;