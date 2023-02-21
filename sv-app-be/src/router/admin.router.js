const express = require("express");
const AdminCreateController = require("../controller/admin.controller/create.controller");
const router = express.Router();

router
  .route("/signup")
  .post(AdminCreateController.createSinhVien);
router
  .route("/createKhoa")
  .post(AdminCreateController.createKhoa);  
router
  .route("/createTonGiao")
  .post(AdminCreateController.createTonGiao);  
router
  .route("/createAdmin")
  .post(AdminCreateController.createAdmin);
router
  .route("/createMonHoc")
  .post(AdminCreateController.createMonHoc); 
router
  .route("/createHocPhan")
  .post(AdminCreateController.createHocPhan); 
router
  .route("/createChuyenNganh")
  .post(AdminCreateController.createChuyenNganh); 
router
  .route("/createChuyenNganhHocPhan")
  .post(AdminCreateController.createChuyenNganhHocPhan); 
router
  .route("/createGiangVien")
  .post(AdminCreateController.createGiangVien); 
router
  .route("/createHocKi")
  .post(AdminCreateController.createHocKi); 
router
  .route("/createLopHocPhan")
  .post(AdminCreateController.createLopHocPhan); 
router
  .route("/createPhanCongLopHocPhan")
  .post(AdminCreateController.createPhanCongLopHocPhan);
router
  .route("/createThoiKhoaBieu")
  .post(AdminCreateController.createThoiKhoaBieu);
router
  .route("/createLoaiPhongHoc")
  .post(AdminCreateController.createLoaiPhongHoc);
router
  .route("/createPhongHoc")
  .post(AdminCreateController.createPhongHoc);
router
  .route("/createBangDiem")
  .post(AdminCreateController.createBangDiem);
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(AdminCreateController.createThoiKhoaBieuSinhVien);
// router
//   .route("/thanhToanHocPhiSinhVien")
//   .put(AdminCreateController.thanhToanHocPhiSinhVien);  
module.exports = router;