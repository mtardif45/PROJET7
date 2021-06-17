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
    const user = req.body;
    if (user) {
        await User.getOne(user, (err, result) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "An error has appeared"
                });
                return;
            }
            bcrypt.compare(user.password, result.password)
                .then(valid => {
                    if (!valid) return res.status(500).json({ message: "User or password doesn't match" });
                    res.status(200).json({
                        message: 'Login completed, you will be redirected',
                        token: jwt.sign(
                            { userId: result.id },
                            'RANDOM_TOKEN',
                            { expiresIn: '24h' }
                        ),
                        userId: result.id
                    });
                })
                .catch(() => {
                    return res.status(500).json({ message: "An error has occurred" });
                })
        })
    }
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
exports.deleteAccount = async (req, res) => {
    await User.remove(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
                res.status(404).send({
                    message: `User not found ${req.params.userId}?`
                });
            } else {
                res.status(500).send({
                    message: 'could not delete user' + req.params.userdId
                });
            }
        } else res.send({ message: `User deleted successfully!` });
    });
};

// mise à jour d'un profil 
exports.updateAccount = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "please fill in the form!"
        });
    }
    User.update(
        req.params.userId,
        new User(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `User not found with id ${req.params.userdId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating user" + req.params.userdId
                    });
                }
            } else res.send(data);
        }
    );
};