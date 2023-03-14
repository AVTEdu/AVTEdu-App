import axiosClient from "./axiosClient";

const adminAPI = {
    getDSHocPhiSinhVien(maSV) {
        const url = "/admin/getDanhSachHocPhiSinhVien";
        return axiosClient.put(url, { ma: maSV });
    },
    getDanhSachPhieuThuSinhVien(maSV) {
        const url = "/admin/getDanhSachPhieuThuSinhVien";
        return axiosClient.put(url, { ma: maSV });
    },
    thanhToanCongNoSinhVien(maSV, dshp) {
        const url = "/admin/thanhToanCongNoSinhVien";
        return axiosClient.put(url, { ma_sinh_vien: maSV, dsHocPhi: dshp })
    },
    getChiTietPhieuThuTongHop(maSV, maPhieuThu) {
        const url = "/userRequest/getChiTietPhieuThuTongHop";
        return axiosClient.put(url, { ma: maSV, ma_phieu_thu: maPhieuThu })
    },
};
export default adminAPI;