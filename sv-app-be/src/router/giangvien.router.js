const experss = require('express');
const { verifyAccessToken, requireRole } = require("../helpers/jwt.service");
const router = experss.Router();

const GiangVienController = require("../controller/giangvien.controller");

router
  .route("/getDanhSanhSachSinhVienTheoLopHocPhan")
  .post(verifyAccessToken, requireRole("giangvien"),GiangVienController.getDanhSanhSachSinhVienTheoLopHocPhan);
router
  .route("/getThoiKhoaBieuGiangVienTrongMotTuan")
  .post(verifyAccessToken, requireRole("giangvien"),GiangVienController.getThoiKhoaBieuGiangVienTrongMotTuan);

  module.exports = router;  