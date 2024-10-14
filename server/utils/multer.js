const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload/");
  },
  filename: (req, file, cb) => {
    const id = uuidv4();
    const filename = `${id}${path.extname(file.originalname)}`;
    cb(null, filename);
    req.body.cover_image = filename;
  },
});

const upload = multer({ storage });

module.exports = upload;
