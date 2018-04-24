const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");

const init = () => {
  // Configure the local strategy for use by Passport.
  //
  // The local strategy require a `verify` function which receives the credentials
  // (`email` and `password`) submitted by the user.  The function must verify
  // that the password is correct and then invoke `done` callback with a user object, which
  // will be set at `req.user` in route handlers after authentication.
  passport.use(new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
    const user = await User.getUser({ email });

    if (!user) return done(null, false);
    if (!User.authenticate(user, password)) return done(null, false);

    console.log("User found: ", user);

    return done(null, user);
  }));

  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.getUser({ id });

    if (!user) return done("User not found");

    done(null, user);

    return null;
  });
};

module.exports = {
  initPassport: init
};
