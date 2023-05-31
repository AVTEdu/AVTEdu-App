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
    getDsMonTheoKhoa(ma_khoa) {
        const url = "/admin/getDsMonTheoKhoa";
        return axiosClient.put(url, { maKhoa: ma_khoa });
    },
    getHocPhanTheoChuyenNganh(ma_chuyen_nganh) {
        const url = "/admin/getHocPhanTheoChuyenNganh";
        return axiosClient.put(url, { maCN: ma_chuyen_nganh });
    },
    getDSLopTheoHocKi(ma_hoc_ki) {
        const url = "/admin/getDSLopTheoHocKi";
        return axiosClient.put(url, { maHK: ma_hoc_ki });
    },
    getDSLopTheoChuyenNganhHocKi(ma_hoc_ki, ma_chuyen_nganh) {
        const url = "/admin/getDSLopTheoChuyenNganhHocKi";
        return axiosClient.put(url, { maHK: ma_hoc_ki, maCN: ma_chuyen_nganh });
    },
    getDSPhanCongTheoMaGiangVien(ma_giang_vien) {
        const url = "/admin/getDSPhanCongTheoMaGiangVien";
        return axiosClient.put(url, { maGV: ma_giang_vien });
    },
    getDSPhanCongTheoMaLHP(ma_lop_hoc_phan) {
        const url = "/admin/getDSPhanCongTheoMaLHP";
        return axiosClient.put(url, { maLHP: ma_lop_hoc_phan });
    },
    getDSTKBTheoMaCNVaHocKi(ma_hoc_ki, ma_chuyen_nganh) {
        const url = "/admin/getDSTKBTheoMaCNVaHocKi";
        return axiosClient.put(url, { maHK: ma_hoc_ki, maCN: ma_chuyen_nganh });
    },
    getDsPhongTheoTen(ten_phong_hoc) {
        const url = "/admin/getDsPhongTheoTen";
        return axiosClient.put(url, { tenP: ten_phong_hoc });
    },
    taoMaSinhVien() {
        const url = "/admin/taoMaSinhVien";
        return axiosClient.get(url);
    },
    createLopHocPhan(Ma, Ten, Ten_VT, sl_toida, soNhomTH, Loai, TT, MaHK, MaHP, mota) {
        const url = "/admin/createLopHocPhan";
        return axiosClient.post(url, {
            ma: Ma, ten: Ten, ten_vt: Ten_VT, sl_sv_td: sl_toida, sl_dk_ht: 0, so_nhom_th: soNhomTH, loai: Loai,
            trang_thai: TT, ma_hoc_ki: MaHK, ma_hoc_phan: MaHP, mo_ta: mota
        });
    },
    createPhanCongLopHocPhan(nhapMaPC, nhapLoaiHP, nhapNhomTH, nhapSoluong, nhapMaGiangVien, nhapMaLHP) {
        const url = "/admin/createPhanCongLopHocPhan";
        return axiosClient.post(url, {
            ma: nhapMaPC,
            loai: nhapLoaiHP,
            nhom_th_pt: nhapNhomTH,
            sl_sv_pt: nhapSoluong,
            ma_giang_vien: nhapMaGiangVien,
            ma_lop_hoc_phan: nhapMaLHP,
            ghi_chu: "..."
        });
    },
    getNewMaPhanCong() {
        const url = "/admin/getNewMaPhanCong";
        return axiosClient.get(url);
    },
    getNewMaLopHocPhan() {
        const url = "/admin/getNewMaLopHocPhan";
        return axiosClient.get(url);
    },
    createThoiKhoaBieu(nhapThuTuNgayHocTrongTuan, nhapTGBatDau, nhapTGKetThuc, nhapTietBD, nhapTietKT, nhapMaPhong, nhapMaPhanCong) {
        const url = "/admin/createThoiKhoaBieu";
        return axiosClient.post(url, {
            ma: null,
            loai: "1",
            ngay_hoc_trong_tuan: nhapThuTuNgayHocTrongTuan,
            nhom_thuc_hanh: null,
            thoi_gian_bat_dau: nhapTGBatDau,
            thoi_gian_ket_thuc: nhapTGKetThuc,
            tiet_hoc_bat_dau: nhapTietBD,
            tiet_hoc_ket_thuc: nhapTietKT,
            ma_phan_cong_lop_hoc_phan: nhapMaPhanCong,
            ma_phong_hoc: nhapMaPhong,
            ghi_chu: ".."
        });
    },
};
export default adminAPI;