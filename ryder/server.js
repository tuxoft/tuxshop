const express = require("express");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const session = require("express-session");
const helmet = require("helmet");
const passport = require("passport");
const cors = require("cors");

// Initialize authentication
const { initPassport } = require("./authentication");

const schema = require("./schema");

const GRAPHQL_PORT = 4000;

const app = express();

const _cors = cors({
  origin: [/localhost/],
  credentials: true,
});

// Middlewares
app.use(_cors);
app.options("*", _cors);

app.use(compression());
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "tuxshop secret asadsd",
    resave: false,
    saveUninitialized: false,
  }),
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

initPassport();

// Authentication
app.get("/user", (req, res, next) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
      authenticated: true,
    });
  } else {
    return res.status(401).json({
      error: "Incorrect email or password.",
      authenticated: false,
    });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  req.session.save(error => {
    if (error) {
      return next(error);
    }

    console.log(req.session);

    res.status(200).json({ success: true });
  });
});

app.get("/logout", (req, res) => {
  req.logout();

  req.session.save(error => {
    if (error) {
      return next(error);
    }

    res.status(200).send("OK");
  });
});

app.use(
  "/graphql",
  graphqlExpress(req => ({
    schema,
    tracing: true,
    context: {
      user: req.user,
    },
  })),
);

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`,
  ),
);
