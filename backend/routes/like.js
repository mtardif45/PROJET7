const express = require('express');
const router = express.Router(); // création du router express
const auth = require('../middleware/auth');
const likeCtrl = require('../controllers/like'); // import des controlleurs Like

//Like
router.post('/:id/like', /*auth,*/ likeCtrl.likePost);
router.delete('/:id/like/:id', /* auth,*/ likeCtrl.deleteLike);

module.exports = router;