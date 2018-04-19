const repl = require("repl");
const { db } = require("./models/db");
const Kassa = require("./kassa");

const replServer = repl.start();

replServer.context.db = db;
replServer.context.kassa = new Kassa("kassa_token");