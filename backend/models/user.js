const bcrypt = require('bcrypt'); // cryptage d'un string
const sql = require('../database_connect'); // import modèle de la bdd
const jwt = require('jsonwebtoken');

// constructor
const User = function (user) {
    this.pseudo = user.pseudo;
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo;
    this.bio = user.bio;
    this.admin = user.admin;
};
// créer un compte
User.create = async (user) => {
    const newUser = new User(user);
    newUser.password = await bcrypt.hash(user.password, 10);
    const request = `INSERT INTO Users(email, password, pseudo, admin) VALUES (?, ?, ?, ?)`;
    sql.query(request, [newUser.email, newUser.password, newUser.pseudo, false], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        console.log("user created: ", { id: res.insertId, ...newUser });
        return { id: res.insertId, ...newUser };
    });
};

// récupérer un profil
User.getOne = (user) => {
    const request = `SELECT * FROM Users WHERE email = '${user.email}'`;
    sql.query(request, [user.email], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        if (res.length) {
            console.log("found user: ", res[0]);
            return (null, res[0]);
        }
        return ({ kind: "not_found" }, null);
    });
};

// récupérer tous les utilisateurs
User.getAll = result => {
    const request = `SELECT * FROM users`;
    sql.query(request, (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        console.log("All Users: ", res);
        return (null, res);
    });
};

// Modification d'un profil
User.update = (id, user) => {
    const request = `UPDATE Users SET email = ?, password= ?, pseudo= ?, bio= ?, photo= ? WHERE id = ?`
    sql.query(request, [user.email, user.password, user.pseudo, user.bio, user.photo, id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            return ({ kind: "not_found" }, null);
        }
        console.log("profile updated: ", { id: id, ...user });
        return (null, { id: id, ...user });
    }
    );
};

// suppression d'un profil 
User.remove = (id, result) => {
    const request = `DELETE FROM Users WHERE id = ?`;
    sql.query(request, user.id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            return ({ kind: "not_found" }, null);
        }
        console.log("user deleted ", id);
        return (null, res);
    });
};

module.exports = User;