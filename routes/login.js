const express = require('express');
const router = express.Router();
const {auth} = require('../models/users');
const sha1 = require('sha1');

const showLogin = (req, res) => {
  res.render('login');
}

const login = async (req, res) => {
  const {email, pass} = req.body;
  const passEncrypted = sha1(pass);
  const logged = await auth(email, passEncrypted);
  logged.length === 0 ? res.render('login', {message: 'Email o Contraseña incorrecta'}) : res.redirect('/');
  console.log(logged);
}


router.post('/', login)
router.get('/', showLogin)
module.exports = router;