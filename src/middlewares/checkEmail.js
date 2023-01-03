const checkEmail = (req, res, next) => {
  const { email } = req.body;

  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!email) return res.status(400).json({ message: 'O email precisa ser informado' });
  if (!regexEmail.test(email)) { 
    return res.status(400).json(
      { message: 'O email precisa ser formato correto @provedor.com.br ou @provedor.com' },
    ); 
  }

  next();
};

module.exports = checkEmail;