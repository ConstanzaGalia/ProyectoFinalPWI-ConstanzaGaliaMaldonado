const {createProduct, createImage} = require('../models/productos');
const {imageFile} = require('../utils/fileHandler');

const createProductWithImage = async (body, file) => {
  try {
    const {insertId: id_producto} = await createProduct(body);
    const uid = imageFile(file);
    const obj = {id_producto, uid};
    const {insertId: idImg} = await createImage(obj);
    return idImg;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createProductWithImage}