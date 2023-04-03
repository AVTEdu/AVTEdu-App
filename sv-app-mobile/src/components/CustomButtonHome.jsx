import {Text, TouchableOpacity,StyleSheet,View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/color';


export default function CustomButtonHome({onPress,Bgcolor,icon,text}) {
    return(
        <TouchableOpacity style={{justifyContent:'center',alignItems:'center',width:"25%",height:110}}>
          <TouchableOpacity onPress={onPress} style={{width:"60%",height:"50%",backgroundColor:`${Bgcolor}`,justifyContent:'center',alignItems:'center',borderRadius:20}}>
              <Icon name={icon} color={COLORS.white} size={35}/>
          </TouchableOpacity>
          <Text style={{textAlign:'center',minHeight:38,paddingTop:5}} >{text}</Text>
        </TouchableOpacity>
    )
}
