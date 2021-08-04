const Joi = require('@hapi/joi');

const schemaUsers = {
  login: Joi.object().keys({
    email: Joi.string().email().required().messages({
      "string.empty": `Todos los campos deben estar completos`,
    }),
    pass: Joi.string().min(6).max(20).required().messages({
      "string.empty": `Todos los campos deben estar completos`,
      "string.min": `La contraseña debe tener como mínimo 6 caracteres`,
      "string.max": `La contraseña puede terner como máximo 20 caracteres`,
    }),
  }),
  registro: Joi.object().keys({
    name: Joi.string().required().messages({
      "string.empty": `Todos los campos deben estar completos`,
    }),
    email: Joi.string().email().required().messages({
      "string.empty": `Todos los campos deben estar completos`,
    }),
    pass: Joi.string().min(6).max(20).required().messages({
      "string.empty": `Todos los campos deben estar completos`,
      "string.min": `La contraseña debe tener como mínimo 6 caracteres`,
      "string.max": `La contraseña puede terner como máximo 20 caracteres`,
    }),
  })
}

module.exports = {schemaUsers}