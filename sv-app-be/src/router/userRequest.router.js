const express = require('express');
const userRequestController = require("../controller/userRequest.controller");
const { verifyAccessToken, requireRole } = require('../helpers/jwt.service');
const router = express.Router();

//Api này lấy học kì của sinh viên đang đăng nhập
router
  .route("/getHocKiSinhVien")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getHocKiSinhVien);
//Api này lấy những môn chưa học của sinh viên đang đăng nhập
router
  .route("/getMonSinhVienChuaHoc")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getMonHocSinhVienChuaHoc);
//Api này lấy tất cả lớp học phần đang có của học phần cần mã học phần 
router
  .route("/getLopHocPhanByHocPhan")
  .put(userRequestController.getLopHocPhanByHocPhan);
//Api này lấy chi tiết lớp học phần đang chọn cần mã lớp học phần  
router
  .route("/getChiTietLopHocPhan")
  .put(userRequestController.getChiTietLopHocPhan);

//Api này đăng kí học phần đang chọn cần mã phân công lớp học phần và mã học kì đang chọn     
router
  .route("/dangKiHocPhan")
  .post(verifyAccessToken, requireRole("sinhvien"), userRequestController.DangKiHocPhan);
//Api này lấy những thông tin của sinh viên đang đăng nhập  
router
  .route("/getThongTinSinhVien")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getThongTinSinhvien);
//Api này lấy công nợ của sinh viên đang đăng nhập  
router
  .route("/getDanhSachHocPhi")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getDanhSachHocPhi);
//Api này lấy những môn đã đăng kí trong 1 học kì của sinh viên đang đăng nhập cần mã học kì  
router
  .route("/getMonDaDangKiTrongHocKi")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getMonDaDangKiTrongHocKi);
//Api này lấy những môn trong thời khoá biểu trong 1 tuần của sinh viên đang đăng nhập cần ngày hiện tại  
router
  .route("/getThoiKhoaBieuSinhVienTrongMotTuan")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getThoiKhoaBieuSinhVienTrongMotTuan);
router
  .route("/thanhToanHocPhiTrucTuyen")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.thanhToanHocPhiTrucTuyen);
router
  .route("/xacNhanThanhToanTrucTuyen")
  .put(userRequestController.xacNhanThanhToanTrucTuyen);
//Cần mã sinh viên và danh sách mã phiếu thu
router
  .route("/getChiTietPhieuThuTongHop")
  .put(userRequestController.getChiTietPhieuThuTongHop);
router
  .route("/getDSPhieuThuBySinhVien")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getDanhSachPhieuThuSinhVien);
router
  .route("/getChiTietPhieuThuTongHopBySV")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getChiTietPhieuThuTongHopBySV);
router
  .route("/getKetQuaHocTap")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getKetQuaHocTap);
  router
  .route("/getLopHocPhanKhongTrung")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getLopHocPhanKhongTrung); 
  
router
  .route("/HuyHocPhanDaDangKi")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.HuyHocPhanDaDangKi); 
router
  .route("/getChiTietHocPhanDaDangKi")
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.getChiTietHocPhanDaDangKi); 

router
  .route("/getKetQuaHocTapAndroid")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getKetQuaHocTapAndroid); 
router
  .route("/getChiTietLopHocPhan")
  .get(verifyAccessToken, requireRole("sinhvien"), userRequestController.getChiTietLopHocPhan);



module.exports = router;