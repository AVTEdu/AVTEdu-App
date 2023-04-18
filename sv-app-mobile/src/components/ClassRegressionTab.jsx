import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../consts/color";

const ClassRegressionTab = ({ lop_hoc_phan}) => {
  const setTrangThai = (trangthai) => {
    if (trangthai == 1) {
      return "Đang chờ sinh viên đăng kí";
    }
    return "Đã khóa";
  };
  return (
    <TouchableOpacity
      style={{
        borderBottomColor: COLORS.blue,
        borderBottomWidth: 10,
        backgroundColor: COLORS.white,
      }}
      >
      <View
        style={{
          width: "100%",
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 0.5,
        }}
      >
        <View
          style={{ width: 5, height: "100%", backgroundColor: "#196dc7" }}
        ></View>
        <Text
          style={{ marginLeft: 10, fontWeight: "bold", fontFamily: "Roboto" }}
        >
          Lớp: {lop_hoc_phan.ten_lop_hoc_phan}
        </Text>
      </View>
      <View
        style={{ width: "100%", minHeight: 50, top: 0.5, flexDirection: "row" }}
      >
        <View style={{ height: "100%", width: "10%", alignItems: "center" }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: COLORS.lichhoc,
              marginTop: 10,
              borderWidth: 0.8,
            }}
          ></View>
        </View>
        <View style={{ height: "100%", width: "90%", padding: 10 }}>
          <Text
            style={{
              fontFamily: "Roboto",
              paddingBottom: 10,
              fontWeight: "bold",
            }}
          >
            Số lượng đăng kí: {lop_hoc_phan.so_luong_dang_ki_hien_tai}/
            {lop_hoc_phan.so_luong_dang_ki_toi_da}
          </Text>
          <Text
            style={{ fontFamily: "Roboto", paddingBottom: 10, color: "red" }}
          >
            Trạng thái: {setTrangThai(lop_hoc_phan.trang_thai)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: COLORS.lichhoc,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 15,
  },
});

export default ClassRegressionTab;
