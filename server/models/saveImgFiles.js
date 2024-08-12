import db from '../db.js';
const multer = require('multer');
const path = require('path');




export const uploadCamisaPremium = (req, res) => {
    const path = req;
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // Usa a variável de caminho para definir o destino das imagens
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            // Define o nome do arquivo com a extensão original
            cb(null, file.originalname);
        }
    });

    const upload = multer({ storage });
}