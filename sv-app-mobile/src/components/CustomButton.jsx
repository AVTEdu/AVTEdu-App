import {Text, TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

export default function CustomButton({onPress,label,type= 'PRIMARY'}) {
  return (
    <TouchableOpacity style={[styles.container,styles[`container_${type}`]]}
      onPress={onPress}
      >
      <Text style={[styles.text,styles[`text_${type}`]]}>{label}</Text>  
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    
    
    width:'100%',

    padding:15,
    marginVertical:5,

    alignItems:'center',
    borderRadius:5,
  },
  container_PRIMARY:{
    backgroundColor:'#3B71F3',
  },
  container_TERTIARY:{

  }
  ,
  text:{
    fontWeight:'bold',
    color:"white"
  },
  text_TERTIARY:{
    color:'gray'
  }
})