const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const commentCtrl = require('../controllers/comment'); // import des controlleurs Post

router.post('/:id/comments', auth, commentCtrl.addComment);
router.delete('/comments/:id', auth, commentCtrl.deleteComment);
router.get('/:id/comments', auth, commentCtrl.getPostComments);

module.exports = router;