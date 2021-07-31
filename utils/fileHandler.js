const fs = require('fs');
const {v4: uuid} = require('uuid');
const allowExtensions = ['png', 'jpg', 'jpeg'];

const saveFile = (file, allowExt) => {
  try {
    const [type, extension] = file.mimetype.split('/');
    if(!allowExt.includes(extension)) throw "Formato Incorrecto";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `./public/images/${uid}.${extension}`;
    fs.createReadStream(file.path).pipe(fs.createWriteStream(fileNameOut));
    fs.unlink(file, (err) => console.log(err));
    return fileName;
  } catch (error) {
    fs.unlink(file, (err) => console.log(err));
    console.log(error);
  }
}

const imageFile = (file) => saveFile(file, allowExtensions);

module.exports = {imageFile}