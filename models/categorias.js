const pool = require('../utils/db');

const getCategorias = async () => {
  try {
    const query = "SELECT * FROM ?? WHERE eliminado = 0";
    const params = [process.env.T_CATEGORIAS];
    return await pool.query(query, params); 
  } catch (error) {
    console.log(error)
  }
}

const createCategory = async (obj) => {
  try {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CATEGORIAS, obj];
    return await pool.query(query, params);
  } catch (error) {
    console.log(error)
  }
}

const deleteCategory = async (id) => {
  try {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, id];
    return await pool.query(query, params);
  } catch (error) {
    console.log(error)
  }
}

const getSingleCategory = async (id) => {
  try {
    const query = "SELECT c.nombre, c.id FROM ?? AS c WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, id];
    return await pool.query(query, params);
  } catch (error) {
    console.log(error)
  }
}

const updateCategory = async (id, obj) => {
  try {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_CATEGORIAS, obj, id];
    return await pool.query(query, params);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {getCategorias, deleteCategory, getSingleCategory, updateCategory, createCategory}