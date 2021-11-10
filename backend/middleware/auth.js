const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
    //gestion des erreurs avec bloc try and catch
    try {
        const token = req.headers.authorization; // on récupère le token de la requête entrante dans le header d'autorisation
        const decodedToken = await jwt.verify(token, process.env.SECRET); // on le vérifie
        console.log(decodedToken);
        const userId = decodedToken.userId;// on récupère le user id du token
        if (req.body.userId && req.body.userId !== userId) { // on compare le userid de la requête à celui du token
            throw 'User Id non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: new Error('Invalid request !') });
    }
};
