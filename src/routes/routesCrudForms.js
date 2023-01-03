const express = require('express');
const { getUsers, validateEmail, insert } = require('../db/usersDB');
const { checkName, checkPassword, checkEmail, checkLastName } = require('../middlewares');

const router = express.Router();

router.post('/user', checkName, checkLastName, checkEmail, checkPassword, async (req, res) => {
  const { email } = req.body;

  const [checkedEmail] = await validateEmail(email);
  if (checkedEmail.length === 1) return res.status(400).json({ message: 'Email ja cadastrado' });
  
  const [result] = await insert(req.body);

  if (result.affectedRows === 1) {
    return res.status(201).json({ message: 'Usuario cadastrado com Sucesso ' });
  }
});

router.get('/users', async (req, res) => {
  const [result] = await getUsers();
  res.status(200).json(result);
});

module.exports = router;