import db from '../db.js';
import multer from 'multer';



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