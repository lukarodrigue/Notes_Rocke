const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

<<<<<<< HEAD
const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads");
=======

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tpm");
const UPLOADS_FOLDER = path.resolve(__dirname, "upload");
>>>>>>> 034614910870b671bed44fcfc5e68348ebeeeb56

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};

module.exports = {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER
}