const express = require('express');
const router = express.Router();
const {auth} = require('../models/users');
const sha1 = require('sha1');
const {validateLogin} = require('../middlewares/usersValidator');

const showLogin = (req, res) => {
  res.render('login');
}

const login = async (req, res) => {
  const {email, pass} = req.body;
  const passEncrypted = sha1(pass);
  const logged = await auth(email, passEncrypted);
  if (logged.length === 0) {
    res.render('login', {message: 'Email o Contraseña incorrecta, o email no verificado'})
  }else {
    const [{id, rol, name}] = logged;
    req.session.user = id;
    req.session.rol = rol;
    req.session.name = name;
    user = req.session.name;
    req.session.rol === 1 ? res.render('adminIndex', {admin: 'al panel de administrador', user}) : res.redirect('/');
  }
}

const logout = (req, res) => {
  req.session.destroy();
  console.log('logout')
  res.redirect('/');
}

router.get('/logout', logout);
router.post('/', validateLogin, login);
router.get('/', showLogin);
module.exports = router;