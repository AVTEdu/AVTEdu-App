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
module.exports = router;