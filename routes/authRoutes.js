const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController.js");
const { authMiddleware } = require("../middleware/authMiddleware.js");
const { getAllUsers } = require("../controllers/authController.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
 
router.get("/getAllUsers", authMiddleware, getAllUsers);


module.exports = router;