import { View, Text,StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../consts/color';
import Icon from "react-native-vector-icons/MaterialIcons";
import lichHocAPI from '../api/xemLichAPI';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const SocreScreen = ({navigation}) => {
  const token = useSelector((state) => state.user.user[0].accessToken);
  const [ketQuaHocTap,setKetQuaHocTap] = useState("");
  const [hocKiDaHoc,setHocKiDaHoc] = useState("");
  

  useEffect(() =>{
    getData();
  },[])

  const getData = async () => {
    const res = await lichHocAPI.getKetQuaHocTapAndroid(token);
    setHocKiDaHoc(res.data.getHocKiDaHoc);
    setKetQuaHocTap(res.data.getKetQuaHocTap);
  };

  const chiaTheoKi = async() =>{
   
  }


  const BackHandler= () =>{
        navigation.navigate("Home");
    }
  
    function renderHeader() {
        return (
          <View
            style={{  
              width: "100%",
              height: 100,
              ...styles.shadow,
              backgroundColor: "#029afd",
            }}
          >
            <View
              style={{flex:1, top:60, width: "100%", flexDirection: "row",paddingHorizontal:15}}
            >
                <View  style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={BackHandler}>
                        <Icon name="arrow-back-ios" color={COLORS.white} size={23} />
                    </TouchableOpacity>
                    <Text style={{fontWeight:"700",color:COLORS.white,fontFamily:"Roboto"}} >Xem điểm</Text>
                </View>                     
            </View>
            <TouchableOpacity >
                <Text></Text>
            </TouchableOpacity>
          </View>
        );
      }
  function renderHocKiDaHoc (thu_tu_hoc_ki,nam_hoc_bat_dau,nam_hoc_ket_thuc,ma_hoc_ki){
    const handlePress = () => {
      renderDiemTungHocKi(ma_hoc_ki)
    };
    const renderDiemTungHocKi = (ma_hoc_ki) =>{
      const getHocKi = (data, maHocKi) => {
        const hocKi = data.flat().filter((item) => item.ma_hoc_ki === maHocKi);
        return hocKi.length > 0 ? hocKi[0] : null;
      };
      let ketQuaHocTapTheoKi = getHocKi(ketQuaHocTap,ma_hoc_ki);
      // Kiểm tra nếu ketQuaHocTapTheoKi không phải là mảng, chuyển đổi thành mảng
      if (!Array.isArray(ketQuaHocTapTheoKi)) {
        ketQuaHocTapTheoKi = Object.values(ketQuaHocTapTheoKi);
      }
     return ketQuaHocTapTheoKi;
    }   
    const ketQuaHocKi = renderDiemTungHocKi(ma_hoc_ki);
    console.log(ma_hoc_ki)
    return(
      <View style={{marginHorizontal:"2.5%",marginTop:10}}>
      <TouchableOpacity style={{width:"95%",padding:15,backgroundColor:COLORS.light,flexDirection:'row',alignItems:'center'}} onPress={handlePress} >
        <Text style={{color:COLORS.blue}}>HK{thu_tu_hoc_ki}-({nam_hoc_bat_dau}-{nam_hoc_ket_thuc})</Text>
        <Icon name="arrow-back-ios" color={COLORS.dark} size={20} style={{ transform: [{ rotate: '270deg' }],top:10,right:10,position:'absolute'}}/>
      </TouchableOpacity>
      {/* <FlatList
        data={ketQuaHocKi}
        renderItem={(item) => console.log(item)}
      /> */}
      </View>
    )
  }
  return (
    <View>
      {renderHeader()}
      <FlatList  
        data={hocKiDaHoc}
        renderItem={({item}) => renderHocKiDaHoc(item.thu_tu_hoc_ki,item.nam_hoc_bat_dau,item.nam_hoc_ket_thuc,item.ma_hoc_ki)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 3,
      backgroundColor:"#f5f5f5"
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
      },
    },
})   

export default SocreScreen