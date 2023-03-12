const bcrypt = require("bcryptjs");
const { ConnectDB } = require("../../config/mysql.config");
const { QueryTypes } = require("sequelize");
const responseHandler = require("../../handlers/response.handler");
const Admin = require("../../model/admin.model");
const BacDaoTao = require("../../model/bacdaotao.model");
const ChuyenNganh = require("../../model/chuyennganh.models");
const ChuyenNganhHocPhan = require("../../model/chuyennganhhocphan.model");
const DanToc = require("../../model/dantoc.model");
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
const HocPhi = require("../../model/hocphi.model");
const PhieuThu = require("../../model/phieuthu.model");


const sequelize = ConnectDB().getInstance();

const updateSinhVien = async (req, res, next) => {
  try {
    const { ma, ten, ngay_sinh, email, gioitinh, hktt, sdt, so_cmnd } =
      req.body;
    const result = await SinhVien.update(
      {
        ho_ten_sinh_vien: ten,
        ngay_sinh,
        email,
        gioitinh,
        ho_khau_thuong_tru: hktt,
        so_dien_thoai: sdt,
        so_cmnd,
      },
      {
        where: { ma_sinh_vien: ma },
      }
    );
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
// const getDanhSachAdmin = async (req,res,next) =>{
//   try {
//     const result = await Admin.findAll({limit:10});
//     return res.status(201).json({ success: true, result});
//   } catch (error) {
//     next(error);
//   }
// }
const updateBacDaoTao = async (req, res, next) => {
  try {
    const { ma, ten_bac_dao_tao, mota } = req.body;
    
    const result = BacDaoTao.update(
      {
        ten_bac_dao_tao: ten_bac_dao_tao,
        mota: mota,
      },
      { where: { ma_bac_dao_tao: ma } }
    );
    return responseHandler.ok(res, { success: true, result });
  } catch (error) {
    return responseHandler.error(res, { success: false, error });
  }
};
const updateChuyenNganh = async (req, res, next) => {
  try {
    const { ma, ten, ma_khoa, so_tin_chi, mota } = req.body;
    const foundChuyenNganh = await ChuyenNganh.findOne({
      where: { ma_chuyen_nganh: `${ma}` },
    });
    if (!foundChuyenNganh) {
      return responseHandler.badrequest(res ,{success:false , msg:"Không tìm thấy mã chuyên ngành"})
    }
    const result = await ChuyenNganh.update({
      ten_chuyen_nganh: ten,
      so_tin_chi: so_tin_chi,
      ma_khoa: ma_khoa,
      mo_ta: mota,
    },{where:{ma_chuyen_nganh:`${ma}`}});
    return responseHandler.ok(res,{success:true , result})
  } catch (error) {
    return responseHandler.error(res,{success:false , error})
  }
};
const updateChuyenNganhHocPhan = async (req, res, next) => {
  try {
    const {ma,ma_chuyen_nganh,ma_hoc_phan}= req.body;
    const foundChuyenNganhHocPhan= await ChuyenNganhHocPhan.findOne({ where: { ma:`${ma}` } });
    if(foundChuyenNganhHocPhan){
      return responseHandler.badrequest(res,{success:false, msg:"Không tìm thấy mã chuyên ngành học phần"})
    }
    const result = await ChuyenNganhHocPhan.update({
      ma_chuyen_nganh:ma_chuyen_nganh,
      ma_hoc_phan:ma_hoc_phan,
    },{where:{ ma:`${ma}`}});
    return responseHandler.ok(res,{success:true , result})
  } catch (error) {
    return responseHandler.error(res,{success:false , error})
  }
};
const updateDanToc = async (req, res, next) => {
  try {
    const {ma_dan_toc,ten_dan_toc,mo_ta} = req.body;
    const foundDanToc= await DanToc.findOne({ where: { ma_dan_toc:`${ma_dan_toc}` } });
    if(foundDanToc){
      return responseHandler.badrequest(res,{success:false, msg:"Không tìm thấy mã dân tộc"})
    }
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachGiangVien = async (req, res, next) => {
  try {
    const result = await GiangVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocKi = async (req, res, next) => {
  try {
    const result = await HocKi.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocPhan = async (req, res, next) => {
  try {
    const result = await HocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocPhi = async (req, res, next) => {
  try {
    const result = await HocPhi.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachHocPhiSinhVien = async (req, res, next) => {
  try {
    const result = await HocPhiSinhVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachKetQuaHocTap = async (req, res, next) => {
  try {
    const result = await KetQuaHocTap.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachKhoa = async (req, res, next) => {
  try {
    const result = await Khoa.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachKhoaHoc = async (req, res, next) => {
  try {
    const result = await KhoaHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachLoaiPhongHoc = async (req, res, next) => {
  try {
    const result = await LoaiPhongHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachLopHocPhan = async (req, res, next) => {
  try {
    const result = await LopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachMoHinhDaoTao = async (req, res, next) => {
  try {
    const result = await MoHinhDaoTao.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachMonHoc = async (req, res, next) => {
  try {
    const result = await MonHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachPhanCongLopHocPhan = async (req, res, next) => {
  try {
    const result = await PhanCongLopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachPhongHoc = async (req, res, next) => {
  try {
    const result = await PhongHoc.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachThoiKhoaBieu = async (req, res, next) => {
  try {
    const result = await PhanCongLopHocPhan.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachThoiKhoaBieuSinhVien = async (req, res, next) => {
  try {
    const result = await ThoiKhoaBieuSinhVien.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachTonGiao = async (req, res, next) => {
  try {
    const result = await TonGiao.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};
const getDanhSachTrangThaiHocTap = async (req, res, next) => {
  try {
    const result = await TrangThaiHocTap.findAll({ limit: 10 });
    return res.status(201).json({ success: true, result });
  } catch (error) {
    next(error);
  }
};

const thanhToanCongNoSinhVien = async (req, res, next) => {
  try {
    // const {resultCode,orderId} = req.body
    const {ma_sinh_vien,dsHocPhi} = req.body;
    const ma_phieu_thu = await PhieuThu.max("ma_phieu_thu");
      const createPhieuThu = await PhieuThu.create({
        ma_phieu_thu: ma_phieu_thu + 1,
        ten_phieu_thu: "Thanh toán công nợ của" + ma_sinh_vien,
        ngay_thu: new Date(),
        ghi_chu: "...",
        don_vi_thu: "Admin"
      })
      await dsHocPhi.map(async (ma_hoc_phi) =>{

      let updateTienHocPhi = await sequelize.query(`update hoc_phi
      set hoc_phi.so_tien_da_nop = hoc_phi.so_tien 
      where hoc_phi.ma_hoc_phi = ${ma_hoc_phi}`,{ type: QueryTypes.UPDATE });

      let updateCongNo = await sequelize.query(`update hoc_phi
      set hoc_phi.cong_no = 0 
      where hoc_phi.ma_hoc_phi = ${ma_hoc_phi}`,{ type: QueryTypes.UPDATE }); 

      let updateTrangThai = await sequelize.query(`update hoc_phi
      set hoc_phi.cong_no = 0 
      where hoc_phi.ma_hoc_phi = ${ma_hoc_phi}`,{ type: QueryTypes.UPDATE }); 

      let updatePhieuThu = await sequelize.query(`update hoc_phi
      set hoc_phi.ma_phieu_thu = ${ma_phieu_thu+1}
      where hoc_phi.ma_hoc_phi = ${ma_hoc_phi}`,{ type: QueryTypes.UPDATE }); 

    })
    const dsUpdateHocPhi = await sequelize.query(`SELECT * FROM sinhviendb.hoc_phi where ma_phieu_thu=${ma_phieu_thu}`,{ type: QueryTypes.SELECT })
    return responseHandler.ok(res,{ma_sinh_vien,dsUpdateHocPhi});
  } catch (error) {
    next(error)
  }
};
module.exports = {
  thanhToanCongNoSinhVien
};
