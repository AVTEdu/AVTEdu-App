const express = require("express");
const AuthController = require("../controller/auth.controller");
const router = express.Router();

router
  .route("/signin")
  .post(AuthController.signIn);
router
  .route("/refreshToken")
  .post(AuthController.refreshToken);
router
  .route("/authercationEmail")
  .post(AuthController.AuthercationEmail);
router
  .route("/checkVerificationEmail")
  .get(AuthController.AuthercationEmail);
router
  .route("/logout")
  .post(AuthController.Logout);
module.exports = router;