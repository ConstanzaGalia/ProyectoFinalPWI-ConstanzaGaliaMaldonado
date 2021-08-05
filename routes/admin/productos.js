const express = require('express');
const router = express.Router();
const model = require('../../models/productos');
const modelCategorias = require('../../models/categorias');
const multer = require('multer');
const config = {dest: './public/temp'};
const upload = multer(config);
const service = require('../../services/productos');

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
  const file = req.file;
  await service.createProductWithImage(producto, file);
  res.redirect('/admin/productos')
}

const deleteProduct = async (req, res) => {
  const {id} = req.params;
  await model.deleteProduct(id);
  await model.deleteImage(id);
  res.redirect('/admin/productos');
}

const showUpdate = async (req, res) => {
  const {id} = req.params;
  const [producto] = await model.getSingle(id);
  const categorias = await modelCategorias.getCategorias();
  res.render('adminUpdateProducto', {producto, categorias});
}

const updateProduct = async (req, res) => {
  const {id} = req.params;
  await service.updateProductWithImage(id, req.body, req.file);
  res.redirect('/admin/productos')
}

router.get('/', getProducts);
router.get('/create', showCreate);
router.post('/create', upload.single("imagen") ,createProduct);
router.get('/update/:id', showUpdate);
router.post('/update/:id', upload.single("imagen"), updateProduct);
router.get('/delete/:id', deleteProduct);
module.exports = router;