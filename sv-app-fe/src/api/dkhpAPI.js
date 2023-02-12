import axiosClient from "./axiosClient";

const dkhpAPI = {
    getHocKi() {
        const url = "/userRequest/getHocKiSinhVien";
        return axiosClient.get(url);
  }

};

export default dkhpAPI;