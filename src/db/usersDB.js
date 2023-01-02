const conn = require('./connection');

const insert = (people) => conn.execute(
  'INSERT INTO users (first_name, last_name, user_password, email) VALUES(?, ?, ?, ?)',
  [people.firstName, people.lastName, people.password, people.email],
);

const getUsers = () => conn.execute(
  'SELECT * FROM crudforms.users',
);

module.exports = {
  getUsers,
  insert,
};