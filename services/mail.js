const nodemailer = require('nodemailer');
//envio de mail tiene asociada una demora, por lo tanto usamos async await.


const send = async ({mail, asunto = 'Gracias por registrarte', cuerpo}) => {

  //Creamos el envio del mail, con nodemailer.
  try {


  const transporter =  nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
    //SERVICE GMAIL, ES LO MISMO QUE LO DE ARRIBA!!!
    service: process.env.MAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    }
  });


  //Luego declaramos la info del mail que queremos mandar.

  const info = {
    from: '<noreplay><noreplay>',
    to: mail,
    subject: asunto, 
    // para el cuerpo del mail podemos enviar por HTML O TEXTO
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