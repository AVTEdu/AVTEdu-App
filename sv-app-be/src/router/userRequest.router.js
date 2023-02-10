const express = require('express');
const userRequestController = require("../controller/userRequest.controller");
const router = express.Router();

router
  .route("/getHocKiSinhVien")
  .post(userRequestController.getHocKiSinhVien);
router
  .route("/getMonSinhVienChuaHoc")
  .post(userRequestController.getMonHocSinhVienChuaHoc);

module.exports = router;