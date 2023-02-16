import axiosClient from "./axiosClient";

const dkhpAPI = {
  getHocKi() {
    const url = "/userRequest/getHocKiSinhVien";
    return axiosClient.get(url);
  },
  getToanBoMonHocChuaDangKy() {
    const url = "/userRequest/getMonSinhVienChuaHoc";
    return axiosClient.get(url);
  }
  ,
  //Trong 1 học phần sẽ có nhiều lớp
  getLopHocPhanByHocPhan(maHp) {
    const url = "/userRequest/getLopHocPhanByHocPhan";
    return axiosClient.put(url, { ma: maHp });
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
  }

};

export default dkhpAPI;