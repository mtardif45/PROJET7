const bcrypt = require('bcrypt'); // cryptage d'un string
const sql = require('../database_connect'); // import modèle de la bdd

const User = function (user) {
    this.pseudo = user.pseudo,
        this.id = user.id,
        this.email = user.email,
        this.password = user.password,
        this.photo = user.photo,
        this.bio = user.bio,
        this.admin = user.admin
};

User.create = async (user) => {
    const newUser = new User(user);
    newUser.password = await bcrypt.hash(user.password, 10);
    const request = `INSERT INTO Users(email, password, pseudo, admin) VALUES (?, ?, ?, ?)`;
    sql.query(request, [newUser.email, newUser.password, newUser.pseudo, false], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        console.log("created customer: ", { id: res.insertId, ...newUser });
        return { id: res.insertId, ...newUser };
    });
};

User.find = (user) => {
    const request = `SELECT * FROM Users WHERE email = ?`;
    sql.query(request, [req.body.email], (err, res) => {
        if (err) {
            console.log("error: ", err);
            throw Error(err.message)
        }
        if (result.length > 0) {
            bcrypt.compare(user.password, result[0].password)
                .then((valid) => {
                    if (!valid) { return res.status(401).json({ error: 'Mot de passe incorrect !' }); }
                    else {
                        res.status(200).json({ //Retourne le User Id, le pseudo et le Token
                            id: result[0].id,
                            pseudo: result[0].pseudo,
                            token: jwt.sign({ userId: result[0].id }, process.env.TOKEN, { expiresIn: '24h' })
                        });
                    }
                })
        }
    })
};

User.getAll = result => {
    const request = `SELECT * FROM users`;
    sql.query(request, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("All Users: ", res);
        result(null, res);
    });
};

User.update = (id, customer, result) => {
    const request = `UPDATE customers SET email = ?, password= ?, pseudo= ?, bio= ?, photo= ? WHERE id = ?`
    sql.query(request, [user.email, user.password, user.pseudo, user.bio, user.photo, id], (err, res) => {
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

User.remove = (id, result) => {
    const request = `DELETE FROM Users WHERE id = ?`;
    sql.query(request, user.id, (err, res) => {
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