const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post'); // import des controlleurs sauce

// publications
router.post('/add', multer, postCtrl.createPost);
router.get('/', auth, postCtrl.getAllPosts);
router.get('/:id', auth, postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.updatePost);
router.delete('/:id', multer, postCtrl.deletePost);

// commentaires 
router.post('/:id/comments', auth, postCtrl.addComment);
router.delete('/comments/:id', auth, postCtrl.deleteComment);

//Like
router.post('/:id/like', auth, postCtrl.likePost);

module.exports = router;