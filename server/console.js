const repl = require("repl");
const { db } = require("./models/db");

const replServer = repl.start();

replServer.context.db = db;