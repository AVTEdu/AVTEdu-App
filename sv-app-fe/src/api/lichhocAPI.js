import axiosClient from "./axiosClient";

const lichHocAPI = {

    getThoiKhoaBieuSinhVienTrongMotTuan(ngayHT) {
        const url = "/userRequest/getThoiKhoaBieuSinhVienTrongMotTuan";
        return axiosClient.put(url, { ngay: ngayHT });
    }

};

export default lichHocAPI;