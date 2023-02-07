const express = require("express");
const AdminController = require("../controller/admin.controller");
const router = express.Router();

router
  .route("/signup")
  .post(AdminController.createSinhVien);
router
  .route("/createKhoa")
  .post(AdminController.createKhoa);  
router
  .route("/createTonGiao")
  .post(AdminController.createTonGiao);  
module.exports = router;