const jwt = require('jsonwebtoken');
const db = require('../database_connect'); // import modèle de la bdd
const fs = require("fs"); // gestion du système de fichier
const User = require('../models/user');

// création compte - signup
exports.signup = async (req, res, next) => {
    //Création d'un nouvel utilisateur
    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        pseudo: req.body.pseudo,
        bio: req.body.bio,
        photo: req.body.photo,
    });
    res.status(200).json(true);
};

// connexion  à un compte existant
exports.login = async (req, res, next) => {
    //Recherche de l'utilisateur dans la DB via son email 
    const user = await User.find({
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).json(true);

};

// récupérer un compte
exports.getAccount = async (req, res) => {
    // on trouve l'utilisateur et on renvoie l'objet user
    let sql = `SELECT * FROM Users WHERE id = ?`;
    db.query(sql, [req.params.id], function (err, data, fields) {
        if (err) {
            return res.status(404).json({ err });
        }
        res.json({ status: 200, data, message: "User affiché avec succès !" })
    });

};

// récupérer tous les comptes / utilisateurs
exports.getAllUsers = (req, res, next) => {

}

// suppression d'un compte
exports.deleteAccount = (req, res, next) => {
    let sql = `DELETE FROM Users WHERE id = ?`;
    db.query(sql, [req.params.id], function (err, data, fields) {
        if (err) {
            return res.status(400).json({ err: "Désolé, votre demande de suppression de compte n'a pu aboutir." });
        }
        res.json({ status: 200, data, message: "Votre compte a bien été supprimé !" });
    });
};

