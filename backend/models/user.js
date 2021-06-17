const bcrypt = require('bcrypt'); // cryptage d'un string
const sql = require('../database_connect'); // import modèle de la bdd

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

// récupérer un profil par email pour login
User.getOne = (user, result) => {
    sql.query(`SELECT * FROM Users WHERE email = '${user.email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found with id
        result({ kind: "not_found" }, null);
    });
};

// récupérer un profil par Id
User.findById = (userId, result) => {
    sql.query(`SELECT * FROM Users WHERE id= '${userId}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("user found: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found user with the id
        result({ kind: "not_found" }, null);
    });
};

// récupérer tous les utilisateurs
User.getAll = result => {
    sql.query(`SELECT * FROM users`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("All Users: ", res);
        result(null, res);
    });
};

// Modification d'un profil
User.update = (id, user, result) => {
    sql.query(`UPDATE Users SET email = '${email}', password= '${password}', pseudo= '${pseudo}', bio= '${bio}', photo= '${bio}' WHERE id = '${id}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("profile updated: ", { id: id, ...user });
        result(null, { id: id, ...user });
    }
    );
};

// suppression d'un profil 
User.remove = (id, result) => {
    sql.query(`DELETE FROM Users WHERE id = ?`, user.id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("user deleted ", id);
        result(null, res);
    });
};

module.exports = User;