import axiosClient from "./axiosClient";

const lichHocAPI = {

    getThoiKhoaBieuSinhVienTrongMotTuan(ngayHT,token) {
        const url = "/userRequest/getThoiKhoaBieuSinhVienTrongMotTuan";
        return axiosClient.put(url, { ngay: ngayHT },{headers:{ 'authorization': `Bearer ${token}` }});
    }

};

export default lichHocAPI;