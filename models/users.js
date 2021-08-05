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

const getAllUsers = async () => {
  const query = "SELECT * FROM ?? WHERE eliminado = 0";
  const params = [process.env.T_USUARIOS];
  return await pool.query(query, params);
}

const getSingleUser = async (id) => {
  const query = "SELECT u.name, u.email, u.habilitado, u.rol, u.id FROM ?? AS u WHERE u.id = ?";
  const params = [process.env.T_USUARIOS, id];
  return await pool.query(query, params);
}

const deleteUsers = async (id) => {
  const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
  const params = [process.env.T_USUARIOS, id];
  return await pool.query(query, params);
}

const updateUsers = async (id, obj) => {
  const query = "UPDATE ?? SET ? WHERE id = ?";
  const params = [process.env.T_USUARIOS, obj, id];
  return await pool.query(query, params);
}

module.exports = {createUser, verifyUser, auth, getAllUsers, deleteUsers, updateUsers, getSingleUser}