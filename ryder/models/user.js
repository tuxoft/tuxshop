const { db } = require("./db");

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

const createUser = (user) => {
  return db
    .table("users")
    .insert(user)
    .run()
    .then(result => {
      return result;
    })
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
  updateUser
};