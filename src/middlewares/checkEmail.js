const checkEmail = (req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: 'O password precisa ser informado' });
  if (password.length < 9) { 
    return res.status(400).json(
      { message: 'O password precisa ter mais de 8 caracteres informado' },
    ); 
  }

  next();
};

module.exports = checkEmail;