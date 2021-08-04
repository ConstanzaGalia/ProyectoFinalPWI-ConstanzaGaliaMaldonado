const {createProduct, createImage, updateProduct, updateImage} = require('../models/productos');
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

const updateProductWithImage = async (id, body, file) => {
  try {
    const {insertId: id_producto} = await updateProduct(id, body);
    if (file) {
      const uid = imageFile(file);
      const obj = {uid};
      const {insertId: idImg} = await updateImage(id, obj);
      return idImg;
    } else {
      return id_producto;
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {createProductWithImage, updateProductWithImage}