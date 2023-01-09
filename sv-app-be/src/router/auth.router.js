const express = require("express");
const AuthController = require("../controller/auth.controller");
const router = express.Router();

router
  .route("/signin")
  .post(AuthController.signIn);
module.exports = router;