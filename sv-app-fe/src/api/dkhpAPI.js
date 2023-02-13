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
    console.log(maHp)
    return axiosClient.put(url,{ma:maHp});
  }

};

export default dkhpAPI;