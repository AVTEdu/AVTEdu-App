const express = require('express');
const userRequestController = require("../controller/userRequest.controller");
const { verifyAccessToken } = require('../helpers/jwt.service');
const router = express.Router();

//Api này lấy học kì của sinh viên đang đăng nhập
router
  .route("/getHocKiSinhVien")
  .get(verifyAccessToken,userRequestController.getHocKiSinhVien);
//Api này lấy những môn chưa học của sinh viên đang đăng nhập
router
  .route("/getMonSinhVienChuaHoc")
  .get(verifyAccessToken,userRequestController.getMonHocSinhVienChuaHoc);
//Api này lấy tất cả lớp học phần đang có của học phần cần mã học phần 
router
  .route("/getLopHocPhanByHocPhan")
  .get(userRequestController.getLopHocPhanByHocPhan);
//Api này lấy chi tiết lớp học phần đang chọn cần mã lớp học phần   
router
  .route("/getChiTietHocPhan")
  .get(userRequestController.getChiTietHocPhan);
//Api này đăng kí học phần đang chọn cần mã lớp học phần      
router
  .route("/dangKiHocPhan")
  .post(verifyAccessToken,userRequestController.DangKiHocPhan);  
//Api này lấy những thông tin của sinh viên đang đăng nhập  
router
  .route("/getThongTinSinhVien")
  .get(verifyAccessToken,userRequestController.getThongTinSinhvien);    

module.exports = router;