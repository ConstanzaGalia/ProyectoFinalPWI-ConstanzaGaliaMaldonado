const express = require ('express');
const router = express.Router();
const {getAll, getSingle} = require('../models/productos');


const all = async (req, res) => {
  const productos = await getAll();
  res.render('productos', {productos});
}

const single = async (req, res) => {
  const {id} = req.params;
  const [producto] = await getSingle(id);
  res.render ('singleProduct', {producto});
}

router.get('/singleProduct/:id', single);
router.get('/', all);
module.exports = router;
