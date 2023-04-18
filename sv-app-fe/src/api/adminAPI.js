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
    getDanhSachDiemSVTheoLop(maLop) {
        const url = "admin/getDSDiemSinhVienTheoLop";
        return axiosClient.put(url, { maLHP: maLop })
    },
    putDiemMotSinhVien(maKQHT, tk1, tk2, tk3, tk4, tk5, th1, th2, th3, th4, th5, gk, ck, tongket, tongketh4) {
        const url = "admin/updateDiemMotSinhVien";
        return axiosClient.put(url, {
            ma_ket_qua_hoc_tap: maKQHT,
            diem_tk_1: tk1, diem_tk_2: tk2, diem_tk_3: tk3, diem_tk_4: tk4, diem_tk_5: tk5,
            diem_th_1: th1, diem_th_2: th2, diem_th_3: th3, diem_th_4: th4, diem_th_5: th5, diem_gk: gk, diem_ck: ck, diem_tk_hs_10: tongket
            , diem_tk_hs_4: tongketh4
        })
    },
    getDanhSachToanBoKhoa() {
        const url = "admin/getDSKhoa";
        return axiosClient.get(url);
    },
    getDanhSachSVByKhoa(ma_khoa) {
        const url = "/admin/getDsSVByKhoa";
        return axiosClient.put(url, { maKhoa: ma_khoa });
    },
    getDsChuyenNganhTheoKhoa(ma_khoa) {
        const url = "admin/getDsChuyenNganhTheoKhoa";
        return axiosClient.put(url, { maKhoa: ma_khoa });
    },
    createSinhVien(masv, tensv, ngay_sinhsv, emailsv, gioitinhsv, sdtsv, so_cmndsv, khoasv, chuyennganhsv) {
        const url = "/admin/createSinhVien";
        return axiosClient.post(url, {
            ma: masv, ten: tensv, ngay_sinh: ngay_sinhsv,
            email: emailsv, gioitinh: gioitinhsv, sdt: sdtsv, so_cmnd: so_cmndsv, khoa: khoasv,
            chuyennganh: chuyennganhsv
        });
    },
    getDSMonHoc() {
        const url = "/admin/getDSMonHoc";
        return axiosClient.get(url);
    },
    getAllChuyenNganh() {
        const url = "/admin/getAllChuyenNganh";
        return axiosClient.get(url);
    },
    getAllHocPhan() {
        const url = "/admin/getAllHocPhan";
        return axiosClient.get(url);
    },
    getAllHocKi() {
        const url = "/admin/getAllHocKi";
        return axiosClient.get(url);
    },
    getAllLopHocPhan() {
        const url = "/admin/getAllLopHocPhan";
        return axiosClient.get(url);
    },
    getAllPhanCong() {
        const url = "/admin/getAllPhanCong";
        return axiosClient.get(url);
    },
    getAllPhong() {
        const url = "/admin/getAllPhong";
        return axiosClient.get(url);
    },
    getAllTKB() {
        const url = "/admin/getAllTKB";
        return axiosClient.get(url);
    },
};
export default adminAPI;