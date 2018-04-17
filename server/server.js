const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const compression = require("compression");

const schema = require("./schema");

const GRAPHQL_PORT = 4000;

const app = express();

// Middlewares
app.use(compression());

app.use("/graphql", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,
  }),
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`,
  ),
);
