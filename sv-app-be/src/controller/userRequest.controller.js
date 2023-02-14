const { Op } = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");
const HocKi = require("../model/hocki.model");
const SinhVien = require("../model/sinhvien.model");
const { QueryTypes } = require('sequelize');
const HocPhan = require("../model/hocphan.model");
const LopHocPhan = require("../model/lophocphan.model");
const ThoiKhoaBieuSinhVien = require("../model/thoikhoabieusinhvien.model");
const { createThoiKhoaBieuSinhVien } = require("./admin.controller");
const { verifyRefreshToken } = require("../helpers/jwt.service");
const HocPhi = require("../model/hocphi.model");
const responseHanlder = require("../handlers/response.handler");
const HocPhiSinhVien = require("../model/hocphisinhvien.model");
<<<<<<< HEAD
const PhanCongLopHocPhan = require("../model/phanconglophocphan.model");
=======
>>>>>>> vietanh

const sequelize = ConnectDB().getInstance();

const getHocKiSinhVien = async (req, res, next) => {
  try {
    const ma = req.payload.userId;
    const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien: `${ma}` } });
    if (!foundSinhVien)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    const nien_khoa = foundSinhVien.nien_khoa;
    const nam_bat_dau = await nien_khoa.substring(0, 4);
    const nam_ket_thuc = await nien_khoa.substring(5);
    const dsHocKi = await HocKi.findAll({ where: { nam_hoc_bat_dau: { [Op.gte]: `${nam_bat_dau}` }, nam_hoc_ket_thuc: { [Op.lte]: `${nam_ket_thuc}` } } });

    return res.status(201).json({ success: true, nam_bat_dau, nam_ket_thuc, dsHocKi });
  } catch (error) {
    next(error);
  }
}
const getMonHocSinhVienChuaHoc = async (req, res, next) => {
  try {
    const ma = req.payload.userId;
    const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien: `${ma}` } });
    if (!foundSinhVien)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    sequelize
      .query(
        `select  sv.ma_sinh_vien,sv.ho_ten_sinh_vien,mh.ma_mon_hoc,mh.ten_mon_hoc,hp.ma_hoc_phan,hp.so_tin_chi_ly_thuyet,hp.so_tin_chi_thuc_hanh,hp.hoc_phan_bat_buoc,hp.ma_mon_tien_quyet,hp.ma_mon_song_hanh
                              from sinhviendb.sinh_vien as sv
                              left join sinhviendb.chuyen_nganh as cn on sv.ma_chuyen_nganh = cn.ma_chuyen_nganh
                              left join sinhviendb.chuyen_nganh_hoc_phan as cnhp on cn.ma_chuyen_nganh = cnhp.ma_chuyen_nganh
                              left join sinhviendb.hoc_phan as hp on cnhp.ma_hoc_phan = hp.ma_hoc_phan
                              left join sinhviendb.lop_hoc_phan as lhp on hp.ma_hoc_phan = lhp.ma_hoc_phan
                              left join sinhviendb.hoc_ki as hk on lhp.ma_hoc_ki = hk.ma_hoc_ki
                              left join sinhviendb.mon_hoc as mh on hp.ma_mon_hoc = mh.ma_mon_hoc
                              where sv.ma_sinh_vien = '${ma}'
                              and  sv.ma_sinh_vien not in 
                              (select ma_sinh_vien from sinhviendb.ket_qua_hoc_tap as kqht 
                              left join sinhviendb.lop_hoc_phan as lhp on kqht.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                              left join sinhviendb.hoc_phan as hp on hp.ma_hoc_phan = lhp.ma_hoc_phan
                              where hp.ma_hoc_phan = lhp.ma_hoc_phan)
                              group by hp.ma_hoc_phan`, { type: QueryTypes.SELECT })
      .then(function (results) {
        return res.status(201).json({ success: true, results });
      });
  } catch (error) {
    next(error);
  }
};
const getLopHocPhanByHocPhan = async (req, res, next) => {
  try {
    //Mã học phần
    const { ma } = req.body;
    const foundHocPhan = await HocPhan.findOne({
      where: { ma_hoc_phan: `${ma}` },
    });
    if (!foundHocPhan)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy học phần" } });
    sequelize
      .query(
        `select mh.ten_mon_hoc,lhp.trang_thai,lhp.ma_lop_hoc_phan,lhp.ten_lop_hoc_phan,lhp.so_luong_dang_ki_hien_tai,lhp.so_luong_dang_ki_toi_da
                         from sinhviendb.hoc_phan as hp
                         left join sinhviendb.lop_hoc_phan as lhp on hp.ma_hoc_phan = lhp.ma_hoc_phan
                         left join sinhviendb.mon_hoc as mh on hp.ma_mon_hoc = mh.ma_mon_hoc
<<<<<<< HEAD
                         where hp.ma_hoc_phan = 1`,{type: QueryTypes.SELECT})
                         .then(function(results) {
                          return res.status(201).json({ success: true,results});
                        })
    } catch (error) {
      next(error);
    }
}
const getChiTietHocPhan =  async (req,res,next) =>{
  try {
    //Mã lớp học phần
      const {ma} = req.body;
      const foundHocPhan = await HocPhan.findOne({ where: { ma_hoc_phan:`${ma}` } });
      if (!foundHocPhan)
          return res
          .status(403)
          .json({ error: { message: "Không tìm thấy  học phần" } });
      sequelize.query(`select lhp.trang_thai,lhp.so_luong_dang_ki_toi_da,pclhp.loai_hoc_phan_phu_trach,tkb.ngay_hoc_trong_tuan,tkb.tiet_hoc_bat_dau,tkb.tiet_hoc_ket_thuc,ph.ten_day_nha,ph.ten_phong_hoc,gv.ten_giang_vien,tkb.thoi_gian_bat_dau,tkb.thoi_gian_ket_thuc
=======
                         where hp.ma_hoc_phan = '${ma}'`,
        { type: QueryTypes.SELECT }
      )
      .then(function (results) {
        return res.status(201).json({ success: true, results });
      });
  } catch (error) {
    next(error);
  }
};
const getChiTietHocPhan = async (req, res, next) => {
  try {
    //Mã lớp học phần
    const { ma } = req.body;
    const foundHocPhan = await HocPhan.findOne({
      where: { ma_hoc_phan: `${ma}` },
    });
    if (!foundHocPhan)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy  học phần" } });
    sequelize
      .query(
        `select lhp.trang_thai,lhp.so_luong_dang_ki_toi_da,pclhp.loai_hoc_phan_phu_trach,tkb.ngay_hoc_trong_tuan,tkb.tiet_hoc_bat_dau,tkb.tiet_hoc_ket_thuc,ph.ten_day_nha,ph.ten_phong_hoc,gv.ten_giang_vien,tkb.thoi_gian_bat_dau,tkb.thoi_gian_ket_thuc
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay
                        from sinhviendb.hoc_phan as hp
                        left join sinhviendb.lop_hoc_phan as lhp on hp.ma_hoc_phan = lhp.ma_lop_hoc_phan
                        left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on lhp.ma_lop_hoc_phan = pclhp.ma_lop_hoc_phan
                        left join sinhviendb.giang_vien as gv on pclhp.ma_giang_vien = gv.ma_giang_vien
                        left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_lop_hoc_phan = lhp.ma_hoc_phan
                        left join sinhviendb.phong_hoc as ph on tkb.ma_phong_hoc = ph.ma_phong_hoc
<<<<<<< HEAD
                        where hp.ma_hoc_phan = 1`,{type: QueryTypes.SELECT})
                       .then(function(results) {
                        return res.status(201).json({ success: true,results});
                      })
=======
                        where hp.ma_hoc_phan = 1`, { type: QueryTypes.SELECT })
      .then(function (results) {
        return res.status(201).json({ success: true, results });
      })
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay
  } catch (error) {
    next(error);
  }
}
const DangKiHocPhan =  async (req,res,next) =>{
  try {
    //Mã lớp học phần 
    const { ma, trang_thai_dang_ki,so_tien,mien_giam } = req.body;
    const foundLopHocPhan = await LopHocPhan.findOne({ where: { ma_lop_hoc_phan: `${ma}` } });
    console.log(ma)

    if (!foundLopHocPhan) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy lớp học phần" } });
    }
    const ThoiKhoabieu = await sequelize.query(`select tkb.* 
                                            from sinhviendb.lop_hoc_phan as lhp
                                            left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on lhp.ma_lop_hoc_phan = pclhp.ma_lop_hoc_phan
                                            left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_phan_cong_lop_hoc_phan = pclhp.ma_phan_cong

                                            where lhp.ma_lop_hoc_phan = '${ma}'`, { type: QueryTypes.SELECT });

    if (!ThoiKhoabieu) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy thời khoá biểu " } });
    }
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: req.payload.userId },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    if (foundLopHocPhan.so_luong_dang_ki_toi_da === foundLopHocPhan.so_luong_dang_ki_hien_tai) {
      return res
        .status(403)
        .json({ error: { message: "Lớp đã đủ số lượng sinh viên đăng kí " } });
    }
    const ma_tkb_sv = await ThoiKhoaBieuSinhVien.max('ma');
    const createTKBSinhVien = await ThoiKhoaBieuSinhVien.create({
      ma: ma_tkb_sv + 1,
      loai_ngay_hoc: "Thứ",
      ma_sinh_vien: foundSinhVien.ma_sinh_vien,
      ma_thoi_khoa_bieu: foundThoiKhoaBieu.ma_thoi_khoa_bieu,
      ghi_chu: "...."
    })
    const ma_hoc_phi = await HocPhi.max('ma_hoc_phi')
    const createHocPhi = await HocPhi.create({
      ma_hoc_phi: ma_hoc_phi + 1,
      noi_dung_thu: "Tiền học phí",
      trang_thai_dang_ki: trang_thai_dang_ki,
      so_tien: so_tien,
      mien_giam: mien_giam,
      so_tien_da_nop: 0,
      cong_no: so_tien,
      trang_thai: 1,
      ma_hoc_phan: foundLopHocPhan.ma_hoc_phan,
    });
    const updateSVHT = await LopHocPhan.update(
      {
        so_luong_dang_ki_hien_tai: `${
          foundLopHocPhan.so_luong_dang_ki_hien_tai + 1
        }`,
      },
      { where: { ma_lop_hoc_phan: `${foundLopHocPhan.ma_lop_hoc_phan}` } }
    );
    const ma_hoc_phi_sinh_vien = await HocPhiSinhVien.max('ma_hoc_phi_sinh_vien')
    const createHocPhiSinhVien  =  await HocPhiSinhVien.create({
      ma_hoc_phi_sinh_vien:ma_hoc_phi_sinh_vien+1,
      ma_hoc_phi:ma_hoc_phi,
      ma_sinh_vien:foundSinhVien.ma_sinh_vien
    })
    res
      .status(201)
      .json({ success: true, createTKBSinhVien, createHocPhi, updateSVHT ,createHocPhiSinhVien});
  } catch (error) {
    console.log(error)
    next(error)
  }
}
const getThongTinSinhvien = async (req, res, next) => {
  try {
    const userId = req.payload.userId;
    const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien: req.payload.userId } });
    if (!foundSinhVien)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    res.status(201).json({ success: true, foundSinhVien });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocPhi = async (req,res,next) =>{
  try {
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: req.payload.userId },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const  dsHocPhiSinhVien= await sequelize.query(`select hp.*
                    from sinhviendb.sinh_vien as sv
                    left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
                    left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
                    where sv.ma_sinh_vien = '${req.payload.userId}'`,{ type: QueryTypes.SELECT })
    res.status(201).json({ success: true, dsHocPhiSinhVien });
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay
  } catch (error) {
    next(error);
  }
}
const getThongTinSinhvien =   async (req,res,next) =>{
  try {
    const {ma} = req.body
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: req.payload.userId },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsMonDaDangKiTrongHocKi= await sequelize.query(`select hp.ma_hoc_phan,mh.ten_mon_hoc,lhp.ten_lop_hoc_phan,hpp.so_tin_chi_ly_thuyet,hpp.so_tin_chi_thuc_hanh,pclhp.nhom_thuc_hanh_phu_trach,hp.so_tien,hp.trang_thai,hp.trang_thai_dang_ki,lhp.trang_thai
                                                    from sinhviendb.sinh_vien as sv
                                                    left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
                                                    left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
                                                    left join sinhviendb.hoc_phan as hpp on hpp.ma_hoc_phan = hp.ma_hoc_phan
                                                    left join sinhviendb.lop_hoc_phan as lhp on hpp.ma_hoc_phan = lhp.ma_hoc_phan
                                                    left join sinhviendb.hoc_ki as hk on lhp.ma_hoc_ki = hk.ma_hoc_ki
                                                    left join sinhviendb.mon_hoc as mh on mh.ma_mon_hoc = hpp.ma_mon_hoc
                                                    left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on pclhp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                                                    where sv.ma_sinh_vien = '${req.payload.userId}' and hk.ma_hoc_ki = '${ma}'
                                                    group by hp.ma_hoc_phan `,{ type: QueryTypes.SELECT })
    res.status(201).json({ success: true, dsMonDaDangKiTrongHocKi });
  } catch (error) {
    next(error);
  }
}
<<<<<<< HEAD



  module.exports ={
    getHocKiSinhVien,
    getMonHocSinhVienChuaHoc,
    getLopHocPhanByHocPhan,
    getChiTietHocPhan,
    DangKiHocPhan,
    getThongTinSinhvien,
  }
=======
module.exports = {
  getHocKiSinhVien,
  getMonHocSinhVienChuaHoc,
  getLopHocPhanByHocPhan,
  getChiTietHocPhan,
  DangKiHocPhan,
  getThongTinSinhvien,
  getDanhSachHocPhi,
}
>>>>>>> parent of 96aa3b1... update getChiTietLopHocPhan and add getMonDangKiTrongKiNay