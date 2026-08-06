const experss = require('express');
const { verifyAccessToken, requireRole } = require("../helpers/jwt.service");
const router = experss.Router();

const GiangVienController = require("../controller/giangvien.controller");

/**
 * @swagger
 * /giangvien/getDanhSanhSachSinhVienTheoLopHocPhan:
 *   post:
 *     tags: [GiangVien]
 *     summary: Danh sách sinh viên theo lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma_lop_hoc_phan]
 *             properties:
 *               ma_lop_hoc_phan: { type: integer }
 *     responses:
 *       200: { description: Danh sách sinh viên }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */
router
  .route("/getDanhSanhSachSinhVienTheoLopHocPhan")
  .post(verifyAccessToken, requireRole("giangvien"),GiangVienController.getDanhSanhSachSinhVienTheoLopHocPhan);
/**
 * @swagger
 * /giangvien/getThoiKhoaBieuGiangVienTrongMotTuan:
 *   post:
 *     tags: [GiangVien]
 *     summary: Thời khóa biểu giảng viên trong một tuần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ngay]
 *             properties:
 *               ngay: { type: string, format: date, example: "2026-08-06" }
 *     responses:
 *       200: { description: Thời khóa biểu tuần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */
router
  .route("/getThoiKhoaBieuGiangVienTrongMotTuan")
  .post(verifyAccessToken, requireRole("giangvien"),GiangVienController.getThoiKhoaBieuGiangVienTrongMotTuan);

  module.exports = router;  