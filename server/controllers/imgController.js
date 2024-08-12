import * as imgModel from "../models/saveImgFiles.js"

const uploadPath = path.join(__dirname, '../../../src/assets/Images/Products/Camisa/Camisa Premium');

export const uploadCamisaPremium = (req, res) => {
    imgModel.uploadCamisaPremium((err, result) => {
        if (err) {
            console.error("Error upload img in files:", err);
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
        }
    });
};