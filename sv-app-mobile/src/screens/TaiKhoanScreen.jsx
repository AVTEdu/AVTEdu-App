import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import COLORS from "../consts/color";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import lichHocAPI from "../api/xemLichAPI";

const TaiKhoanScreen = ({ navigation }) => {
  const token = useSelector((state) => state.user.user[0].accessToken);
  const refToken = useSelector((state) => state.user.user[0].refreshToken);
  const [userDetails, setUserDetail] = useState("");
  const [userName, setuserName] = useState("");
  useEffect(() => {
    getUserDeatils();
  }, []);

  const getUserDeatils = async () => {
    const res = await lichHocAPI.getThongTinSinhVien(token);
    setUserDetail(res.data.infor);
    setuserName(res.data.infor[0].ho_ten_sinh_vien);
  };

  const logOutButtonHandler = async () => {
    const res = await lichHocAPI.logout(token, refToken);
    navigation.navigate("Login");
  };
  function renderHeader() {
    return (
      <View
        style={{
          width: "100%",
          height: 230,
          ...styles.shadow,
          backgroundColor: "#029afd",
        }}
      >
        <View
          style={{ flex: 1, top: 60, width: "100%", paddingHorizontal: 15 }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              top: "-15%",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontFamily: "Roboto",
                fontSize: 18,
                marginBottom: 10,
              }}
            >
              Thông tin sinh viên
            </Text>
            <View
              style={{
                width: 120,
                height: 120,
                borderWidth: 1,
                borderColor: COLORS.white,
                borderRadius: 90,
                marginBottom: 10,
              }}
            ></View>
            <Text
              style={{
                color: COLORS.white,
                fontFamily: "Roboto",
                fontSize: 15,
                fontWeight: "300",
              }}
            >
              {userName}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  const rowDetail = (rowName, data) => {
    return (
      <View
        style={{
          width: "94%",
          minHeight: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: COLORS.grey,
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "3%",
          marginRight: "3%",
        }}
      >
        <Text
          style={{
            width: "35%",
            marginLeft: "2%",
            marginRight: "1%",
            fontWeight: "400",
          }}
        >
          {rowName}:
        </Text>
        <Text style={{ width: "54%", fontWeight: "400", marginRight: "2%" }}>
          {data}
        </Text>
      </View>
    );
  };
  const renderItem = (item) => {
    return (
      <View>
        {rowDetail("Mã sinh viên", item.ma_sinh_vien)}
        {rowDetail("Giới tính", item.gioi_tinh == 1 ? "Nam" : "Nữ")}
        {rowDetail("Chuyên ngành", item.ten_chuyen_nganh)}
        {rowDetail("Ngày sinh", item.ngay_sinh)}
        {rowDetail("Niên khóa", item.nien_khoa)}
        {rowDetail("Hộ khẩu thường trú", item.ho_khau_thuong_tru)}
        {rowDetail("Khóa học", item.ten_khoa_hoc)}
        {rowDetail("Trạng thái học tập", item.ten_trang_thai_hoc_tap)}
      </View>
    );
  };
  const logOutButton = () => {
    return (
      <TouchableOpacity
        style={{
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          height: "8%",
          backgroundColor: "#029afd",
          marginTop: 10,
          borderRadius: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => logOutButtonHandler()}
      >
        <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: "bold" }}>
          Đăng xuất
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {renderHeader()}
      <FlatList
        data={userDetails}
        renderItem={({ item }) => renderItem(item)}
      />
      {logOutButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#f5f5f5",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
  },
});

export default TaiKhoanScreen;
