const checkLastName = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName) return res.status(400).json({ message: 'O sobrenome precisa ser informado' });
  if (lastName.length < 4) { 
    return res.status(400).json(
      { message: 'O sobrenome precisa ter mais de 3 caracteres informado' },
    ); 
  }

  next();
};

module.exports = checkLastName;