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
const PhanCongLopHocPhan = require("../model/phanconglophocphan.model");
const { getWeekDates } = require("../helpers/date.validate");
const KetQuaHocTap = require("../model/ketquahoctap.model");
const { findAll } = require("../model/hocki.model");

const sequelize = ConnectDB().getInstance();
/** 
 * Hàm này dùng để lấy học kì sinh viên từ sinh viên đang đăng nhập hiện tại
 * @returns: Tất cả học kì theo thuộc tính niên khoá của sinh vien
 * @private:Private
 * @Vietanh6jk
*/
const getHocKiSinhVien = async (req, res, next) => {
  try {
    //Lấy mã từ acessToken của sinh viên đang đang nhập 
    const ma = req.payload.userId;
    //Tìm kiếm sinh viên xem có sinh viên có trong database không
    const foundSinhVien = await SinhVien.findOne({ where: { ma_sinh_vien: `${ma}` } });
    if (!foundSinhVien)
      //Nếu không có sinh viên đẩy ra lỗi 403 
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    //Thuộc tính niên khoá của sinh viển     
    const nien_khoa = foundSinhVien.nien_khoa;
    //lấy năm bắt đầu từ bằng cấch lấy 4 chữ số đầu
    const nam_bat_dau = await nien_khoa.substring(0, 4);
    //Lấy năm kết thúc từ bằng cách lấy 4 chữ số sau dấu "-"
    const nam_ket_thuc = await nien_khoa.substring(5);
    //Tìm kiếm danh sách học kì từ năm bắt đầu đến năm kết thúc
    const dsHocKi = await HocKi.findAll({ where: { nam_hoc_bat_dau: { [Op.gte]: `${nam_bat_dau}` }, nam_hoc_ket_thuc: { [Op.lte]: `${nam_ket_thuc}` } } });
    //Đưa ra kết quả tìm thấy bằng mã 200 và success:true
    return res.status(201).json({ success: true, nam_bat_dau, nam_ket_thuc, dsHocKi });
  } catch (error) {
    //Bắt lỗi khi chạy hàm và đưa ra trạng thái 
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
                              and  hp.ma_hoc_phan not in (
                              select lhp.ma_hoc_phan from sinhviendb.ket_qua_hoc_tap as kqht 
                              left join sinhviendb.lop_hoc_phan as lhp on kqht.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                              where kqht.ma_sinh_vien = '${ma}')
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
    const { ma, ma_hoc_ki } = req.body;
    const foundHocPhan = await HocPhan.findOne({
      where: { ma_hoc_phan: `${ma}` },
    });
    if (!foundHocPhan)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy học phần" } });
    const foundHocKi = await HocKi.findOne({
      where: { ma_hoc_ki: `${ma_hoc_ki}` },
    })
    if (!foundHocKi)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy học kì" } });
    sequelize
      .query(
        `select mh.ten_mon_hoc,lhp.trang_thai,lhp.ma_lop_hoc_phan,lhp.ten_lop_hoc_phan,lhp.so_luong_dang_ki_hien_tai,lhp.so_luong_dang_ki_toi_da,hk.ma_hoc_ki
        from sinhviendb.hoc_phan as hp
        left join sinhviendb.lop_hoc_phan as lhp on hp.ma_hoc_phan = lhp.ma_hoc_phan
        left join sinhviendb.mon_hoc as mh on hp.ma_mon_hoc = mh.ma_mon_hoc
        left join sinhviendb.hoc_ki as hk on lhp.ma_hoc_ki = hk.ma_hoc_ki
         where hp.ma_hoc_phan = '${ma}' and hk.ma_hoc_ki = '${ma_hoc_ki}'`,
        { type: QueryTypes.SELECT }
      )
      .then(function (results) {
        return res.status(201).json({ success: true, results });
      });
  } catch (error) {

    next(error);
  }
};
const getChiTietLopHocPhan = async (req, res, next) => {
  try {
    //Mã lớp học phần
    const { ma } = req.body;
    const foundHocPhan = await LopHocPhan.findOne({
      where: { ma_lop_hoc_phan: `${ma}` },
    });
    console.log(ma);
    if (!foundHocPhan)
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy  học phần" } });
    sequelize
      .query(
        `select lhp.trang_thai,pclhp.so_luong_sv_phu_trach,pclhp.loai_hoc_phan_phu_trach,tkb.ngay_hoc_trong_tuan,tkb.tiet_hoc_bat_dau,tkb.tiet_hoc_ket_thuc,ph.ten_day_nha,ph.ten_phong_hoc,gv.ten_giang_vien,tkb.thoi_gian_bat_dau,tkb.thoi_gian_ket_thuc,pclhp.ma_phan_cong
        from sinhviendb.hoc_phan as hp
        left join sinhviendb.lop_hoc_phan as lhp on hp.ma_hoc_phan = lhp.ma_hoc_phan
        left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on lhp.ma_lop_hoc_phan = pclhp.ma_lop_hoc_phan
        left join sinhviendb.giang_vien as gv on pclhp.ma_giang_vien = gv.ma_giang_vien
        left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_phan_cong_lop_hoc_phan = pclhp.ma_phan_cong
        left join sinhviendb.phong_hoc as ph on tkb.ma_phong_hoc = ph.ma_phong_hoc
        where lhp.ma_lop_hoc_phan = '${ma}'
        group by pclhp.ma_phan_cong,lhp.trang_thai,pclhp.so_luong_sv_phu_trach,pclhp.loai_hoc_phan_phu_trach,
        tkb.ngay_hoc_trong_tuan,tkb.tiet_hoc_bat_dau,tkb.tiet_hoc_ket_thuc,ph.ten_day_nha,ph.ten_phong_hoc,
        gv.ten_giang_vien,tkb.thoi_gian_bat_dau,tkb.thoi_gian_ket_thuc`, { type: QueryTypes.SELECT })
      .then(function (results) {
        return res.status(201).json({ success: true, results });
      })
  } catch (error) {
    console.log(error)
    next(error);
  }
}
const DangKiHocPhan = async (req, res, next) => {
  try {
    //Mã phân công lớp học phần 
    const { ma, ma_hoc_ki, trang_thai_dang_ki, so_tien, mien_giam } = req.body;
    const foundPCLopHocPhan = await PhanCongLopHocPhan.findOne({ where: { ma_phan_cong: `${ma}` } });
    if (!foundPCLopHocPhan) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy phân công lớp học phần" } });
    }
    const foundLopHocPhan = await LopHocPhan.findOne({ where: { ma_lop_hoc_phan: `${foundPCLopHocPhan.ma_lop_hoc_phan}` } });
    if (!foundLopHocPhan) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy lớp học phần" } });
    }
    if (ma_hoc_ki != foundLopHocPhan.ma_hoc_ki) {
      return res
        .status(403)
        .json({ error: { message: "Học kì trong lớp học phần và học kì đang chọn không trùng nhau" } });
    }
    const ThoiKhoabieu = await sequelize.query(`select tkb.* 
                                            from sinhviendb.lop_hoc_phan as lhp
                                            left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on lhp.ma_lop_hoc_phan = pclhp.ma_lop_hoc_phan
                                            left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_phan_cong_lop_hoc_phan = pclhp.ma_phan_cong
                                            where tkb.ma_phan_cong_lop_hoc_phan = '${ma}'`, { type: QueryTypes.SELECT });

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
    let createTKBSinhVien = await ThoiKhoaBieuSinhVien.findOne({ where: { [Op.and]: [{ ma_sinh_vien: foundSinhVien.ma_sinh_vien }, { ma_thoi_khoa_bieu: ThoiKhoabieu[0].ma_thoi_khoa_bieu }] } })
    if (!createTKBSinhVien)
      createTKBSinhVien = await ThoiKhoaBieuSinhVien.create({
        ma: ma_tkb_sv + 1,
        loai_ngay_hoc: "Thứ",
        ma_sinh_vien: foundSinhVien.ma_sinh_vien,
        ma_thoi_khoa_bieu: ThoiKhoabieu[0].ma_thoi_khoa_bieu,
        ghi_chu: "...."
      })
    const ma_hoc_phi = await HocPhi.max('ma_hoc_phi')
    let createHocPhi = await HocPhi.findOne({ where: { ma_lop_hoc_phan: foundLopHocPhan.ma_lop_hoc_phan } });
    if (!createHocPhi) {
      createHocPhi = await HocPhi.create({
        ma_hoc_phi: ma_hoc_phi + 1,
        noi_dung_thu: "Tiền học phí",
        trang_thai_dang_ki: trang_thai_dang_ki,
        so_tien: so_tien,
        mien_giam: mien_giam,
        so_tien_da_nop: 0,
        cong_no: so_tien,
        trang_thai: 1,
        ma_lop_hoc_phan: foundLopHocPhan.ma_lop_hoc_phan,
      });
    }
    const updateSVHT = await LopHocPhan.update(
      {
        so_luong_dang_ki_hien_tai: `${foundLopHocPhan.so_luong_dang_ki_hien_tai + 1
          }`,
      },
      { where: { ma_lop_hoc_phan: `${foundLopHocPhan.ma_lop_hoc_phan}` } }
    );
    console.log(ma_hoc_ki);
    const ma_hoc_phi_sinh_vien = await HocPhiSinhVien.max('ma_hoc_phi_sinh_vien')
    let createHocPhiSinhVien = await HocPhiSinhVien.findOne({ where: { ma_hoc_phi: ma_hoc_phi } })
    if (!createHocPhiSinhVien) {
      createHocPhiSinhVien = await HocPhiSinhVien.create({
        ma_hoc_phi_sinh_vien: ma_hoc_phi_sinh_vien + 1,
        ma_hoc_phi: ma_hoc_phi + 1,
        ma_sinh_vien: foundSinhVien.ma_sinh_vien
      })
    }
    const ma_bang_diem = await KetQuaHocTap.max('ma_ket_qua_hoc_tap')
    let createBangDiem = await KetQuaHocTap.findOne({ where: { [Op.and]: [{ ma_sinh_vien: foundSinhVien.ma_sinh_vien }, { ma_lop_hoc_phan: foundLopHocPhan.ma_lop_hoc_phan }] } });
    if (!createBangDiem) {
      createBangDiem = await KetQuaHocTap.create({
        ma_ket_qua_hoc_tap: ma_bang_diem + 1,
        diem_tk_1: null,
        diem_tk_2: null,
        diem_tk_3: null,
        diem_tk_4: null,
        diem_tk_5: null,
        diem_th_1: null,
        diem_th_2: null,
        diem_th_3: null,
        diem_th_4: null,
        diem_th_5: null,
        diem_gk: null,
        diem_ck: null,
        diem_tk_hs_4: null,
        diem_tk_hs_10: null,
        diem_chu: null,
        xep_loai: null,
        ghi_chu: null,
        ma_sinh_vien: foundSinhVien.ma_sinh_vien,
        ma_lop_hoc_phan: foundLopHocPhan.ma_lop_hoc_phan,
        tinh_trang_hoc_tap: null,
        ngay_dang_ki: new Date(),
      })
    }
    res
      .status(201)
      .json({ success: true, createTKBSinhVien, createHocPhi, updateSVHT, createHocPhiSinhVien, createBangDiem });
  } catch (error) {
    console.log(error);
    next(error);
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
const getDanhSachHocPhi = async (req, res, next) => {
  try {
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: req.payload.userId },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsHocPhiSinhVien = await sequelize.query(`select hp.*,mh.ten_mon_hoc,hpp.ma_hoc_phan
                    from sinhviendb.sinh_vien as sv
                    left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
                    left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
                    left join sinhviendb.lop_hoc_phan as lhp on hp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
                    left join sinhviendb.hoc_phan as hpp on lhp.ma_hoc_phan = hpp.ma_hoc_phan
                    left join sinhviendb.mon_hoc as mh on hpp.ma_mon_hoc = mh.ma_mon_hoc
                    where sv.ma_sinh_vien = '${req.payload.userId}'`, { type: QueryTypes.SELECT })
    res.status(201).json({ success: true, dsHocPhiSinhVien });
  } catch (error) {
    next(error);
  }
}
const getMonDaDangKiTrongHocKi = async (req, res, next) => {
  try {
    const { ma } = req.body;
    const foundSinhVien = await SinhVien.findOne({
      where: { ma_sinh_vien: req.payload.userId },
    });
    if (!foundSinhVien) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy sinh viên" } });
    }
    const dsMonDaDangKiTrongHocKi = await sequelize.query(`select lhp.ma_hoc_phan,mh.ten_mon_hoc,lhp.ten_lop_hoc_phan,hpp.so_tin_chi_ly_thuyet,hpp.so_tin_chi_thuc_hanh,pclhp.nhom_thuc_hanh_phu_trach,hp.so_tien,hp.trang_thai,hp.trang_thai_dang_ki,lhp.trang_thai
    from sinhviendb.sinh_vien as sv
    left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
    left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
    left join sinhviendb.lop_hoc_phan as lhp on hp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
    left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on pclhp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
    left join sinhviendb.hoc_phan as hpp on hpp.ma_hoc_phan = lhp.ma_hoc_phan
    left join sinhviendb.hoc_ki as hk on lhp.ma_hoc_ki = hk.ma_hoc_ki
    left join sinhviendb.mon_hoc as mh on mh.ma_mon_hoc = hpp.ma_mon_hoc
    left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_phan_cong_lop_hoc_phan = pclhp.ma_phan_cong
    left join sinhviendb.thoi_khoa_bieu_sinh_vien as tkbsv on tkbsv.ma_thoi_khoa_bieu = tkb.ma_thoi_khoa_bieu
    where sv.ma_sinh_vien = '${req.payload.userId}' and hk.ma_hoc_ki = '${ma}' and pclhp.nhom_thuc_hanh_phu_trach =0
    group by pclhp.ma_phan_cong,mh.ten_mon_hoc,lhp.ten_lop_hoc_phan,
     hpp.so_tin_chi_ly_thuyet,hpp.so_tin_chi_thuc_hanh,
    pclhp.nhom_thuc_hanh_phu_trach,hp.so_tien,hp.trang_thai,
    hp.trang_thai_dang_ki,lhp.trang_thai `, { type: QueryTypes.SELECT })
    res.status(201).json({ success: true, dsMonDaDangKiTrongHocKi });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
const getThoiKhoaBieuSinhVienTrongMotTuan = async (req, res, next) => {
  try {
    const { ngay } = req.body;
    const tuan = getWeekDates(new Date(ngay));
    const Thu2 = tuan[0];
    res.status(201).json({ success: true, Thu2 });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
const getChiTietHocPhanDaDangKi = async (req, res, next) => {
  try {
    const { ma } = req.body;
    const dsMonDaDangKiTrongHocKi = await sequelize.query(`select lhp.ma_hoc_phan,mh.ten_mon_hoc,lhp.ten_lop_hoc_phan,hpp.so_tin_chi_ly_thuyet,hpp.so_tin_chi_thuc_hanh,pclhp.nhom_thuc_hanh_phu_trach,hp.so_tien,hp.trang_thai,hp.trang_thai_dang_ki,lhp.trang_thai
    from sinhviendb.sinh_vien as sv
    left join sinhviendb.hoc_phi_sinh_vien as hpsv on sv.ma_sinh_vien = hpsv.ma_sinh_vien
    left join sinhviendb.hoc_phi as hp on hp.ma_hoc_phi = hpsv.ma_hoc_phi
    left join sinhviendb.phan_cong_lop_hoc_phan as pclhp on pclhp.ma_lop_hoc_phan = hp.ma_phan_cong_lop_hoc_phan
    left join sinhviendb.lop_hoc_phan as lhp on pclhp.ma_lop_hoc_phan = lhp.ma_lop_hoc_phan
    left join sinhviendb.hoc_phan as hpp on hpp.ma_hoc_phan = lhp.ma_hoc_phan
    left join sinhviendb.hoc_ki as hk on lhp.ma_hoc_ki = hk.ma_hoc_ki
    left join sinhviendb.mon_hoc as mh on mh.ma_mon_hoc = hpp.ma_mon_hoc
    left join sinhviendb.thoi_khoa_bieu as tkb on tkb.ma_phan_cong_lop_hoc_phan = pclhp.ma_phan_cong
    left join sinhviendb.thoi_khoa_bieu_sinh_vien as tkbsv on tkbsv.ma_thoi_khoa_bieu = tkb.ma_thoi_khoa_bieu
    where lhp.ma_lop_hoc_phan = '${ma}'
    group by pclhp.ma_phan_cong,mh.ten_mon_hoc,lhp.ten_lop_hoc_phan,
     hpp.so_tin_chi_ly_thuyet,hpp.so_tin_chi_thuc_hanh,
    pclhp.nhom_thuc_hanh_phu_trach,hp.so_tien,hp.trang_thai,
    hp.trang_thai_dang_ki,lhp.trang_thai `, { type: QueryTypes.SELECT })
    res.status(201).json({ success: true, dsMonDaDangKiTrongHocKi });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
const HuyHocPhanDaDangKi = async (req, res, next) => {
  try {
    const { ma } = req.body;
    const foundPCLopHocPhan = await PhanCongLopHocPhan.findOne({ where: { ma_lop_hoc_phan: `${ma}` } });
    if (!foundPCLopHocPhan) {
      return res
        .status(403)
        .json({ error: { message: "Không tìm thấy phân công lớp học phần" } });
    }


    res.status(201).json({ success: true, dsMonDaDangKiTrongHocKi });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getHocKiSinhVien,
  getMonHocSinhVienChuaHoc,
  getLopHocPhanByHocPhan,
  getChiTietLopHocPhan,
  DangKiHocPhan,
  getThongTinSinhvien,
  getDanhSachHocPhi,
  getMonDaDangKiTrongHocKi,
  getThoiKhoaBieuSinhVienTrongMotTuan,
}
