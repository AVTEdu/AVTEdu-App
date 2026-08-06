const express = require("express");
const AdminCreateController = require("../controller/admin.controller/create.controller");
const AdminGetController = require("../controller/admin.controller/get.controller");
const AdminUpdateController = require("../controller/admin.controller/update.controller");
const { verifyAccessToken, requireRole } = require("../helpers/jwt.service");
const router = express.Router();

/**
 * @swagger
 * /admin/createSinhVien:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo sinh viên mới
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, ngay_sinh, email, gioitinh, sdt, so_cmnd, khoa, chuyennganh]
 *             properties:
 *               ma: { type: number, example: 31200002 }
 *               ten: { type: string, example: "Nguyen Van B" }
 *               ngay_sinh: { type: string, format: date, example: "2002-05-10" }
 *               email: { type: string, example: "b@example.com" }
 *               gioitinh: { type: boolean, example: true }
 *               sdt: { type: string, example: "0901234567" }
 *               so_cmnd: { type: string, example: "123456789" }
 *               khoa: { type: integer, example: 1 }
 *               chuyennganh: { type: integer, example: 1 }
 *     responses:
 *       200: { description: Tạo sinh viên thành công }
 *       400: { $ref: '#/components/responses/BadRequest' }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */
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
/**
 * @swagger
 * /admin/getNewMaLopHocPhan:
 *   get:
 *     tags: [Admin]
 *     summary: Lấy mã lớp học phần mới
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Trả về mã lớp học phần mới }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getNewMaPhanCong:
 *   get:
 *     tags: [Admin]
 *     summary: Lấy mã phân công mới
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Trả về mã phân công mới }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSKhoa:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách khoa
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách khoa }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSMonHoc:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách môn học
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách môn học }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllChuyenNganh:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách chuyên ngành
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách chuyên ngành }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllHocPhan:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách học phần
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllHocKi:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách học kì
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách học kì }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllLopHocPhan:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách lớp học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllPhanCong:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách phân công lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách phân công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllPhong:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách phòng học
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách phòng học }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getAllTKB:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách thời khóa biểu
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Danh sách thời khóa biểu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/taoMaSinhVien:
 *   get:
 *     tags: [Admin]
 *     summary: Tạo mã sinh viên mới
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200: { description: Mã sinh viên mới }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDanhSachPhieuThuSinhVienParam:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách phiếu thu sinh viên (qua param)
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: ma
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       200: { description: Danh sách phiếu thu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDanhSachHocPhiSinhVienParam:
 *   get:
 *     tags: [Admin]
 *     summary: Danh sách học phí sinh viên (qua param)
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: query
 *         name: ma
 *         required: true
 *         schema: { type: number }
 *     responses:
 *       200: { description: Danh sách học phí }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */
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

/**
 * @swagger
 * /admin/createKhoa:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo khoa
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, mota]
 *             properties:
 *               ma: { type: integer, example: 2 }
 *               ten: { type: string, example: "Kinh te" }
 *               mota: { type: string, example: "Khoa kinh te" }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createTonGiao:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo tôn giáo
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, mota]
 *             properties:
 *               ma: { type: integer, example: 1 }
 *               ten: { type: string, example: "Khong" }
 *               mota: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createAdmin:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo admin
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, mat_khau, ma_khoa]
 *             properties:
 *               ma: { type: integer, example: 2 }
 *               ten: { type: string, example: "admin2" }
 *               mat_khau: { type: string, example: "12345" }
 *               ma_khoa: { type: integer, example: 1 }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createMonHoc:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo môn học
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, ma_khoa]
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               ma_khoa: { type: integer }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createHocPhan:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, ma_khoa, so_tin_chi]
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               ma_khoa: { type: integer }
 *               so_tin_chi: { type: integer, example: 3 }
 *               mota: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createChuyenNganh:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo chuyên ngành
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, ma_khoa]
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               ma_khoa: { type: integer }
 *               mota: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createChuyenNganhHocPhan:
 *   post:
 *     tags: [Admin]
 *     summary: Gắn học phần vào chuyên ngành
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ma_chuyen_nganh, ma_hoc_phan]
 *             properties:
 *               ma: { type: integer }
 *               ma_chuyen_nganh: { type: integer }
 *               ma_hoc_phan: { type: integer }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createGiangVien:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo giảng viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, ngay_sinh, email, gioitinh, username, password, ma_khoa]
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               ngay_sinh: { type: string, format: date }
 *               email: { type: string }
 *               gioitinh: { type: boolean }
 *               username: { type: string }
 *               password: { type: string }
 *               ma_khoa: { type: integer }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createHocKi:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo học kì
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, nam_hoc_bat_dau, nam_ket_thuc]
 *             properties:
 *               ma: { type: integer }
 *               nam_hoc_bat_dau: { type: integer, example: 2024 }
 *               nam_ket_thuc: { type: integer, example: 2025 }
 *               thu_tu_hoc_ki: { type: integer, example: 1 }
 *               mo_ta: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createLopHocPhan:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               ten_vt: { type: string }
 *               sl_sv_td: { type: integer }
 *               sl_dk_ht: { type: integer }
 *               so_nhom_th: { type: integer }
 *               loai: { type: string }
 *               trang_thai: { type: string }
 *               ma_hoc_ki: { type: integer }
 *               ma_hoc_phan: { type: integer }
 *               mo_ta: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createPhanCongLopHocPhan:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo phân công lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               loai: { type: string }
 *               nhom_th_pt: { type: integer }
 *               sl_sv_pt: { type: integer }
 *               ma_giang_vien: { type: integer }
 *               ma_lop_hoc_phan: { type: integer }
 *               ghi_chu: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createThoiKhoaBieu:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo thời khóa biểu
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               loai: { type: string }
 *               ngay_hoc_trong_tuan: { type: integer }
 *               nhom_thuc_hanh: { type: integer }
 *               thoi_gian_bat_dau: { type: string }
 *               thoi_gian_ket_thuc: { type: string }
 *               tiet_hoc_bat_dau: { type: integer }
 *               tiet_hoc_ket_thuc: { type: integer }
 *               ma_phan_cong_lop_hoc_phan: { type: integer }
 *               ma_phong_hoc: { type: integer }
 *               ghi_chu: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createLoaiPhongHoc:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo loại phòng học
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten, mo_ta]
 *             properties:
 *               ma: { type: integer }
 *               ten: { type: string }
 *               mo_ta: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createPhongHoc:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo phòng học
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma, ten_phong_hoc]
 *             properties:
 *               ma: { type: integer }
 *               ten_day_nha: { type: string }
 *               ten_phong_hoc: { type: string }
 *               ma_loai_phong_hoc: { type: integer }
 *               ghi_chu: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createBangDiem:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo bảng điểm
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               tinh_trang_hoc_tap: { type: string }
 *               ngay_dang_ki: { type: string, format: date }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/createThoiKhoaBieuSinhVien:
 *   post:
 *     tags: [Admin]
 *     summary: Tạo thời khóa biểu sinh viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               loai_ngay_hoc: { type: string }
 *               ma_sinh_vien: { type: integer }
 *               ma_thoi_khoa_bieu: { type: integer }
 *               ghi_chu: { type: string }
 *     responses:
 *       200: { description: Thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */

