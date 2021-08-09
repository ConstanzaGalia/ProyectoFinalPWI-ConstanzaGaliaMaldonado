const express = require ('express');
const router = express.Router();
const {getAll, getSingle} = require('../models/productos');


const all = async (req, res) => {
  user = req.session.name;
  const productos = await getAll();
  res.render('productos', {titulo: ' a Entrenamiento STP', productos, user});
}

const single = async (req, res) => {
  user = req.session.name;
  const {id} = req.params;
  const [producto] = await getSingle(id);
  res.render ('singleProduct', {titulo: ' a Entrenamiento STP', producto, user});
}

router.get('/singleProduct/:id', single);
router.get('/', all);
module.exports = router;
