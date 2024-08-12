import db from '../db.js';
const multer = require('multer');
const path = require('path');



export const uploadCamisaPremium = (uploadPath) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });

    return multer({ storage }).single('file');
};