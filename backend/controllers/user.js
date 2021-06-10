const bcrypt = require('bcrypt'); // cryptage d'un string
const jwt = require('jsonwebtoken');
const db = require('../database_connect'); // import modèle de la bdd
const fs = require("fs"); // gestion du système de fichier
require('dotenv').config();

// création compte - signup
exports.signup = async (req, res, next) => {
    //Cryptage du password
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            //Création d'un nouvel utilisateur
            const user = new User({
                email: req.body.email,
                password: hash,
                pseudo: req.body.pseudo,
                bio: req.body.bio,
                photo: req.body.photo,
            });
            //Enregistrement du new user dans la base de données
            let sql = `INSERT INTO Users(email, password, pseudo, bio, photo) VALUES (?)`;
            let values = [user.email, user.password, user.pseudo, user.bio, user.photo];
            db.query(sql, [values], function (err, data, fields) {
                if (err) {
                    return res.status(400).json({ err });
                }
                //Si absence d'erreur, on crée un nouveau token pour ce new user
                let sql = `SELECT * FROM Users WHERE email = ?`;
                db.query(sql, [req.body.email], function (err, data, fields) {
                    if (err) {
                        return res.status(404).json({ err });
                    }
                    res.status(200).json({
                        userId: data[0].id,
                        userpseudo: data[0].userpseudo,
                        isAdmin: data[0].is_admin,
                        //Encodage d'un nouveau token
                        token: jwt.sign(
                            { userId: data[0].id, userpseudo: data[0].pseudo, isAdmin: data[0].is_admin },
                            "DD49869BBAD47",
                            { expiresIn: "24h" }
                        )
                    });
                });
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// connexion  à un compte existant
exports.login = async (req, res) => {
    //Recherche de l'utilisateur dans la DB via son email 
    let sql = `SELECT * FROM Users WHERE email = ?`;
    db.query(sql, [req.body.email], function (err, data, fields) {
        if (data.length === 0) {
            return res.status(404).json({ err: "Utilisateur non trouvé !" });
        }
        //Si on a trouvé le mail dans la DB, on compare le hash du nouveau mot de passe au hash de la DB
        bcrypt.compare(req.body.password, data[0].password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ error: "Mot de passe incorrect !" });
                }
                res.status(200).json({
                    userId: data[0].id,
                    userpseudo: data[0].userpseudo,
                    isAdmin: data[0].is_admin,
                    //Si le password est correct, encodage d'un nouveau token
                    token: jwt.sign(
                        { userId: data[0].id, userpseudo: data[0].userpseudo, isAdmin: data[0].is_admin },
                        "DD49869BBAD47",
                        { expiresIn: "24h" }
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));
    });
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

// récupérer tous les comptes / utilisateurs
//exports.getAllUsers = async (req, res) => {
// on envoie tous les users sauf admin

//exports.updateAccount