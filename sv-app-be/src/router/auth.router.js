const express = require("express");
const AuthController = require("../controller/auth.controller");
const router = express.Router();

router
  .route("/signin")
  .post(AuthController.signIn);
router
  .route("/signup")
  .post(AuthController.createSinhVien);

module.exports = router;