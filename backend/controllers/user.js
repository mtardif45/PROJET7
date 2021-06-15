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
    const user = await User.find({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password,
        pseudo: req.body.pseudo,
        bio: req.body.bio,
        photo: req.body.photo,
        admin: req.body.admin
    });
};

// récupérer tous les comptes / utilisateurs
exports.getAllUsers = async (req, res, next) => {
    const users = await User.getAll({

    })

};

// suppression d'un compte
exports.deleteAccount = async (req, res, next) => {
    const user = await User.remove;
};

