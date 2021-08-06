const express = require('express');
const router = express.Router();
const model = require('../../models/categorias');


const getAllCategories = async (req, res) => {
  const categorias = await model.getCategorias();
  res.render('adminCategorias', { categorias})
}

const deleteCategorias = async (req, res) => {
  const {id} = req.params;
  console.log(id)
  await model.deleteCategory(id);
  res.redirect('/admin/categorias');
}

router.get('/', getAllCategories);
router.get('/delete/:id', deleteCategorias);
module.exports = router;