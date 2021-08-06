const express = require('express');
const router = express.Router();
const model = require('../../models/categorias');

const getAllCategories = async (req, res) => {
  const categorias = await model.getCategorias();
  res.render('adminCategorias', { categorias})
}

const deleteCategorias = async (req, res) => {
  const {id} = req.params;
  await model.deleteCategory(id);
  res.redirect('/admin/categorias');
}

const createCategories = async (req, res) => {
  const data = req.body;
  await model.createCategory(data);
  res.redirect('/admin/categorias');
}

const showCreateCategory = (req, res) => {
  res.render('adminCreateCategory')
}

const showUpdateCategory = async (req, res) => {
  const {id} = req.params;
  const [categoria] = await model.getSingleCategory(id);
  res.render('adminUpdateCategory', {categoria});
}

const updateCategory = async (req, res) => {
  const {id} = req.params;
  const obj = req.body;
  await model.updateCategory(id, obj);
  res.redirect('/admin/categorias');
}

router.post('/update/:id', updateCategory);
router.get('/update/:id', showUpdateCategory);
router.get('/create', showCreateCategory);
router.post('/create', createCategories);
router.get('/', getAllCategories);
router.get('/delete/:id', deleteCategorias);
module.exports = router;