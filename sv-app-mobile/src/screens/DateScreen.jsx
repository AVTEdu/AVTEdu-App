import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import COLORS from "../consts/color";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateView from "../components/DateView";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const DateScreen = ({navigation}) => {
  const [day,setDay] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (!(day instanceof Date)) { // isNaN wont accept a date in typescript, use date.getTime() instead to produce a number
      console.log(day)
      console.log(new Date().getDate())
      console.log("! is date");
    }
    DateTimePickerAndroid.open({
      value: day,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
                <Text style={{fontWeight:"700",color:COLORS.white,fontFamily:"Roboto"}} >Lịch học - lịch thi</Text>
            </View>      
            <TouchableOpacity style={{marginLeft:"auto"}} onPress={showDatepicker}>
                <Icon name="calendar-today" color={COLORS.white} size={23} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderDateBar() {
    return(
        <View style={styles.datebar}>
            <TouchableOpacity style={{borderWidth:1,width:"10%",justifyContent:"center",alignItems:"center",borderRadius:50,borderColor:COLORS.grey,marginRight:"auto"}}>
                <Icon style={{padding:5,left:5}} name="arrow-back-ios" color={COLORS.blue} size={23} />
            </TouchableOpacity>
            <Text style={{color:"#029afd",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold"}}>20/02/2023 - 26/02/2023</Text>
            <TouchableOpacity style={{borderWidth:1,width:"10%",justifyContent:"center",alignItems:"center",borderRadius:50,borderColor:COLORS.grey,transform: [{rotate: '180deg'}],marginLeft:"auto"}}>
                <Icon style={{padding:5,left:5}} name="arrow-back-ios" color={COLORS.blue} size={23} />
            </TouchableOpacity>
        </View>
    );
  }
  // function DateTimeSample(){
  //   return(
  //       <View style={{width:"100%"}}>
  //           <View style={{width:"100%",height:50,backgroundColor:COLORS.dateheaderbar,justifyContent:"center",alignItems:"center"}}>
  //               <Text style={{color:"#029afd",textAlign:"center",fontFamily:"Roboto",fontWeight:"bold",fontSize:15}} >Thứ 2 - 20/02/2023</Text>
  //           </View>
  //           <View style={{width:"100%",height:40,backgroundColor:COLORS.white,flexDirection:"row",alignItems:"center",borderBottomWidth:0.5}}>
  //               <View style={{width:5,height:"100%",backgroundColor:"#196dc7"}} ></View>
  //               <Text style={{marginLeft:10,fontWeight:"bold",fontFamily:"Roboto"}}>Tiết 1 - 3</Text>
  //           </View>
  //           <View style={{width:"100%",minHeight:120,backgroundColor:COLORS.white,top:0.5,flexDirection:"row"}}>
  //               <View style={{height:"100%",width:"10%",alignItems:"center"}}>
  //                   <View style={{height:20,width:20,backgroundColor:COLORS.lichhoc,marginTop:10,borderWidth:0.8}}></View>
  //               </View>
  //               <View style={{height:"100%",width:"90%",padding:10}}>
  //                   <Text style={{fontFamily:"Roboto",fontWeight:"bold",fontSize:17,paddingBottom:20}} >DHKTPM15B:Lập trình WWW(Lý thuyết)</Text>
  //                   <Text style={{fontFamily:"Roboto",paddingBottom:10}} >Phòng:A3:02</Text>
  //                   <Text style={{fontFamily:"Roboto",paddingBottom:10}} >Giảng viên:Nguyễn Văn A </Text>
  //               </View>
  //           </View>
  //       </View>
  //   );
  // }
  return (
    <View style={styles.container}>
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
                <Text style={{fontWeight:"700",color:COLORS.white,fontFamily:"Roboto"}} >Lịch học - lịch thi</Text>
            </View>      
            <TouchableOpacity style={{marginLeft:"auto"}} onPress={showDatepicker}>
                <Icon name="calendar-today" color={COLORS.white} size={23} />
            </TouchableOpacity>
        </View>
      </View>
      {renderDateBar()}
      <DateView/>
      <Text>DateScreen</Text>
    </View>
  );
};
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
  containerheader: {
    flexDirection: "row",
    top: 90,
    with: "80%",
    height: "40%",
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  datebar:{
    backgroundColor:COLORS.white,
    height:"8%",
    alignItems:"center",
    padding:10,
    flexDirection:"row",
    justifyContent:"center"
  }
});

export default DateScreen;
