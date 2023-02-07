const SinhVien = require("../model/sinhvien.model");
const client = require("../helpers/connect_redis");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
  } = require("../helpers/jwt.service");
const { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  sendEmailVerification } = require("firebase/auth");
const { defaultAuth } = require("../config/firebase.config");
const { use } = require("../router/auth.router");


//Hàm đăng nhập sinh viên
const signIn = async (req,res,next) =>{
    console.log(req.body);
    try {
        const {ma,password}= req.body;
        const sinh_vien = await SinhVien.findOne({ where: { ma_sinh_vien:`${ma}` } });
        if(!ma){
            return res
            .status(403)
            .json({error: {message:"Tài khoản không tồn tại"}});
        }
        // console.log(sinh_vien.mat_khau)
        //Check mật khẩu đã mã hoá 
        const isValid = await sinh_vien.isValidPassword(password);
         if (!( isValid)) {
             return res
            .status(403)
            .json({ error: { message: "Tài khoản hoặc mật khẩu không khớp !!!" } });
        }
        console.log("-----------------------Đã đăng nhập--------------------------");
        //Đăng nhập vào firebase
        signInWithEmailAndPassword(defaultAuth, sinh_vien.email, sinh_vien.ma_sinh_vien)
        .then((userCredential) => {
          // Signed in    
          console.log("Đã đăng nhập "+sinh_vien.email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
        //Tạo accessToken
        const accessToken = await signAccessToken(ma);
        //Tạo refeshToken
        const refreshToken = await signRefreshToken(ma);
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
      const {userId} = await verifyRefreshToken(refreshToken);
      console.log(userId);
      const accessToken = await signAccessToken(userId);
      const refToken = await signRefreshToken(userId);
      return res.status(200).json({ accessToken, refToken });
    } catch (error) {
      next(error);
    }
};
const AuthercationEmail= async (req, res, next) => {
  try {
    const {ma,email}= req.body;
    createUserWithEmailAndPassword(defaultAuth,email,ma).then(()=>{
      console.log("Thêm email thành công")
      return res.status(200).json({ success:true,email,ma});
    })
    .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode) {
    console.log(errorMessage);
    console.log(error);
  }

});
  } catch (error) {
    next(error);
  }
};
const CheckVerificationEmail = async (req, res, next) => {
  try {
    onAuthStateChanged(defaultAuth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('id la:'+uid)
        const emailVerified = user.emailVerified;
        console.log(emailVerified);
        if(!emailVerified)
        sendEmailVerification(user)
        .then(() => {
          console.log ('Email verification sent!');
        // ...
        });
         // ...
      } else {
        console.log('không có người dùng đăng nhập');
      }
    });
  } catch (error) {
    next(error);
  }
};
const Logout = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    // console.log(req.headers);
    if (!refreshToken) {
      return res.status(403).json({ message: "không có refreshtoken" });
    }
    const { userId } = await verifyRefreshToken(refreshToken);
    const user = await SinhVien.findOne({ where: { ma_sinh_vien:`${userId}` } });
    console.log(user)
    client.del(userId.toString(), (err, reply) => {
      if (err) return res.status(500).json({ message: "Lỗi không xác định" });
      return res.status(200).json({ message: "Đăng xuất thành công "+userId });
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
    signIn,
    refreshToken,
    AuthercationEmail,
    CheckVerificationEmail,
    Logout};