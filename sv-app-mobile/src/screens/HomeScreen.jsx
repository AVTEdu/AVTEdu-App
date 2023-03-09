import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/color';
import CustomButtonHome from '../components/CustomButtonHome';
const HomeScreen = ({ navigation }) => {
  function renderHeader() {
    return (
      <View style={{ width: "100%", height: 190, ...styles.shadow, backgroundColor: "#66B2FF", borderRadius: 50, top: -50 }}>
        <View style={{ top: 90, left: 10, width: "100%", flexDirection: 'row' }}>
          <Text style={{ color: COLORS.white }} >Xin chào,Nguyễn Việt Anh</Text>
          <View style={{ width: "47%" }}></View>
          <TouchableOpacity>
            <Icon name='notifications-none' color={COLORS.white} size={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.containerheader}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '50%', borderRightWidth: 0.3 }}>
            <Icon name='event-available' color={COLORS.blue} size={28} />
            <Text style={{ marginLeft: 5 }}>Xem lịch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '50%' }}>
            <Icon name='featured-play-list' color={COLORS.blue} size={28} />
            <Text style={{ marginLeft: 5 }} >Xem điểm</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function custombutton() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', width: "20%", height: 90 }}>
        <TouchableOpacity style={{ width: "70%", height: "60%", backgroundColor: "red", justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
          <Icon name='notifications' color={COLORS.white} size={35} />
        </TouchableOpacity>
        <Text>Nhắc nhở</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      <View style={{ top: -5, marginHorizontal: 10 }}>
        <Text>ALo</Text>
        {custombutton()}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0
    }
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
  }
})

export default HomeScreen