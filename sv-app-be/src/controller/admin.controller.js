const SinhVien = require("../model/sinhvien.model");
const bcrypt = require("bcryptjs");
const Khoa = require("../model/khoa.model");
const TonGiao = require("../model/tongiao.model");
const GiangVien = require("../model/giangvien.model");


//Hàm tạo sinh viên bằng admin
const createSinhVien = async (req, res, next) => {
    try {
      console.log("----------------createSinhVien-----------------------------");
      const { ma,ten,ngay_sinh,email,gioitinh,hktt,password,sdt,so_cmnd } = req.body;
      // Check có sinh viên nào trùng không
      const foundUser = await SinhVien.findOne({ where: { ma_sinh_vien:`${ma}` } });
      if (foundUser)
        return res
          .status(403)
          .json({ error: { message: "Mã đã được sử dụng." } });
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Generate a password hash (salt + hash)
      const passwordHashed = await bcrypt.hash(password, salt);
      // Re-assign password hashed
      const newPassword = passwordHashed;
      //Tạo sinh viên mới
      const newUser = await SinhVien.create({
        ma_sinh_vien:ma,
        ho_ten_sinh_vien:ten,
        ngay_sinh,
        email,
        gioitinh,
        ho_khau_thuong_tru:hktt,
        mat_khau: newPassword,
        so_dien_thoai:sdt,
        so_cmnd
      });
      return res.status(201).json({ success: true, newUser });
    } catch (error) {
      next(error);
    }
  };
// Hàm tạo khoa mới
  const createKhoa= async (req, res, next) =>{
    try {
      const {ma,ten,mota}= req.body;
      // const foundKhoa= await Khoa.findOne({ where: { ma_khoa:`${ma}` } });
      // if(foundKhoa){
      //   return res
      //     .status(403)
      //     .json({ error: { message: "Mã đã được sử dụng." } });
      // }
      const newKhoa = await Khoa.create({
        ma_khoa:ma,
        ten_khoa:ten,
        mo_ta:mota,
      });
      return res.status(201).json({ success: true, newKhoa });
    } catch (error) {
      next(error);
    }
  }
//Hàm tạo tôn giáo mới
const createTonGiao = async (req,res,next) =>{
  try {
    const {ma,ten,mota}= req.body;
    // const foundKhoa= await Khoa.findOne({ where: { ma_khoa:`${ma}` } });
    // if(foundKhoa){
    //   return res
    //     .status(403)
    //     .json({ error: { message: "Mã đã được sử dụng." } });
    // }
    const newTonGiao = await TonGiao.create({
      ma_ton_giao:ma,
      ten_ton_giao:ten,
      mo_ta:mota
    });
    return res.status(201).json({ success: true, newTonGiao });
  } catch (error) {
    next(error);
  }
}
//Hàm tạo Giảng Viên mới 
// const createGiangVien = async (req,res,next) =>{
//   try {
//     const {ma,ten,mota}= req.body;
//     // const foundKhoa= await Khoa.findOne({ where: { ma_khoa:`${ma}` } });
//     // if(foundKhoa){
//     //   return res
//     //     .status(403)
//     //     .json({ error: { message: "Mã đã được sử dụng." } });
//     // }
//     const newGiangVien = await GiangVien.create({
//       ma_ton_giao:ma,
//       ten_ton_giao:ten,
//       mo_ta:mota
//     });
//     return res.status(201).json({ success: true, newTonGiao });
//   } catch (error) {
//     next(error);
//   }
// }

module.exports = {
    createSinhVien,
    createKhoa,
    createTonGiao
};