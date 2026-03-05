import multer from 'multer';
import path from 'path';

export const uploadCamisaPremium = () => {

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.resolve(__dirname, '../../../src/assets/Images/Products/Camisa/Camisa Premium/');
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }

    });

    return multer({ storage }).single('file', 10);
};