import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/color";
import nullImgae from "../assets/images/null.png"
const DateView = ({tkbdata}) =>{
    const DateComponents = (tiet,tietkt,tenlop,tenmon,nhomthuchanh,phong,giangvien) =>{
        return(
            <View style={{borderBottomColor:COLORS.blue,borderBottomWidth:10}}>
            <View style={{width:"100%",height:40,backgroundColor:COLORS.white,flexDirection:"row",alignItems:"center",borderBottomWidth:0.5}}>
                <View style={{width:5,height:"100%",backgroundColor:"#196dc7"}} ></View>
                <Text style={{marginLeft:10,fontWeight:"bold",fontFamily:"Roboto"}}>Tiết: {tiet}-{tietkt}</Text>
            </View>
            <View style={{width:"100%",minHeight:120,backgroundColor:COLORS.white,top:0.5,flexDirection:"row"}}>
                <View style={{height:"100%",width:"10%",alignItems:"center"}}>
                    <View style={{height:20,width:20,backgroundColor:COLORS.lichhoc,marginTop:10,borderWidth:0.8}}></View>
                </View>
                <View style={{height:"100%",width:"90%",padding:10}}>
                    <Text style={{fontFamily:"Roboto",fontWeight:"bold",fontSize:17,paddingBottom:20}} >{tenlop}:{tenmon}{( nhomthuchanh != 0 ? "(Thực hành)":"(Lý Thuyết)")}</Text>
                    <Text style={{fontFamily:"Roboto",paddingBottom:10}} >Phòng:{phong}</Text>
                    <Text style={{fontFamily:"Roboto",paddingBottom:10}} >Giảng viên:{giangvien} </Text>
                </View>
            </View>
            </View>
        )
    }
    const DateHeaderDay = (thu,ngay,tkb) =>{
        return(
        <View style={{width:"100%"}}>
            <View style={{width:"100%",height:50,backgroundColor:COLORS.dateheaderbar,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#029afd",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold",fontSize:15}} >{thu} - {ngay}</Text>
            </View>
            <FlatList
                data={tkb}
                renderItem={({ item }) => (
                    DateComponents(item.tiet_hoc_bat_dau,item.tiet_hoc_ket_thuc,item.ten_lop_hoc_phan,item.ten_mon_hoc,item.nhom_thuc_hanh,item.ten_phong_hoc,item.ten_giang_vien)
                  )}
            />
           
        </View>
        )
    }
    const checkTKBNull = () =>{
        return tkbdata.every(day => day.TKB.length === 0);
    }
    return(
       
    !checkTKBNull ? 
        <FlatList
            data={tkbdata} 
            renderItem={({ item }) => (
                item.TKB.length > 0  ? DateHeaderDay(item.Thu,item.Ngay,item.TKB) : null
              )}
        />
    :
    <View style={{justifyContent:"center",alignItems:"center",opacity:0.6}}>
        <Image source={nullImgae}
        style ={{width: "80%",
        maxWidth: 300,
        maxHeight: 300,}}
        resizeMode="contain"/>
        <Text>Không có lịch học hiển thị 😭😭</Text>
    </View>
    );
};
export default DateView;

