import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import COLORS from '../consts/color';
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const SocreScreen = ({navigation}) => {
    const BackHandler= () =>{
        navigation.navigate("Home");
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
              style={{flex:1, top:60, width: "100%", flexDirection: "row",paddingHorizontal:15}}
            >
                <View  style={{flexDirection: "row"}}>
                    <TouchableOpacity onPress={BackHandler}>
                        <Icon name="arrow-back-ios" color={COLORS.white} size={23} />
                    </TouchableOpacity>
                    <Text style={{fontWeight:"700",color:COLORS.white,fontFamily:"Roboto"}} >Kết quả học tập</Text>
                </View>                     
            </View>
            <TouchableOpacity >
                <Text></Text>
            </TouchableOpacity>
          </View>
        );
      }
  return (
    <View>
      {renderHeader()}
      <Text>SocreScreen</Text>
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