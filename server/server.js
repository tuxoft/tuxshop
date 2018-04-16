const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const compression = require("compression");

const schema = require("./schema");

const GRAPHQL_PORT = 4000;

const graphqlServer = express();

// Middlewares
graphqlServer.use(compression());

graphqlServer.use("/graphql", (req, res, next) => {
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

graphqlServer.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({
    schema,
    tracing: true,
  }),
);

graphqlServer.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

graphqlServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`,
  ),
);
