const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const authValidator = require("../middleware/auth-validator");
const userCtrl = require("../controllers/user");

router.post("/signup", /*authValidator.validPseudo, authValidator.validInput, */ userCtrl.signup);
router.post("/login", authValidator.validInput, userCtrl.login);
router.get("/accounts/:id", auth, userCtrl.getAccount);
router.get("/accounts", auth, userCtrl.getAllUsers);
router.put("/accounts/:id", auth, multer, userCtrl.updateAccount);
router.delete("/accounts/:id", auth, userCtrl.deleteAccount);

module.exports = router;



