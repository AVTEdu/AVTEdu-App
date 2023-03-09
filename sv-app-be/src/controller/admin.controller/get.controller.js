const { ConnectDB } = require("../../config/mysql.config");
const sequelize = ConnectDB().getInstance();
const bcrypt = require("bcryptjs");
const { QueryTypes } = require("sequelize");
const Admin = require("../../model/admin.model");
const ChuyenNganh = require("../../model/chuyennganh.models");
const ChuyenNganhHocPhan = require("../../model/chuyennganhhocphan.model");
const GiangVien = require("../../model/giangvien.model");
const HocKi = require("../../model/hocki.model");
const HocPhan = require("../../model/hocphan.model");
const KetQuaHocTap = require("../../model/ketquahoctap.model");
const Khoa = require("../../model/khoa.model");
const KhoaHoc = require("../../model/khoahoc.model");
const LoaiPhongHoc = require("../../model/loaiphonghoc.model");
const LopHocPhan = require("../../model/lophocphan.model");
const MoHinhDaoTao = require("../../model/mohinhdaotao.model");
const MonHoc = require("../../model/monhoc.model");
const PhanCongLopHocPhan = require("../../model/phanconglophocphan.model");
const PhongHoc = require("../../model/phonghoc.model");
const SinhVien = require("../../model/sinhvien.model");
const ThoiKhoaBieu = require("../../model/thoikhoabieu.model");
const ThoiKhoaBieuSinhVien = require("../../model/thoikhoabieusinhvien.model");
const TonGiao = require("../../model/tongiao.model");
const TrangThaiHocTap = require("../../model/trangthaihoctap.model");

