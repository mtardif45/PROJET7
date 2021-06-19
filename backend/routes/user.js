const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/accounts/:id", userCtrl.getAccount);
router.get("/accounts", auth, userCtrl.getAllUsers);

router.put("/accounts/:id", multer, userCtrl.updateAccount);

router.delete("/accounts/:id", auth, userCtrl.deleteAccount);


module.exports = router;



