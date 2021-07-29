const pool = require('../utils/db');

const createUser = async (obj) =>{
  const query = "INSERT INTO ?? SET ?";
  const params = [process.env.T_USUARIOS, obj];
  return await pool.query(query, params);
}

const verifyUser = async (uid) => {
  const query = "UPDATE ?? SET habilitado = 1 WHERE confirmacionMail = ?"
  const params = [process.env.T_USUARIOS, uid]
  return await pool.query(query, params);
}

const auth = async (email, pass) => {
  const query = "SELECT * FROM ?? WHERE email = ? AND pass = ? AND habilitado = 1 AND eliminado = 0";
  const params = [process.env.T_USUARIOS, email, pass];
  return await pool.query(query, params);
}

module.exports = {createUser, verifyUser, auth}