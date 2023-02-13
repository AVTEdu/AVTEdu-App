import axiosClient from "./axiosClient";

const dkhpAPI = {
    getHocKi(maHp) {
        const url = "/userRequest/getHocKiSinhVien";
        return axiosClient.put(url,{ma:maHp});
  }

};

export default dkhpAPI;