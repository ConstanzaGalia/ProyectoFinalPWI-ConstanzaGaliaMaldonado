const pool = require('../utils/db');

const getAll = async() => {
    const query = "SELECT p.nombre, p.id, p.descripcion, p.precio, ip.uid, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id JOIN ?? as ip ON p.id = ip.id_producto WHERE p.eliminado = 0";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, process.env.T_IMGPRODUCTOS];
    return await pool.query(query, params);
}

const getSingle = async(id) => {
    const query = "SELECT p.nombre, p.id, p.descripcion, p.precio, p.id_categoria, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ?"
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, id];
    return await pool.query(query, params);
}

const createProduct = async (producto) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [process.env.T_PRODUCTOS, producto];
    return await pool.query(query, params);
}

const createImage = async (image) => {
    const query = "INSERT INTO ?? SET ?"
    const params = [process.env.T_IMGPRODUCTOS, image];
    return await pool.query(query, params);
}

const updateProduct = async (id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, obj, id];
    return await pool.query(query, params);
}

const deleteProduct = async (id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, id];
    return await pool.query(query, params);
}



module.exports = {getAll, getSingle, createProduct, updateProduct, deleteProduct, createImage};