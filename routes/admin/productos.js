const express = require('express');
const router = express.Router();
const model = require('../../models/productos');
const modelCategorias = require('../../models/categorias');

const getProducts = async (req, res) => {
  const productos = await model.getAll();
  res.render('adminProductos', {productos});
}

const showCreate = async (req, res) => {
  const categorias = await modelCategorias.getCategorias();
  res.render('adminCreateProducto', {categorias});
}

const createProduct = async (req, res) => {
  const producto = req.body;
  console.log(producto)
  const insertId = model.createProduct(producto);
  console.log(insertId);
  res.redirect('/admin/productos')
}

router.get('/', getProducts);
router.get('/create', showCreate);
router.post('/create', createProduct);
// router.get('/update/:id', showUpdate);
// router.post('/update/:id', updateProduct);
// router.get('/delete/:id', deleteProduct);
module.exports = router;