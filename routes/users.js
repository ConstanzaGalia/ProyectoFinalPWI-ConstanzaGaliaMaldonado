const express = require('express');
const router = express.Router();

/* GET users listing. */

const users = [
  {
    id: 1,
    nombre: 'coco',
    apellido: 'galia'
  },
  {
    id: 2,
    nombre: 'cami',
    apellido: 'galia'
  },
  {
    id: 3,
    nombre: 'bob',
    apellido: 'esponja'
  }
];

const listar = (req, res) => {
  res.render('users', {users})
}

const single = (req, res) => {
  const {id} = req.params;
  console.log(id);
  const usuario = users.find((user) => user.id == id);
  console.log(usuario);
  res.render('single', {usuario});
}

router.get('/', listar);
router.get('/single/:id', single);

module.exports = router;
