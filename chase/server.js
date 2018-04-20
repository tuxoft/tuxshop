const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const { handleWebhooks } = require("./webhooks");

const PORT = 5000;

const app = express();

app.use(helmet());

app.get("/", (req, res) => res.status(200).send({ chase: "running" }));

app.post("/webhooks", (req, res) => handleWebhooks(req, res));

app.listen(PORT, () =>
  console.log(`Chase is now running on http://localhost:${PORT}`),
);
