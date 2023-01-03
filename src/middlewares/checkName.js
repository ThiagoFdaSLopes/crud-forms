const checkName = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) return res.status(400).json({ message: 'O nome precisa ser informado' });
  if (firstName.length < 4) { 
    return res.status(400).json({ message: 'O nome precisa ter mais de 3 caracteres informado' }); 
  }

  next();
};

module.exports = checkName;