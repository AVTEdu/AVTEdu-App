const SinhVien = require("../model/sinhvien.model");
const bcrypt = require("bcryptjs");
const Khoa = require("../model/khoa.model");
const TonGiao = require("../model/tongiao.model");
const GiangVien = require("../model/giangvien.model");
const Admin = require("../model/admin.model");
const MonHoc = require("../model/monhoc.model");
const HocPhan = require("../model/hocphan.model");
const ChuyenNganh = require("../model/chuyennganh.models");
const ChuyenNganhHocPhan = require("../model/chuyennganhhocphan.model");
const HocKi = require("../model/hocki.model");
const LopHocPhan = require("../model/lophocphan.model");


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
      const foundKhoa= await Khoa.findOne({ where: { ma_khoa:`${ma}` } });
      if(foundKhoa){
        return res
          .status(403)
          .json({ error: { message: "Mã đã được sử dụng." } });
      }
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
const createGiangVien = async (req,res,next) =>{
  try {
    const {ma,ten,mota,ma_khoa,ngay_sinh,email,gioitinh}= req.body;
    const foundGiangVien= await GiangVien.findOne({ where: { ma_giang_vien:`${ma}` } });
    if(foundGiangVien){
      return res
        .status(403)
        .json({ error: { message: "Mã đã được sử dụng." } });
    }
    const newGiangVien = await GiangVien.create({
      ma_giang_vien:ma,
      ten_giang_vien:ten,
      ma_khoa:ma_khoa,
      ngay_sinh:ngay_sinh,
      email:email,
      gioi_tinh:gioitinh,
    });
    return res.status(201).json({ success: true, newGiangVien });
  } catch (error) {
    next(error);
  }
}
const createAdmin = async (req,res,next) =>{
  try {
    const {ma,ten,mat_khau,ma_khoa}= req.body;
    const foundKhoa= await Khoa.findOne({ where: { ma_khoa:`${ma_khoa}` } });
    if(!foundKhoa){
      return res
        .status(403)
        .json({ error: { message: "Mã khoa không tồn tại ." } });
    }
    const foundAdmin= await Admin.findOne({ where: { ma_admin:`${ma}` } });
    if(foundAdmin){
      return res
        .status(403)
        .json({ error: { message: "Mã admin đã tồn tại ." } });
    }
     // Generate a salt
     const salt = await bcrypt.genSalt(10);
     // Generate a password hash (salt + hash)
     const passwordHashed = await bcrypt.hash(mat_khau, salt);
     // Re-assign password hashed
     const newPassword = passwordHashed;
    const newAdmin = await Admin.create({
      ma_admin:ma,
      username:ten,
      mat_khau:newPassword,
      ma_khoa:ma_khoa,

    });
    return res.status(201).json({ success: true, newAdmin });
  } catch (error) {
    next(error);
  }
}
const createMonHoc = async (req,res,next) =>{
  try {
    const {ma,ten,mota,ma_khoa}= req.body;
    const foundMonHoc= await MonHoc.findOne({ where: { ma_mon_hoc:`${ma}` } });
    if(foundMonHoc){
      return res
        .status(403)
        .json({ error: { message: "Mã môn học đã tồn tại ." } });
    }
    const newMonHoc = await MonHoc.create({
      ma_mon_hoc:ma,
      ten_mon_hoc:ten,
      ma_khoa:ma_khoa,
      mo_ta:mota

    });
    return res.status(201).json({ success: true, newMonHoc });
  } catch (error) {
    next(error);
  }
}
const createHocPhan = async (req,res,next) =>{
  try {
    const {ma,tin_lt,tin_th,hoc_phan_bat_buoc,ma_td,ma_sh,ma_tq,ma_mon_hoc,mota}= req.body;
    const foundHocPhan= await HocPhan.findOne({ where: { ma_hoc_phan:`${ma}` } });
    if(foundHocPhan){
      return res
        .status(403)
        .json({ error: { message: "Mã học phần đã tồn tại ." } });
    }
    const newHocPhan = await HocPhan.create({
      ma_hoc_phan:ma,
      so_tin_chi_ly_thuyet:tin_lt,
      so_tin_chi_thuc_hanh:tin_th,
      hoc_phan_bat_buoc:hoc_phan_bat_buoc,
      ma_hoc_phan_tuong_duong:ma_td,
      ma_hoc_phan_song_hanh:ma_sh,
      ma_mon_tien_quyet:ma_tq,
      ma_mon_hoc:ma_mon_hoc,
      mo_ta:mota

    });
    return res.status(201).json({ success: true, newHocPhan });
  } catch (error) {
    next(error);
  }
}
const createChuyenNganh = async (req,res,next) =>{
  try {
    const {ma,ten,ma_khoa,so_tin_chi,mota}= req.body;
    const foundChuyenNganh= await ChuyenNganh.findOne({ where: { ma_chuyen_nganh:`${ma}` } });
    if(foundChuyenNganh){
      return res
        .status(403)
        .json({ error: { message: "Mã chuyên ngành đã tồn tại ." } });
    }
    const newChuyenNganh = await ChuyenNganh.create({
      ma_chuyen_nganh:ma,
      ten_chuyen_nganh:ten,
      so_tin_chi:so_tin_chi,
      ma_khoa:ma_khoa,
      mo_ta:mota

    });
    return res.status(201).json({ success: true, newChuyenNganh });
  } catch (error) {
    next(error);
  }
}
const createChuyenNganhHocPhan = async (req,res,next) =>{
  try {
    const {ma,ma_chuyen_nganh,ma_hoc_phan}= req.body;
    const foundChuyenNganhHocPhan= await ChuyenNganhHocPhan.findOne({ where: { ma:`${ma}` } });
    if(foundChuyenNganhHocPhan){
      return res
        .status(403)
        .json({ error: { message: "Mã chuyên ngành học phần đã tồn tại ." } });
    }
    const newChuyenNganhHocPhan = await ChuyenNganhHocPhan.create({
      ma:ma,
      ma_chuyen_nganh:ma_chuyen_nganh,
      ma_hoc_phan:ma_hoc_phan,
    });
    return res.status(201).json({ success: true, newChuyenNganhHocPhan });
  } catch (error) {
    next(error);
  }
}
const createHocKi= async (req,res,next) =>{
  try {
    const {ma,nam_hoc_bat_dau,nam_ket_thuc,thu_tu_hoc_ki,mo_ta}= req.body;
    const foundHocKi= await HocKi.findOne({ where: { ma_hoc_ki:`${ma}` } });
    if(foundHocKi){
      return res
        .status(403)
        .json({ error: { message: "Mã học kì đã tồn tại ." } });
    }
    const newHocKi = await HocKi.create({
      ma_hoc_ki:ma,
      nam_hoc_bat_dau:nam_hoc_bat_dau,
      nam_hoc_ket_thuc:nam_ket_thuc,
      thu_tu_hoc_ki:thu_tu_hoc_ki,
      mo_ta:mo_ta
    });
    return res.status(201).json({ success: true, newHocKi });
  } catch (error) {
    next(error);
  }
}
const createLopHocPhan= async (req,res,next) =>{
  try {
    const {ma,ten,ten_vt,sl_sv_td,sl_dk_ht,so_nhom_th,loai,trang_thai,ma_hoc_ki,ma_hoc_phan,mo_ta}= req.body;
    const foundLopHocPhan= await LopHocPhan.findOne({ where: { ma_lop_hoc_phan:`${ma}` } });
    if(foundLopHocPhan){
      return res
        .status(403)
        .json({ error: { message: "Mã lớp học phần đã tồn tại ." } });
    }
    const newLopHocPhan = await LopHocPhan.create({
      ma_lop_hoc_phan:ma,
      ten_lop_hoc_phan:ten,
      ten_viet_tat:ten_vt,
      so_luong_dang_ki_toi_da:sl_sv_td,
      so_luong_dang_ki_hien_tai:sl_dk_ht,
      so_nhom_thuc_hanh:so_nhom_th,
      loai:loai,
      trang_thai:trang_thai,
      ma_hoc_ki:ma_hoc_ki,
      ma_hoc_phan:ma_hoc_phan,
      mo_ta:mo_ta
    });
    return res.status(201).json({ success: true, newLopHocPhan });
  } catch (error) {
    next(error);
  }
}

module.exports = {
    createSinhVien,
    createKhoa,
    createTonGiao,
    createAdmin,
    createMonHoc,
    createHocPhan,
    createChuyenNganh,
    createChuyenNganhHocPhan,
    createGiangVien,
    createHocKi,
    createLopHocPhan,
};