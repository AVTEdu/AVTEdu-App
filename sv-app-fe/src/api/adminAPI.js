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
};
export default adminAPI;