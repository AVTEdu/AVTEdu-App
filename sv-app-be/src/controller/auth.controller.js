const SinhVien = require("../model/sinhvien.model");
const client = require("../helpers/connect_redis");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
  } = require("../helpers/jwt.service");
const signIn = async (req,res,next) =>{
    console.log(req.body);
    try {
        const {ma,password}= req.body;
        const sinh_vien = await SinhVien.findOne({ where: { ma_sinh_vien:`${ma}` } });
        console.log(sinh_vien);
        if(!ma){
            return res
            .status(403)
            .json({error: {message:"Tài khoản không tồn tại"}});
        }
        // console.log(sinh_vien.mat_khau)
        // const isValid = await sinh_vien.isValidPassword(password)
         if (!(password == sinh_vien.mat_khau)) {
             return res
            .status(403)
            .json({ error: { message: "Tài khoản hoặc mật khẩu không khớp !!!" } });
        }
        console.log("Đã đăng nhập");
        const accessToken = await JWT.sign(ma,process.env.ACCESS_TOKEN_SECRET);
        const refreshToken = await JWT.sign(ma,process.env.REFRESH_TOKEN_SECRET)
        res.setHeader("authorization", accessToken);
        res.setHeader("refreshToken", refreshToken);
        return res
        .status(200)
        .json({ success: true,accessToken,refreshToken, sinh_vien });
    } catch (error) {
        next(error);
    }
}
const createSinhVien = async (req, res, next) => {
    try {
      console.log("AAAAAAAAA");
      const { name, phone, password } = req.value.body;
      // Check if there is a user with the same user
      const foundUser = await User.findOne({ phone });
      if (foundUser)
        return res
          .status(403)
          .json({ error: { message: "Số điện thoại đã được sử dụng." } });
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Generate a password hash (salt + hash)
      const passwordHashed = await bcrypt.hash(password, salt);
      // Re-assign password hashed
      const newPassword = passwordHashed;
      // Create a new user
      const newUser = await User.create({
        name,
        phone,
        password: newPassword,
      });
      return res.status(201).json({ success: true, newUser });
    } catch (error) {
      next(error);
    }
  };
  const refreshToken = async (req, res, next) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return res.status(403).json({ message: "không có refreshtoken" });
      }
      console.log(refreshToken);
      const { userId } = await verifyRefreshToken(refreshToken);
      const accessToken = await signAccessToken(userId);
      const refToken = await signRefreshToken(userId);
      return res.status(200).json({ accessToken, refToken });
    } catch (error) {
      next(error);
    }
  };

module.exports = signIn;