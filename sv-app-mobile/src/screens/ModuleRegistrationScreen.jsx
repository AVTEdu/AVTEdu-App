import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../consts/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import lichHocAPI from "../api/xemLichAPI";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { LogBox } from "react-native";

const ModuleRegistrationScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const token = useSelector((state) => state.user.user[0].accessToken);
  const [dsHocKi, setDSHocKi] = useState("");
  const [selectedHocKi, setSelectedHocKi] = useState("");
  const [tenHocKi, setTenHocKi] = useState("");
  const [dsHocPhan, setDSHocPhan] = useState("");
  const [dsHocPhanDaDky, setDSHocPhanDaDky] = useState("");
  const [checked, setChecked] = useState("");
  const [tenMonHoc, setTenMonHoc] = useState("");
  const [selectedHocPhan, setSelectedHocPhan] = useState("");
  const [isDaDKy, setDaDKy] = useState(false);


  useEffect(() => {
    getData();
    getDSHocPhan();
    setChecked("");
    setTenMonHoc("");
    setSelectedHocKi("");
    setTenHocKi("");
    setSelectedHocPhan("");
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  useEffect(() => {
    getDSHocPhanDaDky(token, selectedHocKi);
  }, [selectedHocKi]);



  const getData = async () => {
    const res = await lichHocAPI.getHocKiSinhVien(token);
    setDSHocKi(res.data.dsHocKi);
  };

  const getDSHocPhan = async () => {
    const res = await lichHocAPI.getMonSinhVienChuaHoc(token);
    setDSHocPhan(res.data.results);
  };
  const getDSHocPhanDaDky = async () => {
    const res = await lichHocAPI.getMonDaDangKiTrongHocKi(token, selectedHocKi);
    console.log(res.data.dsMonDaDangKiTrongHocKi);
    setDSHocPhanDaDky(res.data.dsMonDaDangKiTrongHocKi);
  };

  const BackHandler = () => {
    navigation.navigate("Home");
  };

  const ChiTietHandler = () => {
    if(!isDaDKy){
    navigation.navigate("ClassRegistion", {
      ma_hoc_phan: checked,
      ma_hoc_ki: selectedHocKi,
      ten_mon_hoc: tenMonHoc,
    });
    }else{
      navigation.navigate("ChiTietLopHocPhan", {
        ma_lop_hoc_phan: checked,
        ma_hoc_ki: selectedHocKi,
        ten_mon_hoc: tenMonHoc,
        da_dki: isDaDKy
      });
    }
  }

  const RenderItemHocKi = (item) => {
    return (
      <TouchableOpacity
        style={{
          padding: 20,
          borderBottomWidth: 0.6,
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto",
        }}
        onPress={() => {
          setSelectedHocKi(item.ma_hoc_ki);
          setTenHocKi(
            "HK" +
              item.ma_hoc_ki +
              "(" +
              item.nam_hoc_bat_dau +
              "-" +
              item.nam_hoc_ket_thuc +
              ")"
          );
          setModalVisible(false);
        }}
      >
        <Text>
          HK{item.thu_tu_hoc_ki}({item.nam_hoc_bat_dau}-{item.nam_hoc_ket_thuc})
        </Text>
      </TouchableOpacity>
    );
  };

  const RenderItemHocPhan = (item) => {
    return checked == item.ma_hoc_phan ? (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto",
          width: "95%",
          flexDirection: "row",
          backgroundColor: COLORS.primary,
          marginTop: 5,
        }}
        onPress={() => {
          setChecked("");
          setTenMonHoc("");
          setSelectedHocPhan("");
          setDaDKy(false);
        }}
      >
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
          }}
        >
          <Text>{item.ma_hoc_phan}</Text>
        </View>
        <View
          style={{
            width: "50%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ten_mon_hoc}</Text>
        </View>
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.so_tin_chi_ly_thuyet + item.so_tin_chi_thuc_hanh}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto",
          width: "95%",
          flexDirection: "row",
          marginTop: 5,
        }}
        onPress={() => {
          setChecked(item.ma_hoc_phan);
          setTenMonHoc(item.ten_mon_hoc);
          setSelectedHocPhan(item.ten_mon_hoc);
          if(item.trang_thai_dang_ki != null){
            setDaDKy(true);
          }else{
            setDaDKy(false);
          }
        }}
      >
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ma_hoc_phan}</Text>
        </View>
        <View
          style={{
            width: "50%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ten_mon_hoc}</Text>
        </View>
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.so_tin_chi_ly_thuyet + item.so_tin_chi_thuc_hanh}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  //
  const RenderItemHocPhanDaDky = (item) => {
    return checked == item.ma_hoc_phan ? (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto",
          width: "95%",
          flexDirection: "row",
          backgroundColor: COLORS.primary,
          marginTop: 5,
        }}
        onPress={() => {
          setChecked("");
          setTenMonHoc("");
          setSelectedHocPhan("");
          setDaDKy(false);
        }}
      >
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
          }}
        >
          <Text>{item.ma_lop_hoc_phan}</Text>
        </View>
        <View
          style={{
            width: "50%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ten_mon_hoc}</Text>
        </View>
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.so_tin_chi_ly_thuyet + item.so_tin_chi_thuc_hanh}</Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Roboto",
          width: "95%",
          flexDirection: "row",
          marginTop: 5,
        }}
        onPress={() => {
          setChecked(item.ma_lop_hoc_phan);
          setTenMonHoc(item.ten_mon_hoc);
          setSelectedHocPhan(item.ten_mon_hoc);
          if(item.trang_thai_dang_ki != null){
            setDaDKy(true);
          }else{
            setDaDKy(false);
          }
        }}
      >
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ma_lop_hoc_phan}</Text>
        </View>
        <View
          style={{
            width: "50%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.ten_mon_hoc}</Text>
        </View>
        <View
          style={{
            width: "25%",
            paddingVertical: 15,
            alignItems: "center",
            borderWidth: 0.8,
            borderColor: COLORS.grey,
            height: 65,
            justifyContent: "center",
          }}
        >
          <Text>{item.so_tin_chi_ly_thuyet + item.so_tin_chi_thuc_hanh}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
          <View style={{ flexDirection: "row" }}>
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
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Icon name="calendar-today" color={COLORS.white} size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4caffe",
              width: 150,
              height: 40,
              borderRadius: 17,
              marginTop: 10,
            }}
            onPress={() => setModalVisible(true)}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                color: COLORS.white,
                paddingRight: 10,
              }}
            >
              {tenHocKi != "" ? tenHocKi : "Chọn Học Kì"}
            </Text>
            <Icon
              name="arrow-back-ios"
              color={COLORS.white}
              size={18}
              style={{ transform: [{ rotate: "270deg" }], top: -4 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.blue,
                textAlign: "center",
                marginBottom: 10,
                fontFamily: "Roboto",
              }}
            >
              Chọn Học Kỳ
            </Text>
            <ScrollView>
              <FlatList
                scrollEnabled={false}
                data={dsHocKi}
                renderItem={({ item }) => RenderItemHocKi(item)}
              />
            </ScrollView>
            <TouchableOpacity
              style={{ marginTop: 30, padding: 10, left: "90%" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ fontWeight: "600" }}>Hủy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView
        style={{ marginHorizontal: 10, marginTop: 20, width: "100%"}}
      >
        <Text
          style={{
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: 18,
            color: COLORS.blue,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Danh sách học phần chưa đăng ký
        </Text>
        <View
          style={{
            width: "95%",
            backgroundColor: "#2e76c2",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "25%",
              paddingVertical: 15,
              alignItems: "center",
              borderWidth: 0.8,
              borderColor: COLORS.grey,
            }}
          >
            <Text style={{ color: COLORS.white }}>Mã môn</Text>
          </View>
          <View
            style={{
              width: "50%",
              paddingVertical: 15,
              alignItems: "center",
              borderWidth: 0.8,
              borderColor: COLORS.grey,
            }}
          >
            <Text style={{ color: COLORS.white }}>Tên môn học</Text>
          </View>
          <View
            style={{
              width: "25%",
              paddingVertical: 15,
              alignItems: "center",
              borderWidth: 0.8,
              borderColor: COLORS.grey,
            }}
          >
            <Text style={{ color: COLORS.white }}>Tín chỉ</Text>
          </View>
        </View>
        {selectedHocKi != "" ? (
          <FlatList
            data={dsHocPhan}
            renderItem={({ item }) => RenderItemHocPhan(item)}
          />
        ) : null}
        {selectedHocKi != "" ? (
          <View>
            <Text
              style={{
                fontFamily: "Roboto",
                fontWeight: "600",
                fontSize: 18,
                color: COLORS.red,
                textAlign: "center",
                marginBottom: 10,
                marginTop: 20,
              }}
            >
              Danh sách học phần đã đăng ký
            </Text>
            <View
              style={{
                width: "95%",
                backgroundColor: "#2e76c2",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "25%",
                  paddingVertical: 15,
                  alignItems: "center",
                  borderWidth: 0.8,
                  borderColor: COLORS.grey,
                }}
              >
                <Text style={{ color: COLORS.white }}>Mã lớp</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  paddingVertical: 15,
                  alignItems: "center",
                  borderWidth: 0.8,
                  borderColor: COLORS.grey,
                }}
              >
                <Text style={{ color: COLORS.white }}>Tên môn học</Text>
              </View>
              <View
                style={{
                  width: "25%",
                  paddingVertical: 15,
                  alignItems: "center",
                  borderWidth: 0.8,
                  borderColor: COLORS.grey,
                }}
              >
                <Text style={{ color: COLORS.white }}>Tín chỉ</Text>
              </View>
            </View>
            <FlatList
              data={dsHocPhanDaDky}
              renderItem={({ item }) => RenderItemHocPhanDaDky(item)}
            />
          </View>
        ) : null}
      </ScrollView>
      {modalVisible ? <View style={styles.backgroundOverlay} /> : null}
      {checked != "" ? (
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
              {selectedHocPhan}
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
            onPress={() => ChiTietHandler()}
          >
            <Text style={{ fontWeight: "bold", color: COLORS.white }}>
              Chi tiết
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    maxHeight: 300,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default ModuleRegistrationScreen;
