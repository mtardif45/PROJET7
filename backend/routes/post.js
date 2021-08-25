const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const postCtrl = require('../controllers/post'); // import des controlleurs Post

// publications
router.post('/add', /*auth, */ multer, postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', /*auth,*/ postCtrl.getOnePost);
router.put('/:id', auth, multer, postCtrl.updatePost);
router.delete('/:id', auth, multer, postCtrl.deletePost);

module.exports = router;