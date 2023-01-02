const express = require('express');
const { getUsers } = require('../db/usersDB');

const router = express.Router();

router.get('/users', async (req, res) => {
  const [users] = await getUsers();
  res.status(200).json(users);
});

module.exports = router;