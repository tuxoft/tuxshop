const crypto = require("crypto");
const nanoid = require("nanoid");
const { db } = require("./db");

const encryptPassword = (password, salt) => {
  return crypto
    .createHmac("sha1", salt)
    .update(password)
    .digest("hex");
};

const generateSalt = () => {
  return nanoid();
};

const authenticate = (user, password) => {
  return encryptPassword(password, user.salt) === user.password;
};

const getUser = async input => {
  if (input.id) return await getUserById(input.id);
  if (input.email) return await getUserByEmail(input.email);
  return null;
};

const getUserById = id => {
  return db
    .table("users")
    .get(id)
    .run();
};

const getUserByEmail = email => {
  return db
    .table("users")
    .getAll(email, { index: "email" })
    .run()
    .then(results => (results.length > 0 ? results[0] : null));
};

const createUser = user => {
  const salt = generateSalt();
  const password = user.password;

  const userInput = {
    ...user,
    salt,
    password: encryptPassword(password, salt)
  };

  return db
    .table("users")
    .insert(userInput)
    .run()
    .then(result => {
      return result;
    });
};

const updateUser = (id, user) => {
  return db
    .table("users")
    .get(id)
    .update(user)
    .run();
};

module.exports = {
  getUser,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  authenticate,
  encryptPassword
};
