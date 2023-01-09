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
        const isValid = await sinh_vien.isValidPassword(password);
         if (!( isValid)) {
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

module.exports = {
    signIn};