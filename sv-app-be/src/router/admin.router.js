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
router
  .route("/createAdmin")
  .post(AdminController.createAdmin);
router
  .route("/createMonHoc")
  .post(AdminController.createMonHoc); 
router
  .route("/createHocPhan")
  .post(AdminController.createHocPhan); 
router
  .route("/createChuyenNganh")
  .post(AdminController.createChuyenNganh); 
router
  .route("/createChuyenNganhHocPhan")
  .post(AdminController.createChuyenNganhHocPhan); 
router
  .route("/createGiangVien")
  .post(AdminController.createGiangVien); 
router
  .route("/createHocKi")
  .post(AdminController.createHocKi); 
router
  .route("/createLopHocPhan")
  .post(AdminController.createLopHocPhan); 
router
  .route("/createPhanCongLopHocPhan")
  .post(AdminController.createPhanCongLopHocPhan);
router
  .route("/createThoiKhoaBieu")
  .post(AdminController.createThoiKhoaBieu);
router
  .route("/createLoaiPhongHoc")
  .post(AdminController.createLoaiPhongHoc);
router
  .route("/createPhongHoc")
  .post(AdminController.createPhongHoc);
router
  .route("/createBangDiem")
  .post(AdminController.createBangDiem);
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(AdminController.createThoiKhoaBieuSinhVien);
module.exports = router;