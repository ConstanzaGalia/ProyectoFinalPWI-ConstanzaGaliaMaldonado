const nodemailer = require('nodemailer');

const send = async ({mail, asunto = 'Gracias por registrarte', cuerpo}) => {

  try {
  const transporter =  nodemailer.createTransport({
    service: process.env.MAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    }
  });

  const info = {
    from: '<noreplay><noreplay>',
    to: mail,
    subject: asunto, 
    html: cuerpo,
  }

  const {mensajeId} = await transporter.sendMail(info);
  return mensajeId;
}
catch(error) {
  console.log(error);
}
}


module.exports = {send};