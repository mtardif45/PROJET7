const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // cryptage d'un string
const fs = require('fs');

// création compte - signup
exports.signup = async (req, res) => {
    const user = req.body;
    if (user) {
        // on vérfie si un compte existe déjà avec cet email
        await User.getOne(user, (err, result) => {
            if (result) {
                res.status(400).send({
                    error: "an account already exists with this email"
                });
            }
            else {
                // si pas de compte, création d'un nouvel utilisateur
                const newUser = User.create({
                    email: req.body.email,
                    password: req.body.password,
                    pseudo: req.body.pseudo,
                    createdAt: new Date()
                });
                res.status(200).send({
                    message: 'Account created, you will be redirected'
                });
            }
        })
    }
};

// connexion  à un compte existant
exports.login = async (req, res) => {
    const user = req.body;
    if (user) {
        await User.getOne(user, (err, result) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "An error has appeared"
                });
                return;
            }
            bcrypt.compare(user.password, result.password) // comparaison des hash de password
                .then(valid => {
                    if (!valid) return res.status(500).json({ error: "User or password doesn't match" });
                    res.status(200).json({
                        message: 'Login completed, you will be redirected',
                        token: jwt.sign(    // fonction qui encode le nouveau token
                            { userId: result.id },
                            'RANDOM_TOKEN',
                            { expiresIn: '24h' }
                        ),
                        user: result
                    });
                })
                .catch(() => {
                    return res.status(500).json({ message: "An error has occurred" });
                })
        })
    }
};

// récupérer un compte
exports.getAccount = (req, res) => {
    const userId = req.params.id;
    // on trouve l'utilisateur et on renvoie l'objet user
    User.findById(userId, (err, result) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(401).send({
                    message: "user not found with id!"
                });
            } else {
                res.status(500).send({
                    message: "error" + userId
                });
            }
        } else res.send(result);
    });
};

//récupérer tous les comptes / utilisateurs
exports.getAllUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err)
            res.status(500).send({
                message: err.message || "An error occured while getting all users",
            });
        else res.send(result);
    });
};

// mise à jour d'un profil 
exports.updateAccount = (req, res) => {
    // if (!req.body) {
    //     res.status(400).send({
    //         message: "please fill in the form!"
    //     });
    // }
    User.update(req.params.id, new User({
        ...req.body,
        avatar: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : req.body.avatar
    }),
        (err, res) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `User not found with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: `Error updating user ${req.params.id}.`
                    });
                }
            } else {
                res.status(200).send({ message: "user updated successfully!" });
            }
        }
    );
};

// suppression d'un compte
exports.deleteAccount = (req, res) => {
    User.remove(req.params.id, (err, result) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `User not found ${req.params.id}?`
                });
            } else {
                res.status(500).send({
                    message: 'could not delete user' + req.params.id
                });
            }
        } else res.send({ message: `User deleted successfully!` });
    });
};
