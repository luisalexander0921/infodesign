const path = require('path');
const multer = require('multer');
const uuid = require('uuid-random');
const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/images"),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname))
    }
}); 
module.exports = multer({ storage });
