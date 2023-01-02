const express = require('express');
const { getUsers, insert } = require('../db/usersDB');

const router = express.Router();

router.post('/user', async (req, res) => {
  const [result] = await insert(req.body);

  res.status(200).json(result);
});

router.get('/users', async (req, res) => {
  const [result] = await getUsers();
  res.status(200).json(result);
});

module.exports = router;