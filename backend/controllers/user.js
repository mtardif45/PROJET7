const db = require('../database_connect'); // import modèle de la bdd
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // cryptage d'un string

// création compte - signup
exports.signup = async (req, res) => {
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
exports.login = async (req, res) => {
    //Recherche de l'utilisateur dans la DB via son email 
    await User.getOne({
        email: req.body.email,
        password: req.body.password,
    });
    res.status(200).json(true);
};

// récupérer un compte
exports.getAccount = async (req, res) => {
    // on trouve l'utilisateur et on renvoie l'objet user
    await User.getOne(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `user not found ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "error" + req.params.userdId
                });
            }
        } else res.send(data);
    });
};

// récupérer tous les comptes / utilisateurs
exports.getAllUsers = async (req, res) => {
    await User.getAll((err, data) => {
        if (err)
            res.status(500).send({ message: 'An error occured while getting all users' });
        else res.send(data);
    });
};

// suppression d'un compte
exports.deleteAccount = async (req, res, next) => {
    const user = await User.remove;
};

