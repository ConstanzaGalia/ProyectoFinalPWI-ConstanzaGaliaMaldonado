const {schemaUsers} = require('./schemas/schemaUsers');

const validateLogin = (req, res, next) => {
  const {error, value} = schemaUsers.login.validate(req.body);
  error ? res.render('login', {message: error.details[0].message}) : next();
}

const validateRegister = (req, res, next) => {
  const {error, value} = schemaUsers.registro.validate(req.body);
  error ? res.render('registro', {message: error.details[0].message}) : next();
}

module.exports = {validateLogin, validateRegister}