const express = require("express");
const { createServer } = require("http");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { handleWebhooks } = require("./webhooks");

const PORT = 5000;

const app = express();

app.use(helmet());

// Parse incoming request bodies for webhooks
app.use(require('body-parser').raw({ type: '*/*' }));

app.get("/", (req, res) => res.status(200).send({ chase: "running" }));

app.post('/webhooks', (req, res) => handleWebhooks(req, res));

const server = createServer(app);

server.listen(PORT);

console.log(`Chase is now running on http://localhost:${PORT}`);
