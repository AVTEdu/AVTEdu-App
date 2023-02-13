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
  getLopHocPhanByHocPhan() {
    const url = "/userRequest/getLopHocPhanByHocPhan";
    return axiosClient.get(url);
  }

};

export default dkhpAPI;