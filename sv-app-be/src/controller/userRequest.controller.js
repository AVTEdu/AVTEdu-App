const { Op } = require("sequelize");
const { ConnectDB } = require("../config/mysql.config");
const HocKi = require("../model/hocki.model");
const SinhVien = require("../model/sinhvien.model");


const sequelize = ConnectDB().getInstance();

const getHocKiSinhVien =  async (req,res,next) =>{
    try {
        const {ma} = req.body;
        const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien:`${ma}` } });
        if (!foundSinhVien)
            return res
            .status(403)
            .json({ error: { message: "Không tìm thấy sinh viên" } });
        const nien_khoa = foundSinhVien.nien_khoa;
        const nam_bat_dau= await nien_khoa.substring(0,4);
        const nam_ket_thuc= await nien_khoa.substring(5);
        const dsHocKi = await HocKi.findAll ({where:{nam_hoc_bat_dau:{[Op.gte]:`${nam_bat_dau}`},nam_hoc_ket_thuc:{[Op.lte]:`${nam_ket_thuc}`}}});
        
      return res.status(201).json({ success: true,  nam_bat_dau,nam_ket_thuc,dsHocKi});
    } catch (error) {
      next(error);
    }
  }
  const getMonHocSinhVienChuaHoc =  async (req,res,next) =>{
    try {
        const {ma} = req.body;
        const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien:`${ma}` } });
        if (!foundSinhVien)
            return res
            .status(403)
            .json({ error: { message: "Không tìm thấy sinh viên" } });
            sequelize.query(`select distinct sv.ma_sinh_vien,sv.ho_ten_sinh_vien,mh.ma_mon_hoc,mh.ten_mon_hoc
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
                              where hp.ma_hoc_phan = lhp.ma_hoc_phan)`)
            .then(function(results) {
              return res.status(201).json({ success: true,results});
            })
    } catch (error) {
      next(error);
    }
  }


  module.exports ={
    getHocKiSinhVien,
    getMonHocSinhVienChuaHoc,
  }