const bcrypt = require('bcrypt'); // cryptage d'un string
const sql = require('../database_connect'); // import fichier de connection à la bdd

// constructeur - initialisation de l'objet user
const User = function (user) {
    this.pseudo = user.pseudo;
    this.id = user.id;
    this.email = user.email;
    this.password = user.password;
    this.avatar = user.avatar;
    this.bio = user.bio;
    this.createdAt = user.createdAt;
    this.admin = user.admin;
};
// créer un compte
User.create = async (user) => {
    const newUser = new User(user);
    newUser.password = await bcrypt.hash(user.password, 10);
    const request = `INSERT INTO Users(email, password, pseudo, createdAt, admin) VALUES (?,?,?,?,?)`;
    sql.query(request, [newUser.email, newUser.password, newUser.pseudo, newUser.createdAt, false], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error;
        }
        console.log("user created: ", { id: res.insertId, ...newUser }); //Mysql Auto Increment Id
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
User.findById = (id, result) => {
    sql.query(`SELECT * FROM Users WHERE id= '${id}'`, (err, res) => {
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
        else result({ kind: "not_found" }, null);
    });
};

//récupérer tous les utilisateurs
User.getAll = (result) => {
    sql.query(`SELECT * FROM Users`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Users: ", res);
        result(null, res);
    });
};

// Modification d'un profil
User.update = (id, user, result) => {
    sql.query(`UPDATE Users SET email = ?, pseudo = ?, bio= ?, avatar = ?, updatedAt=? WHERE id = ?`,
        [user.email, user.pseudo, user.bio, user.avatar, new Date, user.id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            // if (res.affectedRows == 0) {
            //     // not found Customer with the id
            //     result({ kind: "not_found" }, null);
            //     return;
            // }
            console.log("profile updated: ", { id: id, ...user });
            // result(null, { id: id, ...user });
        }
    );
};

// suppression d'un profil 
User.remove = (id, result) => {
    sql.query(`DELETE FROM Users WHERE id = ?`, id, (err, res) => {
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
        console.log("user deleted with id: ", id);
        result(null, res);
    });
};

module.exports = User;

