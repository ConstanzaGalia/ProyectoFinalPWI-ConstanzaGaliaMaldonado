const express = require('express');
const router = express.Router();
const sha1 = require('sha1');
const {v4: uuid} = require('uuid');
const {send} = require('./../services/mail');
const {createUser, verifyUser, getAllUsers} = require('../models/users');
const {validateRegister} = require('../middlewares/usersValidator');

const register = (req, res) => {
  res.render('registro');
}

const create = async (req, res) => {
  const {body : usuario} = req;
  const uid = uuid();
  let duplicado = false;
  const usuarioFinal = {
    name: usuario.name,
    email: usuario.email,
    pass: sha1(usuario.pass),
    confirmacionMail: uid, 
  }
  const usuariosExistentes = await getAllUsers();
  usuariosExistentes.forEach(user => {
    if (user.email === usuarioFinal.email) {
      duplicado = true;
      res.render('registro', {message: 'Email ya registrado'})
    } 
  })
  if (!duplicado) {
    await createUser(usuarioFinal);
    send({mail: usuarioFinal.email, 
          cuerpo:
          `<h3>Bienvenido ${usuarioFinal.name} a Entrenamiento STP</h3>
          <a href="${process.env.URL_SERVER}:${process.env.PORT}/registro/verify/${usuarioFinal.confirmacionMail}">
            Hacé click aqui para confirmar tu dirección de correo
          </a>
          `
          });
    res.redirect('/');
  }
}

const verify = async (req, res) => {
  const {uid} = req.params;
  await verifyUser(uid);
  res.redirect('/');
  console.log(uid)
}

router.get('/', register);
router.get('/verify/:uid', verify)
router.post('/', validateRegister ,create);

module.exports = router;