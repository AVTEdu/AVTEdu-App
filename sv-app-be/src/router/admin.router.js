const express = require("express");
const AdminController = require("../controller/admin.controller");
const router = express.Router();

router
  .route("/signup")
  .post(AdminController.createSinhVien);
module.exports = router;