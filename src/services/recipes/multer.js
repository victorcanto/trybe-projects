const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './src/uploads/');
  },
  filename: ({ params: { id } }, _file, cb) => {
    cb(null, `${id}.jpeg`);
  },
});

exports.upload = multer({ storage });