const getDanhSachSinhVien = async (req, res, next) => {
  try {
    const result = await SinhVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachAdmin = async (req, res, next) => {
  try {
    const result = await Admin.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachBacDaoTao = async (req, res, next) => {
  try {
    const result = await BacDaoTao.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachChuyenNganh = async (req, res, next) => {
  try {
    const result = await ChuyenNganh.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachChuyenNganhHocPhan = async (req, res, next) => {
  try {
    const result = await ChuyenNganhHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachDanToc = async (req, res, next) => {
  try {
    const result = await DanToc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachGiangVien = async (req, res, next) => {
  try {
    const result = await GiangVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachHocKi = async (req, res, next) => {
  try {
    const result = await HocKi.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachHocPhan = async (req, res, next) => {
  try {
    const result = await HocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachHocPhi = async (req, res, next) => {
  try {
    const result = await HocPhi.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
// const getDanhSachHocPhiSinhVien = async (req,res,next) =>{
//   try {
//     const result = await HocPhiSinhVien.findAll({limit:10});
//     return res.status(201).json({ success: true, result});
//   } catch (error) {
//     next(error);
//   }
// }
const getDanhSachKetQuaHocTap = async (req, res, next) => {
  try {
    const result = await KetQuaHocTap.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachKhoa = async (req, res, next) => {
  try {
    const result = await Khoa.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachKhoaHoc = async (req, res, next) => {
  try {
    const result = await KhoaHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachLoaiPhongHoc = async (req, res, next) => {
  try {
    const result = await LoaiPhongHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachLopHocPhan = async (req, res, next) => {
  try {
    const result = await LopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachMoHinhDaoTao = async (req, res, next) => {
  try {
    const result = await MoHinhDaoTao.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachMonHoc = async (req, res, next) => {
  try {
    const result = await MonHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachPhanCongLopHocPhan = async (req, res, next) => {
  try {
    const result = await PhanCongLopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachPhongHoc = async (req, res, next) => {
  try {
    const result = await PhongHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachThoiKhoaBieu = async (req, res, next) => {
  try {
    const result = await PhanCongLopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachThoiKhoaBieuSinhVien = async (req, res, next) => {
  try {
    const result = await ThoiKhoaBieuSinhVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachTonGiao = async (req, res, next) => {
  try {
    const result = await TonGiao.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachTrangThaiHocTap = async (req, res, next) => {
  try {
    const result = await TrangThaiHocTap.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
}
const getDanhSachHocPhiSinhVien = async (req, res, next) => {
  try {
    const { ma } = req.body
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: ma },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsHocPhiSinhVien = await sequelize.query(
      `select hp.*,mh.ten_mon_hoc,hpp.ma_hoc_phan
                      from sinhviendb.sinh_vien as sv
                      left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
                      left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
                      left join sinhviendb.lop_hoc_phan as lhp on hp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                      left join sinhviendb.hoc_phan as hpp on lhp.ma_hoc_phan = hpp.ma_hoc_phan
                      left join sinhviendb.mon_hoc as mh on hpp.ma_mon_hoc = mh.ma_mon_hoc
                      where sv.ma_sinh_vien = '${ma}'`,
      { type: QueryTypes.SELECT }
    );
    res.status(201).json({ success: true, dsHocPhiSinhVien });
  } catch (error) {
    next(error);
  }
};
const getDanhSachPhieuThuSinhVien = async (req, res, next) => {
  try {
    const { ma } = req.body
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: ma },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsHocPhiSinhVien = await sequelize.query(
      `select pt.*
        from phieu_thu as pt 
        left join hoc_phi as hp on hp.ma_phieu_thu = pt.ma_phieu_thu
        left join hoc_phi_sinh_vien as hpsv on hpsv.ma_hoc_phi = hp.ma_hoc_phi
        left join sinh_vien as sv on hpsv.ma_sinh_vien = sv.ma_sinh_vien
        where sv.ma_sinh_vien = '${ma}'`,
      { type: QueryTypes.SELECT }
    );
    res.status(201).json({ success: true, dsHocPhiSinhVien });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocPhiSinhVienParam = async (req, res, next) => {
  try {
    const ma = req.query.ma
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: ma },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsHocPhiSinhVien = await sequelize.query(
      `select hp.*,mh.ten_mon_hoc,hpp.ma_hoc_phan
                      from sinhviendb.sinh_vien as sv
                      left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
                      left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
                      left join sinhviendb.lop_hoc_phan as lhp on hp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                      left join sinhviendb.hoc_phan as hpp on lhp.ma_hoc_phan = hpp.ma_hoc_phan
                      left join sinhviendb.mon_hoc as mh on hpp.ma_mon_hoc = mh.ma_mon_hoc
                      where sv.ma_sinh_vien = '${ma}'`,
      { type: QueryTypes.SELECT }
    );
    res.status(201).json({ success: true, dsHocPhiSinhVien });
  } catch (error) {
    next(error);
  }
};
const getDanhSachPhieuThuSinhVienParam = async (req, res, next) => {
  try {
    const ma = req.query.ma
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: ma },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsHocPhiSinhVien = await sequelize.query(
      `select pt.*
        from phieu_thu as pt 
        left join hoc_phi as hp on hp.ma_phieu_thu = pt.ma_phieu_thu
        left join hoc_phi_sinh_vien as hpsv on hpsv.ma_hoc_phi = hp.ma_hoc_phi
        left join sinh_vien as sv on hpsv.ma_sinh_vien = sv.ma_sinh_vien
        where sv.ma_sinh_vien = '${ma}'`,
      { type: QueryTypes.SELECT }
    );
    res.status(201).json({ success: true, dsHocPhiSinhVien });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getDanhSachAdmin,
  getDanhSachBacDaoTao,
  getDanhSachChuyenNganh,
  getDanhSachChuyenNganhHocPhan,
  getDanhSachDanToc,
  getDanhSachGiangVien,
  getDanhSachHocKi,
  getDanhSachHocPhan,
  getDanhSachHocPhi,
  getDanhSachHocPhiSinhVien,
  getDanhSachKetQuaHocTap,
  getDanhSachKhoa,
  getDanhSachKhoaHoc,
  getDanhSachLoaiPhongHoc,
  getDanhSachLopHocPhan,
  getDanhSachMoHinhDaoTao,
  getDanhSachMonHoc,
  getDanhSachPhanCongLopHocPhan,
  getDanhSachPhongHoc,
  getDanhSachSinhVien,
  getDanhSachThoiKhoaBieu,
  getDanhSachThoiKhoaBieuSinhVien,
  getDanhSachTonGiao,
  getDanhSachTrangThaiHocTap,
  getDanhSachPhieuThuSinhVien,
  getDanhSachHocPhiSinhVienParam,
  getDanhSachPhieuThuSinhVienParam
}




