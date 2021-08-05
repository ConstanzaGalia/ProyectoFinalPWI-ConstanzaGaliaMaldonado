const express = require('express');
const router = express.Router();
const model = require('../../models/users');

const getAllUsers = async (req, res) => {
  const users = await model.getAllUsers();
  res.render('adminUsuarios', {users})
}

const deleteUser = async (req, res) => {
  const {id} = req.params;
  await model.deleteUsers(id);
  res.redirect('/admin/usuarios')
}

const showUpdateUser = async (req, res) => {
  const {id} = req.params;
  const [user] = await model.getSingleUser(id);
  res.render('adminUserUpdate', {user});
}

const updateUser = async (req, res) => {
  const {id} = req.params;
  console.log(id, req.body)
  await model.updateUsers(id, req.body);
  res.redirect('/admin/usuarios')
}

router.post('/update/:id', updateUser)
router.get('/update/:id', showUpdateUser);
router.get('/', getAllUsers);
router.get('/delete/:id', deleteUser);
module.exports = router;