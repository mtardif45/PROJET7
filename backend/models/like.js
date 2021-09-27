const sql = require('../database_connect'); // import modèle de la bdd

// like post 
const Like = function (like) {
    this.id = like.id;
    this.userId = like.userId;
    this.postId = like.postId
}

Like.create = (newLike, result) => {
    sql.query(`INSERT INTO likes SET ?`, newLike, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("post liked", { id: res.insertId, ...newLike });
        result(null, { id: res.insertId, ...newLike });
    });
};

Like.remove = (postId, userId, result) => {
    let request = 'DELETE FROM likes WHERE postId=? AND userId=?';
    sql.query(request, [postId, userId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted like with id: ");
        result(null, res);
    });
};

module.exports = Like;