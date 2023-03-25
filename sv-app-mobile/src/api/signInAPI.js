import axiosClient from "./axiosClient";

const signinAPI = {
    signIn(ma,password) {
    const url = "/auth/signIn"
    return axiosClient.post(url, ma,password);
  }

};

export default signinAPI;