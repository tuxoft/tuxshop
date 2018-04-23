const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const compression = require("compression");
const session = require("express-session");
const helmet = require("helmet");

// Initialize authentication
const passport = require("./authentication").initPassport();

const schema = require("./schema");

const GRAPHQL_PORT = 4000;

const app = express();

// Middlewares
app.use(compression());
app.use(helmet());

app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  session({
    secret: "tuxshop secret asadsd",
    resave: false,
    saveUninitialized: false
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Authentication
app.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("login success");

  res.redirect("http://localhost:3000");
});

// GraphiQL API
app.use("/graphql", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
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
    tracing: true
  })
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
);
