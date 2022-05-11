const date = require('date.js');
const multer = require('multer');
const path = require('node:path');

const root = path.dirname(__dirname);
const imgDir = path.join(root + '/public/images/uploads/')

const storage = multer.diskStorage({
    destination:(req,file,cb) => cb(null,imgDir),
    filename:(req,file,cb) => cb(null,file.fieldname + Date.now() + '.' + file.mimetype.split('/')[1])
});

module.exports = storage;