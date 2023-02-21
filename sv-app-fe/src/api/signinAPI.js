import axiosClient from "./axiosClient";

const signinAPI = {
  signIn(phoneNumber, password) {
    const url = "/auth/signin";
    return axiosClient.post(url, phoneNumber, password);

  },
  signInAdmin(ma, password) {
    const url = "/auth/signinAdmin";
    return axiosClient.get(url, ma, password);

  },

};

export default signinAPI;
