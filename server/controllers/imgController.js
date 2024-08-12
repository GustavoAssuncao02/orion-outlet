import * as imgModel from "../models/saveImgFilesModel.js";
import path from 'path';

export const uploadCamisaPremium = (req, res) => {
    const uploadPath = req.body.uploadPath || path.join(__dirname, '../../../src/assets/Images/Products/Camisa/Camisa Premium');
    const upload = imgModel.uploadCamisaPremium(uploadPath);

    upload(req, res, (err) => {
        if (err) {
            console.error("Error uploading image:", err);
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Upload successful!' });
        }
    });
};
