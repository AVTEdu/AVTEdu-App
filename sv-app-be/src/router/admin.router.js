const express = require("express");
const AdminCreateController = require("../controller/admin.controller/create.controller");
const AdminGetController = require("../controller/admin.controller/get.controller");
const { verifyAccessToken } = require("../helpers/jwt.service");
const router = express.Router();

router
  .route("/signup")
  .post(verifyAccessToken,AdminCreateController.createSinhVien);
router
  .route("/createKhoa")
  .post(verifyAccessToken,AdminCreateController.createKhoa);  
router
  .route("/createTonGiao")
  .post(verifyAccessToken,AdminCreateController.createTonGiao);  
router
  .route("/createAdmin")
  .post(verifyAccessToken,AdminCreateController.createAdmin);
router
  .route("/createMonHoc")
  .post(verifyAccessToken,AdminCreateController.createMonHoc); 
router
  .route("/createHocPhan")
  .post(verifyAccessToken,AdminCreateController.createHocPhan); 
router
  .route("/createChuyenNganh")
  .post(verifyAccessToken,AdminCreateController.createChuyenNganh); 
router
  .route("/createChuyenNganhHocPhan")
  .post(verifyAccessToken,AdminCreateController.createChuyenNganhHocPhan); 
router
  .route("/createGiangVien")
  .post(verifyAccessToken,AdminCreateController.createGiangVien); 
router
  .route("/createHocKi")
  .post(verifyAccessToken,AdminCreateController.createHocKi); 
router
  .route("/createLopHocPhan")
  .post(verifyAccessToken,AdminCreateController.createLopHocPhan); 
router
  .route("/createPhanCongLopHocPhan")
  .post(verifyAccessToken,AdminCreateController.createPhanCongLopHocPhan);
router
  .route("/createThoiKhoaBieu")
  .post(verifyAccessToken,AdminCreateController.createThoiKhoaBieu);
router
  .route("/createLoaiPhongHoc")
  .post(verifyAccessToken,AdminCreateController.createLoaiPhongHoc);
router
  .route("/createPhongHoc")
  .post(verifyAccessToken,AdminCreateController.createPhongHoc);
router
  .route("/createBangDiem")
  .post(verifyAccessToken,AdminCreateController.createBangDiem);
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(verifyAccessToken,AdminCreateController.createThoiKhoaBieuSinhVien);
// router
//   .route("/thanhToanHocPhiSinhVien")
//   .put(AdminCreateController.thanhToanHocPhiSinhVien);  
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(verifyAccessToken,AdminCreateController.createThoiKhoaBieuSinhVien);
module.exports = router;