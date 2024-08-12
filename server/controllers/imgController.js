import * as imgModel from "../models/imgModel.js";

export const uploadCamisaPremium = (req, res) => {
    const conteudo = req
    const upload = imgModel.uploadCamisaPremium(conteudo);
    upload(req, res, (err) => {
        if (err) {
            console.error("Error uploading image:", err);
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Upload successful!' });
        }
    });
};
