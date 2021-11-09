const multer = require("multer"),
    path = require("path");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "..", "uploads"));
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.replace(
            new RegExp(/[ +!@#$%^&*().]/g),
            "_"
        );
        cb(null, `${ Date.now() }_${ fileName }${ path.extname(file.originalname) }`);
    },
});

module.exports = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
            return;
        }
        cb(new Error("File type not accepted."));
    },
});
