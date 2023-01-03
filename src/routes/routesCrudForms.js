const express = require('express');
const { getUsers, validateEmail, insert, editUser } = require('../db/usersDB');
const { checkName, checkPassword, checkEmail, checkLastName } = require('../middlewares');

const router = express.Router();

router.post('/user', checkName, checkLastName, checkEmail, checkPassword, async (req, res) => {
  const { email } = req.body;

  const [checkedEmail] = await validateEmail(email);
  if (checkedEmail.length === 1) return res.status(400).json({ message: 'Email ja cadastrado' });
  
  const [result] = await insert(req.body);

  if (result.affectedRows === 1) {
    return res.status(201).json(
      { message: 'Usuario cadastrado com Sucesso ', id: result.insertId },
    );
  }
});

router.put('/edituser/:id',
  checkName, checkLastName, checkEmail, checkPassword, async (req, res) => {
  const { id } = req.params;

  const [edit] = await editUser(req.body, id);

  if (edit.affectedRows === 0) {
    return res.status(400).json({ message: 'Usuario nao encontado' });
  }

  res.status(202).json({ message: `Usuario ${id} editado com sucesso` });
});

router.get('/users', async (req, res) => {
  const [result] = await getUsers();
  res.status(200).json(result);
});

module.exports = router;