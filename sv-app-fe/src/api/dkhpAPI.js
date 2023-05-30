import axiosClient from "./axiosClient";

const dkhpAPI = {
  getHocKi() {
    const url = "/userRequest/getHocKiSinhVien";
    return axiosClient.get(url);
  },
  getThongTinSinhVien() {
    const url = "/userRequest/getThongTinSinhVien";
    return axiosClient.get(url);
  },
  getToanBoMonHocChuaDangKy() {
    const url = "/userRequest/getMonSinhVienChuaHoc";
    return axiosClient.get(url);
  }
  ,
  //Trong 1 học phần sẽ có nhiều lớp
  getLopHocPhanByHocPhan(maHp, maHK) {
    const url = "/userRequest/getLopHocPhanByHocPhan";
    return axiosClient.put(url, { ma: maHp, ma_hoc_ki: maHK });
  },

  getChiTietLopHocPhan(maLopHp) {
    const url = "/userRequest/getChiTietLopHocPhan";
    return axiosClient.put(url, { ma: maLopHp });
  },

  getHocPhanDaDangKyTrongKynay(maHocKi) {
    const url = "/userRequest/getMonDaDangKiTrongHocKi";
    return axiosClient.put(url, { ma: maHocKi });
  },
  dangKiHocPhan(maPCLHP, maHK, trangThaiLHP, soTien, mienGiam) {
    const url = "/userRequest/dangKiHocPhan";
    return axiosClient.post(url, { ma: maPCLHP, ma_hoc_ki: maHK, trang_thai_dang_ki: trangThaiLHP, so_tien: soTien, mien_giam: mienGiam });
  },
  getDanhSachHocPhi() {
    const url = "/userRequest/getDanhSachHocPhi";
    return axiosClient.get(url);
  },
  thanhToanHocPhiTrucTuyen() {
    const url = "/userRequest/thanhToanHocPhiTrucTuyen";
    return axiosClient.put(url);
  },
  xacNhanThanhToanTrucTuyen(resultCode, orderInfo) {
    const url = "/userRequest/xacNhanThanhToanTrucTuyen?resultCode=" + resultCode + "&orderInfo=" + orderInfo;
    return axiosClient.put(url);
  },
  getDanhSachPhieuThuSinhVien() {
    const url = "/userRequest/getDSPhieuThuBySinhVien";
    return axiosClient.put(url);
  },
  getChiTietPhieuThuTongHopBySV(maPhieuThu) {
    const url = "/userRequest/getChiTietPhieuThuTongHopBySV";
    return axiosClient.put(url, { ma_phieu_thu: maPhieuThu })
  },
  getKetQuaHocTap(maHocKi) {
    const url = "/userRequest/getKetQuaHocTap";
    return axiosClient.put(url, { ma_hoc_ki: maHocKi })
  },
  getLopHocPhanKhongTrung(maHP, maHK) {
    const url = "/userRequest/getLopHocPhanKhongTrung";
    return axiosClient.put(url, { ma: maHP, ma_hoc_ki: maHK });
  },
  HuyHocPhanDaDangKi(maHP,maLHP) {
    const url = "/userRequest/HuyHocPhanDaDangKi";
    console.log(maHP);
    console.log(maLHP);
    return axiosClient.put(url, { ma: maHP,maLHP:maLHP });
  },
  getChiTietHocPhanDaDangKi(maLHP) {
    const url = "/userRequest/getChiTietLopHocPhan";
    return axiosClient.put(url, { ma: maLHP });
  }
};

export default dkhpAPI;