const SinhVien = require("../model/sinhvien.model");
const client = require("../helpers/connect_redis");
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
         if (!(req.body.password == sinh_vien.mat_khau)) {
             return res
            .status(403)
            .json({ error: { message: "Tài khoản hoặc mật khẩu không khớp !!!" } });
        }
        console.log("Đã đăng nhập");
        // const accessToken = await signAccessToken(sinh_vien.ma_sinh_vien);
        // const refreshToken = await signRefreshToken(sinh_vien.ma_sinh_vien);
        // res.setHeader("authorization", accessToken);
        // res.setHeader("refreshToken", refreshToken);
        return res
        .status(200)
        .json({ success: true, sinh_vien });
    } catch (error) {
        next(error);
    }
}

module.exports = signIn;