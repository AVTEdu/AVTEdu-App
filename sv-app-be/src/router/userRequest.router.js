const express = require('express');
const userRequestController = require("../controller/userRequest.controller");
const { verifyAccessToken, requireRole } = require('../helpers/jwt.service');
const router = express.Router();

/**
 * @swagger
 * /userRequest/getHocKiSinhVien:
 *   get:
 *     tags: [SinhVien]
 *     summary: Học kì của sinh viên đang đăng nhập
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách học kì }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getMonSinhVienChuaHoc:
 *   get:
 *     tags: [SinhVien]
 *     summary: Những môn sinh viên chưa học
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách môn chưa học }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getThongTinSinhVien:
 *   get:
 *     tags: [SinhVien]
 *     summary: Thông tin sinh viên đang đăng nhập
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Thông tin sinh viên }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getDanhSachHocPhi:
 *   get:
 *     tags: [SinhVien]
 *     summary: Công nợ của sinh viên đang đăng nhập
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách học phí }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getKetQuaHocTapAndroid:
 *   get:
 *     tags: [SinhVien]
 *     summary: Kết quả học tập (Android)
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Kết quả học tập }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getChiTietLopHocPhan:
 *   get:
 *     tags: [SinhVien]
 *     summary: Chi tiết lớp học phần (GET)
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Chi tiết lớp học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */
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
  .put(verifyAccessToken, requireRole("sinhvien"), userRequestController.xacNhanThanhToanTrucTuyen);
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

/**
 * @swagger
 * /userRequest/getLopHocPhanByHocPhan:
 *   put:
 *     tags: [SinhVien]
 *     summary: Lớp học phần của một học phần (cần mã học phần)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma]
 *             properties:
 *               ma: { type: integer }
 *     responses:
 *       200: { description: Danh sách lớp học phần }
 * /userRequest/getChiTietLopHocPhan:
 *   put:
 *     tags: [SinhVien]
 *     summary: Chi tiết lớp học phần đang chọn (cần mã lớp học phần)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma]
 *             properties:
 *               ma: { type: integer }
 *     responses:
 *       200: { description: Chi tiết lớp học phần }
 * /userRequest/dangKiHocPhan:
 *   post:
 *     tags: [SinhVien]
 *     summary: Đăng kí học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_phan_cong_lop_hoc_phan: { type: integer }
 *               ma_hoc_ki: { type: integer }
 *               trang_thai_dang_ki: { type: string }
 *               so_tien: { type: number }
 *               mien_giam: { type: number }
 *     responses:
 *       200: { description: Đăng kí thành công }
 *       400: { $ref: '#/components/responses/BadRequest' }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getMonDaDangKiTrongHocKi:
 *   put:
 *     tags: [SinhVien]
 *     summary: Môn đã đăng kí trong học kì
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ma_hoc_ki]
 *             properties:
 *               ma: { type: integer }
 *               ma_hoc_ki: { type: integer }
 *     responses:
 *       200: { description: Danh sách môn đã đăng kí }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getThoiKhoaBieuSinhVienTrongMotTuan:
 *   put:
 *     tags: [SinhVien]
 *     summary: Thời khóa biểu sinh viên trong một tuần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ngay]
 *             properties:
 *               ngay: { type: string, format: date }
 *     responses:
 *       200: { description: Thời khóa biểu tuần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/thanhToanHocPhiTrucTuyen:
 *   put:
 *     tags: [SinhVien]
 *     summary: Thanh toán học phí trực tuyến (MoMo)
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               ma_phieu_thu: { type: integer }
 *               dsHocPhi: { type: array, items: { type: integer } }
 *     responses:
 *       200: { description: Tạo yêu cầu thanh toán MoMo }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/xacNhanThanhToanTrucTuyen:
 *   put:
 *     tags: [SinhVien]
 *     summary: Xác nhận thanh toán trực tuyến (MoMo)
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               ma_phieu_thu: { type: integer }
 *     responses:
 *       200: { description: Xác nhận thanh toán thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getChiTietPhieuThuTongHop:
 *   put:
 *     tags: [SinhVien]
 *     summary: Chi tiết phiếu thu tổng hợp (cần ma_sinh_vien + ds mã phiếu thu)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_sinh_vien: { type: integer }
 *               ma_phieu_thu: { type: array, items: { type: integer } }
 *     responses:
 *       200: { description: Chi tiết phiếu thu }
 * /userRequest/getDSPhieuThuBySinhVien:
 *   put:
 *     tags: [SinhVien]
 *     summary: Danh sách phiếu thu theo sinh viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma]
 *             properties:
 *               ma: { type: integer }
 *     responses:
 *       200: { description: Danh sách phiếu thu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getChiTietPhieuThuTongHopBySV:
 *   put:
 *     tags: [SinhVien]
 *     summary: Chi tiết phiếu thu tổng hợp theo sinh viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma_sinh_vien: { type: integer }
 *               ma_phieu_thu: { type: array, items: { type: integer } }
 *     responses:
 *       200: { description: Chi tiết phiếu thu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getKetQuaHocTap:
 *   put:
 *     tags: [SinhVien]
 *     summary: Kết quả học tập
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *     responses:
 *       200: { description: Kết quả học tập }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getLopHocPhanKhongTrung:
 *   put:
 *     tags: [SinhVien]
 *     summary: Lớp học phần không trùng lịch
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               maLHP: { type: integer }
 *     responses:
 *       200: { description: Danh sách lớp học phần không trùng }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/HuyHocPhanDaDangKi:
 *   put:
 *     tags: [SinhVien]
 *     summary: Hủy học phần đã đăng kí
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               ma_hoc_ki: { type: integer }
 *     responses:
 *       200: { description: Hủy thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /userRequest/getChiTietHocPhanDaDangKi:
 *   put:
 *     tags: [SinhVien]
 *     summary: Chi tiết học phần đã đăng kí
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *     responses:
 *       200: { description: Chi tiết học phần đã đăng kí }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */



module.exports = router;