const multer = require('multer');

// extension de fichiers
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif'
};

// fonction Storage
const storage = multer.diskStorage({ // configure multer
    destination: (req, file, callback) => { // destination des fichiers à enregistrer
        callback(null, 'images');
    },
    filename: (req, file, callback) => { // indique le nom du fichier
        const name = file.originalname.split(' ').join('_'); // retire les espaces
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);// génère le nom unique
    }
});

module.exports = multer({ storage: storage }).single('image'); // stockage de l'image