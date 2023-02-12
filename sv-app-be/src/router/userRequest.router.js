const express = require('express');
const userRequestController = require("../controller/userRequest.controller");
const { verifyAccessToken } = require('../helpers/jwt.service');
const router = express.Router();

router
  .route("/getHocKiSinhVien")
  .post(userRequestController.getHocKiSinhVien);
router
  .route("/getMonSinhVienChuaHoc")
  .post(userRequestController.getMonHocSinhVienChuaHoc);
router
  .route("/getLopHocPhanByHocPhan")
  .post(userRequestController.getLopHocPhanByHocPhan);
router
  .route("/getChiTietHocPhan")
  .post(userRequestController.getChiTietHocPhan);  
router
  .route("/dangKiHocPhan")
  .post(verifyAccessToken,userRequestController.DangKiHocPhan);  
router
  .route("/getThongTinSinhVien")
  .get(verifyAccessToken,userRequestController.getThongTinSinhvien);    

module.exports = router;