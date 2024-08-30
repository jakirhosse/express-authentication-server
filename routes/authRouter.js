const express = require("express");
const {
  signup,
  login,
  getUser,
  updateUser,
  deleteUser,
} = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);
router.patch("/user", authMiddleware, updateUser);
router.delete("/user", authMiddleware, deleteUser);

module.exports = router;
