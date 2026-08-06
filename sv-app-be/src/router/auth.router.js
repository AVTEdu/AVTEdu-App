const express = require("express");
const AuthController = require("../controller/auth.controller");
const { verifyAccessToken } = require("../helpers/jwt.service");
const router = express.Router();

/**
 * @swagger
 * /auth/signin:
 *   post:
 *     tags: [Auth]
 *     summary: Đăng nhập sinh viên
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router
  .route("/signin")
  .post(AuthController.signIn);
/**
 * @swagger
 * /auth/refreshToken:
 *   post:
 *     tags: [Auth]
 *     summary: Làm mới access token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RefreshTokenRequest'
 *     responses:
 *       200:
 *         description: Token mới
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router
  .route("/refreshToken")
  .post(AuthController.refreshToken);
/**
 * @swagger
 * /auth/authercationEmail:
 *   post:
 *     tags: [Auth]
 *     summary: Gửi email xác thực
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthEmailRequest'
 *     responses:
 *       200:
 *         description: Đã gửi email
 *       400:
 *         $ref: '#/components/responses/BadRequest'
 */
router
  .route("/authercationEmail")
  .post(AuthController.AuthercationEmail);
/**
 * @swagger
 * /auth/checkVerificationEmail:
 *   get:
 *     tags: [Auth]
 *     summary: Kiểm tra trạng thái xác thực email
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Kết quả xác thực
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router
  .route("/checkVerificationEmail")
  .get(verifyAccessToken, AuthController.CheckVerificationEmail);
/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     tags: [Auth]
 *     summary: Đăng xuất
 *     responses:
 *       200:
 *         description: Đăng xuất thành công
 */
router
  .route("/logout")
  .delete(AuthController.Logout);
/**
 * @swagger
 * /auth/signinAdmin:
 *   post:
 *     tags: [Auth]
 *     summary: Đăng nhập admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router
  .route("/signinAdmin")
  .post(AuthController.signInAdmin);
/**
 * @swagger
 * /auth/getFile:
 *   post:
 *     tags: [Auth]
 *     summary: Lấy file
 *     responses:
 *       200:
 *         description: File
 *       500:
 *         $ref: '#/components/responses/ServerError'
 */
router
  .route("/getFile")
  .post(AuthController.getFile); 
/**
 * @swagger
 * /auth/signinGiangVien:
 *   post:
 *     tags: [Auth]
 *     summary: Đăng nhập giảng viên
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router
  .route("/signinGiangVien")
  .post(AuthController.signInGiangVien);   

module.exports = router;