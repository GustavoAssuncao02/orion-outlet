import db from '../db.js';
import multer from 'multer';


export const uploadCamisaPremium = (img) => {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = `../../../src/assets/Images/Products/Camisa/Camisa Premium/`;
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });
    return multer({ storage }).single('file');

};