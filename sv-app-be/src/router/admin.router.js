const express = require("express");
const AdminCreateController = require("../controller/admin.controller/create.controller");
const AdminGetController = require("../controller/admin.controller/get.controller");
const AdminUpdateController = require("../controller/admin.controller/update.controller");
const { verifyAccessToken, requireRole } = require("../helpers/jwt.service");
const router = express.Router();

router
  .route("/createSinhVien")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createSinhVien);
router
  .route("/createKhoa")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createKhoa);
router
  .route("/createTonGiao")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createTonGiao);
router
  .route("/createAdmin")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createAdmin);
router
  .route("/createMonHoc")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createMonHoc);
router
  .route("/createHocPhan")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createHocPhan);
router
  .route("/createChuyenNganh")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createChuyenNganh);
router
  .route("/createChuyenNganhHocPhan")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createChuyenNganhHocPhan);
router
  .route("/createGiangVien")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createGiangVien);
router
  .route("/createHocKi")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createHocKi);
router
  .route("/createLopHocPhan")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createLopHocPhan);
router
  .route("/getNewMaLopHocPhan")
  .get(verifyAccessToken, requireRole("admin"), AdminCreateController.getNewMaLopHocPhan);
router
  .route("/createPhanCongLopHocPhan")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createPhanCongLopHocPhan);
router
  .route("/getNewMaPhanCong")
  .get(verifyAccessToken, requireRole("admin"), AdminCreateController.getNewMaPhanCong);
router
  .route("/createThoiKhoaBieu")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createThoiKhoaBieu);
router
  .route("/createLoaiPhongHoc")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createLoaiPhongHoc);
router
  .route("/createPhongHoc")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createPhongHoc);
router
  .route("/createBangDiem")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createBangDiem);
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createThoiKhoaBieuSinhVien);
//Cần mã sinh viên ở body
router
  .route("/getDanhSachPhieuThuSinhVien")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachPhieuThuSinhVien);
//Cần mã sinh viên ở body  
router
  .route("/getDanhSachHocPhiSinhVien")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachHocPhiSinhVien);
//Cần mã sinh viên ở param
router
  .route("/getDanhSachPhieuThuSinhVienParam")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachPhieuThuSinhVienParam);
//Cần mã sinh viên ở param
router
  .route("/getDanhSachHocPhiSinhVienParam")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachHocPhiSinhVienParam);
// router
//   .route("/thanhToanHocPhiSinhVien")
//   .put(AdminCreateController.thanhToanHocPhiSinhVien);  
router
  .route("/createThoiKhoaBieuSinhVien")
  .post(verifyAccessToken, requireRole("admin"), AdminCreateController.createThoiKhoaBieuSinhVien);
//Cần mã sinh viên và danh sách mã học phí đã chọn  
router
  .route("/thanhToanCongNoSinhVien")
  .put(verifyAccessToken, requireRole("admin"), AdminUpdateController.thanhToanCongNoSinhVien);
router
  .route("/getDSDiemSinhVienTheoLop")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachDiemSinhVienByMaLopHP);
router
  .route("/updateDiemMotSinhVien")
  .put(verifyAccessToken, requireRole("admin"), AdminUpdateController.updateDiemMotSinhVien);
router
  .route("/getDSKhoa")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachKhoa);
router
  .route("/getDsSVByKhoa")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachSinhVienByKhoa);
router
  .route("/getDsChuyenNganhTheoKhoa")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSChuyenNganhTheoKhoa);
router
  .route("/getDSMonHoc")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachMonHoc);
router
  .route("/getAllChuyenNganh")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachChuyenNganh);
router
  .route("/getAllHocPhan")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachHocPhan);
router
  .route("/getAllHocKi")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachHocKi);
router
  .route("/getAllLopHocPhan")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachLopHocPhan);
router
  .route("/getAllPhanCong")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachPhanCongLopHocPhan);
router
  .route("/getAllPhong")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachPhongHoc);
router
  .route("/getAllTKB")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.getDanhSachThoiKhoaBieu);
router
  .route("/getDsMonTheoKhoa")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSMonTheoKhoa);
router
  .route("/getHocPhanTheoChuyenNganh")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSHocPhanTheoChuyenNganh);
router
  .route("/getDSLopTheoHocKi")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSLopTheoHocKi);
router
  .route("/getDSLopTheoChuyenNganhHocKi")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSLopTheoChuyenNganhHocKi);
router
  .route("/getDSPhanCongTheoMaGiangVien")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSPhanCongTheoMaGiangVien);
router
  .route("/getDSPhanCongTheoMaLHP")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSPhanCongTheoMaLHP);
router
  .route("/getDSTKBTheoMaCNVaHocKi")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDSTKBTheoMaCNVaHocKi);
router
  .route("/getDsPhongTheoTen")
  .put(verifyAccessToken, requireRole("admin"), AdminGetController.getDsPhongTheoTen);
router
  .route("/taoMaSinhVien")
  .get(verifyAccessToken, requireRole("admin"), AdminGetController.taoMaSinhVien);
module.exports = router;