import axiosClient from "./axiosClient";

const lichHocAPI = {

    getThoiKhoaBieuSinhVienTrongMotTuan(ngayHT,token) {
        const url = "/userRequest/getThoiKhoaBieuSinhVienTrongMotTuan";
        return axiosClient.put(url, { ngay: ngayHT },{headers:{ 'authorization': `Bearer ${token}` }});
    },
    getHocKiSinhVien(token) {
        const url = "/userRequest/getHocKiSinhVien";
        return axiosClient.get(url,{headers:{ 'authorization': `Bearer ${token}` }})
    },
    getMonSinhVienChuaHoc(token) {
        const url = "/userRequest/getMonSinhVienChuaHoc";
        return axiosClient.get(url,{headers:{ 'authorization': `Bearer ${token}` }})
    },
    getLopHocPhanByHocPhan(token,ma_hoc_phan,ma_hoc_ki){
        const url = "/userRequest/getLopHocPhanByHocPhan";
        return axiosClient.put(url,{ma:ma_hoc_phan,ma_hoc_ki:ma_hoc_ki},{headers:{ 'authorization': `Bearer ${token}` }})
    },
    getChiTietLopHocPhan(token,ma_lop_hoc_phan){
        const url = "/userRequest/getChiTietLopHocPhan";
        return axiosClient.put(url,{ma:ma_lop_hoc_phan},{headers:{ 'authorization': `Bearer ${token}` }})
    },
    getMonDaDangKiTrongHocKi(token,ma_hoc_ki){
        const url = "/userRequest/getMonDaDangKiTrongHocKi";
        return axiosClient.put(url,{ma:ma_hoc_ki},{headers:{ 'authorization': `Bearer ${token}` }})
    },
    dangKiHocPhan(token,ma_lop_hoc_phan,ma_hoc_ki,trang_thai_dang_ki,so_tien,mien_giam){
        const url= "/userRequest/dangKiHocPhan";
        return axiosClient.post(url,{ma:ma_lop_hoc_phan,ma_hoc_ki:ma_hoc_ki,trang_thai_dang_ki:trang_thai_dang_ki,so_tien:so_tien,mien_giam:mien_giam},{headers:{ 'authorization': `Bearer ${token}` }});
    },

};

export default lichHocAPI;