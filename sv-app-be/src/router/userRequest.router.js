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
  .put(userRequestController.getLopHocPhanByHocPhan);
//Api này lấy chi tiết lớp học phần đang chọn cần mã lớp học phần   
router
  .route("/getChiTietHocPhan")
  .put(userRequestController.getChiTietHocPhan);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay

>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay
//Api này đăng kí học phần đang chọn cần mã lớp học phần      
router
  .route("/dangKiHocPhan")
  .post(verifyAccessToken,userRequestController.DangKiHocPhan);  
//Api này lấy những thông tin của sinh viên đang đăng nhập  
router
  .route("/getThongTinSinhVien")
<<<<<<< HEAD
  .get(verifyAccessToken,userRequestController.getThongTinSinhvien);    
=======
  .get(verifyAccessToken, userRequestController.getThongTinSinhvien);
//Api này lấy công nợ của sinh viên đang đăng nhập  
router
  .route("/getDanhSachHocPhi")
  .get(verifyAccessToken, userRequestController.getDanhSachHocPhi); 
//Api này lấy những môn đã đăng kí trong 1 học kì của sinh viên đang đăng nhập cần mã học kì  
router
  .route("/getMonDaDangKiTrongHocKi")
  .get(verifyAccessToken, userRequestController.getMonDaDangKiTrongHocKi);     
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay

module.exports = router;