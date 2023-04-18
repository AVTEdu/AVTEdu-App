import { View, Text,StyleSheet,TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import COLORS from '../consts/color';
import Icon from "react-native-vector-icons/MaterialIcons";
import lichHocAPI from '../api/xemLichAPI';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const ClassRegistion = ({ route, navigation }) => {
  const {ma_hoc_phan,ma_hoc_ki,ten_mon_hoc} = route.params;
  const token = useSelector((state) => state.user.user[0].accessToken);
  const [listLopHocPhan,setListLopHocPhan] = useState("");
  const [selectedLopHocPhan,setSelectedLopHocPhan] = useState("");
  const [selectedTenLopHocPhan,setSelectedTenLopHocPhan] = useState("");
  useEffect(() =>{
    getData();
    setSelectedLopHocPhan("")
    setSelectedTenLopHocPhan("")
  },[])
  const getData = async () => {
    const res = await lichHocAPI.getLopHocPhanByHocPhan(token,ma_hoc_phan,ma_hoc_ki);
    setListLopHocPhan(res.data.results)
  };
  const BackHandler = () => {
    navigation.navigate("Home");
  };
  function ClassRegressionTab  ({lop_hoc_phan}){
    const setTrangThai = (trangthai) => {
      if (trangthai == 1) {
        return "Đang chờ sinh viên đăng kí ";
      }
      return "Đã khóa";
    };
    const setSlected = () =>{
      if(lop_hoc_phan.ma_lop_hoc_phan == selectedLopHocPhan)
      return COLORS.secondary;
      return COLORS.white
    }
    return (
      <TouchableOpacity
        style={{
          borderBottomColor: COLORS.blue,
          borderBottomWidth: 10,
          backgroundColor: setSlected(),
        }}
        onPress={() => {setSelectedLopHocPhan(lop_hoc_phan.ma_lop_hoc_phan);setSelectedTenLopHocPhan(lop_hoc_phan.ten_lop_hoc_phan)}}
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
          <View style={{ flexDirection: "row",alignItems:'flex-start'}}>
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
                textAlign:'center'
              }}
            >
              {ten_mon_hoc}
            </Text>
          
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <Text>Danh sách lớp học phần</Text>
      <ScrollView>
      <FlatList 
      data={listLopHocPhan}
      scrollEnabled={true}
      renderItem={({item}) => <ClassRegressionTab lop_hoc_phan={item} /> }
      />
      </ScrollView>
      {selectedLopHocPhan != "" ? (
        <View style={{position:'absolute',bottom:0,right:0,height:80,width:"100%",backgroundColor:COLORS.white}}>
        <View style={{margin:10}}>
          <Text style={{fontSize:20,fontWeight:'bold',color:"red"}}>Lớp đang chọn:</Text>
          <Text style={{fontSize:20,fontWeight:'bold',color:COLORS.blue}}>{selectedTenLopHocPhan}</Text>
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
          onPress={() =>{navigation.navigate('ChiTietLopHocPhan',{ma_lop_hoc_phan:selectedLopHocPhan,ten_lop_hoc_phan:selectedTenLopHocPhan,ma_hoc_ki:ma_hoc_ki})}}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.white }}>
            Chi Tiết
          </Text>
        </TouchableOpacity>
        </View>
      ) : null}
    </View>
  )
}
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
}) 
export default ClassRegistion