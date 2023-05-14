import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import COLORS from "../consts/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import lichHocAPI from "../api/xemLichAPI";
import { useSelector } from "react-redux";
import { useState } from "react";

const ChiTietLopHocPhanScreen = ({ route, navigation }) => {
  const { ma_lop_hoc_phan, ten_lop_hoc_phan, ma_hoc_ki ,da_dki} = route.params;
  const token = useSelector((state) => state.user.user[0].accessToken);
  const [listLopHocPhan, setListLopHocPhan] = useState("");
  const [selectedThucHanh, setSelectedThucHanh] = useState("");
  const [isThucHanh, setIsThucHanh] = useState(false);
  const [clickCount,setClickCount] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (Array.isArray(listLopHocPhan)) {
      listLopHocPhan.map((item) => {
        if (item.loai_hoc_phan_phu_trach != 1) return setIsThucHanh(true);
      });
    }
  });
  const BackHandler = () => {
    navigation.navigate("Home");
  };
  const DangKyHandler = async () => {
    if(!da_dki)
    Alert.alert("Cảnh báo", "Bạn có chắc chắn đăng ký học phần này", [
      {
        text: "Có",
        onPress: async () => {
          try{
          if (
            Array.isArray(listLopHocPhan) &&
            listLopHocPhan[0]?.ma_phan_cong || clickCount >= 1
          ) {
            if (isThucHanh) {
              const DKHP_ThucHanh = await lichHocAPI.dangKiHocPhan(
                token,
                selectedThucHanh,
                ma_hoc_ki,
                "Đăng kí mới",
                1860000,
                0
              );
              console.log(DKHP_ThucHanh);
              setClickCount(clickCount+1)
            }
            let ma_phan_cong = listLopHocPhan[0].ma_phan_cong;
            console.log(ma_phan_cong);
            const DKHP_LyThuyet = await lichHocAPI.dangKiHocPhan(
              token,
              ma_phan_cong,
              ma_hoc_ki,
              "Đăng kí mới",
              1860000,
              0
            );
            console.log(DKHP_LyThuyet);
            if (DKHP_LyThuyet.status == 201) {
              Alert.alert("Thông báo", "Đăng ký học phần thành công");
              navigation.navigate("Home")
            }
          }}catch(err){
            Alert.alert("Thông báo","Đăng ký học phần thành công");
            navigation.navigate("Home")
          }
        },
      },
      {
        text: "Không",
      },
    ]);
  };

  const getData = async () => {
    const res = await lichHocAPI.getChiTietLopHocPhan(token, ma_lop_hoc_phan);
    setListLopHocPhan(res.data.results);
  };
  const selectedThucHanhHanlder = () => {
    if (!isThucHanh) {
    }
  };
  function ChiTietLopHocPhanTab({ lop_hoc_phan }) {
    const setSlected = (ma,loai_hoc_phan_phu_trach) => {
      if(selectedThucHanh == ma || loai_hoc_phan_phu_trach != 1)
         return COLORS.secondary;
      return COLORS.white;
    };

    return (
      <TouchableOpacity
        style={{
          borderBottomColor: COLORS.blue,
          borderBottomWidth: 10,
          backgroundColor: setSlected(lop_hoc_phan.ma_phan_cong),
        }}
        onPress={() => {
          isThucHanh ? setSelectedThucHanh(lop_hoc_phan.ma_phan_cong) : null;
        }}
      >
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: setSlected(lop_hoc_phan.ma_phan_cong,lop_hoc_phan.loai_hoc_phan_phu_trach),
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
            Tiết:{lop_hoc_phan.tiet_hoc_bat_dau}-
            {lop_hoc_phan.tiet_hoc_ket_thuc}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            minHeight: 120,
            backgroundColor: COLORS.white,
            top: 0.5,
            flexDirection: "row",
          }}
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
                fontWeight: "bold",
                fontSize: 17,
                paddingBottom: 20,
              }}
            >
              Thứ:{lop_hoc_phan.ngay_hoc_trong_tuan}{" "}
              {lop_hoc_phan.loai_hoc_phan_phu_trach == 1
                ? "(Thực hành)"
                : "(Lý Thuyết)"}
            </Text>
            <Text style={{ fontFamily: "Roboto", paddingBottom: 10 }}>
              Phòng:{lop_hoc_phan.ten_phong_hoc}
            </Text>
            <Text style={{ fontFamily: "Roboto", paddingBottom: 10 }}>
              Giảng viên:{lop_hoc_phan.ten_giang_vien}{" "}
            </Text>
            <Text style={{ fontFamily: "Roboto", paddingBottom: 10,color:COLORS.grey,fontWeight:"bold"}}>
              {lop_hoc_phan.thoi_gian_bat_dau}-{lop_hoc_phan.thoi_gian_ket_thuc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  function renderHeader() {
    return (
      <View
        style={{
          width: "100%",
          height: 150,
          ...styles.shadow,
          backgroundColor: "#029afd",
        }}
      >
        <View
          style={{
            flex: 1,
            top: 60,
            width: "100%",
            flexDirection: "row",
            paddingHorizontal: 15,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <TouchableOpacity onPress={() => BackHandler()}>
              <Icon name="arrow-back-ios" color={COLORS.white} size={23} />
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "700",
                color: COLORS.white,
                fontFamily: "Roboto",
              }}
            >
              Đăng kí học phần
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4caffe",
              width: "80%",
              height: 40,
              borderRadius: 17,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                color: COLORS.white,
                paddingRight: 10,
                textAlign: "center",
              }}
            >
              Lớp: {ten_lop_hoc_phan}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <Text style={{
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: 18,
            color: COLORS.blue,
            textAlign: "center",
            marginBottom: 10,
          }}>Chi tiết lớp học phần:</Text>
      <FlatList
        data={listLopHocPhan}
        renderItem={({ item }) => <ChiTietLopHocPhanTab lop_hoc_phan={item} />}
      />
      {selectedThucHanh != "" || isThucHanh == false ? (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            backgroundColor: COLORS.white,
            flexDirection: "row",
          }}
        >
          <View style={{ margin: 10, width: "70%" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "red" }}>
              Học phần đang chọn:
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: COLORS.blue }}
            >
              {ten_lop_hoc_phan}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              margin: 10,
              width: 100,
              height: 50,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => DangKyHandler()}
          >
            <Text style={{ fontWeight: "bold", color: COLORS.white }}>
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
  },
});
export default ChiTietLopHocPhanScreen;
