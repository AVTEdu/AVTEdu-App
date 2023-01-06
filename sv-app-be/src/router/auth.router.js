const express = require("express");
const signIn = require("../controller/auth.controller");
const router = express.Router();

router
  .route("/signin")
  .post(signIn);

module.exports = router;