/**
 * @swagger
 * /admin/getDanhSachPhieuThuSinhVien:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách phiếu thu sinh viên (body chứa mã sinh viên)
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma]
 *             properties:
 *               ma: { type: integer, example: 31200001 }
 *     responses:
 *       200: { description: Danh sách phiếu thu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDanhSachHocPhiSinhVien:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách học phí sinh viên (body chứa mã sinh viên)
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma]
 *             properties:
 *               ma: { type: integer, example: 31200001 }
 *     responses:
 *       200: { description: Danh sách học phí }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/thanhToanCongNoSinhVien:
 *   put:
 *     tags: [Admin]
 *     summary: Thanh toán công nợ sinh viên (body: ma_sinh_vien + dsHocPhi)
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [ma_sinh_vien, dsHocPhi]
 *             properties:
 *               ma_sinh_vien: { type: integer, example: 31200001 }
 *               dsHocPhi: { type: array, items: { type: integer } }
 *     responses:
 *       200: { description: Thanh toán thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSDiemSinhVienTheoLop:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách điểm sinh viên theo mã lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maLHP]
 *             properties:
 *               maLHP: { type: integer }
 *     responses:
 *       200: { description: Danh sách điểm }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/updateDiemMotSinhVien:
 *   put:
 *     tags: [Admin]
 *     summary: Cập nhật điểm một sinh viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ma: { type: integer }
 *               diem_tk_5: { type: number }
 *               diem_th_1: { type: number }
 *               diem_th_2: { type: number }
 *               diem_th_3: { type: number }
 *               diem_th_4: { type: number }
 *               diem_th_5: { type: number }
 *               diem_gk: { type: number }
 *               diem_ck: { type: number }
 *               diem_tk_hs_10: { type: number }
 *               diem_tk_hs_4: { type: number }
 *     responses:
 *       200: { description: Cập nhật thành công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDsSVByKhoa:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách sinh viên theo khoa
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
 *       200: { description: Danh sách sinh viên }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDsChuyenNganhTheoKhoa:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách chuyên ngành theo khoa
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maKhoa]
 *             properties:
 *               maKhoa: { type: integer }
 *     responses:
 *       200: { description: Danh sách chuyên ngành }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDsMonTheoKhoa:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách môn học theo khoa
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maKhoa]
 *             properties:
 *               maKhoa: { type: integer }
 *     responses:
 *       200: { description: Danh sách môn học }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getHocPhanTheoChuyenNganh:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách học phần theo chuyên ngành
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maCN]
 *             properties:
 *               maCN: { type: integer }
 *     responses:
 *       200: { description: Danh sách học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSLopTheoHocKi:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách lớp học phần theo học kì
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maHK]
 *             properties:
 *               maHK: { type: integer }
 *     responses:
 *       200: { description: Danh sách lớp học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSLopTheoChuyenNganhHocKi:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách lớp học phần theo chuyên ngành và học kì
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maHK, maCN]
 *             properties:
 *               maHK: { type: integer }
 *               maCN: { type: integer }
 *     responses:
 *       200: { description: Danh sách lớp học phần }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSPhanCongTheoMaGiangVien:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách phân công theo giảng viên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maGV]
 *             properties:
 *               maGV: { type: integer }
 *     responses:
 *       200: { description: Danh sách phân công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSPhanCongTheoMaLHP:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách phân công theo mã lớp học phần
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maLHP]
 *             properties:
 *               maLHP: { type: integer }
 *     responses:
 *       200: { description: Danh sách phân công }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDSTKBTheoMaCNVaHocKi:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách thời khóa biểu theo chuyên ngành và học kì
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [maHK, maCN]
 *             properties:
 *               maHK: { type: integer }
 *               maCN: { type: integer }
 *     responses:
 *       200: { description: Danh sách thời khóa biểu }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 * /admin/getDsPhongTheoTen:
 *   put:
 *     tags: [Admin]
 *     summary: Danh sách phòng học theo tên
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [tenP]
 *             properties:
 *               tenP: { type: string }
 *     responses:
 *       200: { description: Danh sách phòng học }
 *       401: { $ref: '#/components/responses/UnauthorizedError' }
 *       403: { $ref: '#/components/responses/ForbiddenError' }
 */

module.exports = router;