const pool = require('../utils/db');

const getCategorias = async () => {
  const query = "SELECT * FROM ??"
  const params = [process.env.T_CATEGORIAS]
  return await pool.query(query, params);
}

module.exports = {getCategorias}