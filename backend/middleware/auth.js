const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // on récupère le token de la requête entrante dans le header d'autorisation
        const decodedToken = await jwt.verify(token, 'RANDOM_TOKEN'); // on le vérifie
        console.log(decodedToken);
        const userId = decodedToken.userId;// on récupère l'id du token
        if (req.body.userId && req.body.userId !== userId) { // on compare le userid de la requête à celui du token
            throw 'User Id non valable !';
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: new Error('Invalid request !') });
    }
};
