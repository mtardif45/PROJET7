const sql = require('../database_connect'); // import modèle de la bdd

const Comment = function (comment) {
    this.message = comment.message;
    this.userId = comment.userId;
    this.postId = comment.postId
}

Comment.create = (newComment, result) => {
    sql.query(`INSERT INTO comments SET ?`, newComment, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("comment created: ", { id: res.insertId, ...newComment });
        result(null, { id: res.insertId, ...newComment });
    });
};

Comment.remove = (id, result) => {
    sql.query(`DELETE FROM comments WHERE id= ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Comment with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("Comment deleted with id: ", id);
        result(null, res);
    });
};

module.exports = Comment;

