const emailValidator = require("email-validator");
const passwordValidator = require("password-validator");

exports.validInput = (req, res, next) => {
    const passwordSchema = new passwordValidator();
    passwordSchema
        .is().min(6)
        .is().max(30)
        .has().uppercase()
        .has().lowercase()
        .has().not().symbols()
        .has().not().spaces();

    if (
        !emailValidator.validate(req.body.email) ||
        !passwordSchema.validate(req.body.password)
    ) {
        return res.status(400).send({
            error: "your password must contain at least 6 characters with lower and uppercase"
        });
    } else if (
        emailValidator.validate(req.body.email) ||
        passwordSchema.validate(req.body.password)
    ) {
        next();
    }
};

exports.validPseudo = (req, res, next) => {
    const regex = /^[a-zA-Z0-9_]{3,20}$/; // entre 3 et 20 caractères, majuscules minuscules espaces
    const pseudo = req.body.pseudo;
    if (regex.test(pseudo) === true) {
        next();
    } else {
        return res.status(400).send({
            error: "your pseudo must contain between 3 and 20 characters"
        });
    }
};