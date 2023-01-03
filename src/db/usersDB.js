const conn = require('./connection');

const insert = (people) => conn.execute(
  'INSERT INTO crudforms.users (first_name, last_name, user_password, email) VALUES(?, ?, ?, ?)',
  [people.firstName, people.lastName, people.password, people.email],
);

const validateEmail = (email) => conn.execute(
  'SELECT email FROM crudforms.users WHERE email = ?',
  [email],
);

const getUsers = () => conn.execute(
  'SELECT * FROM crudforms.users',
);

module.exports = {
  getUsers,
  insert,
  validateEmail,
};
