const express = require('express');
const { getUsers, insert } = require('../db/usersDB');
const { checkName, checkPassword, checkEmail, checkLastName } = require('../middlewares');

const router = express.Router();

router.post('/user', checkName, checkLastName, checkEmail, checkPassword, async (req, res) => {
  const [result] = await insert(req.body);

  res.status(200).json(result);
});

router.get('/users', async (req, res) => {
  const [result] = await getUsers();
  res.status(200).json(result);
});

module.exports = router;