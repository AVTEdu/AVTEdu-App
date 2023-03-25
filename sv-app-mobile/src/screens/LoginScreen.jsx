import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";

import loginImage from "../assets/images/login.jpg";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import {useDispatch} from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { signin } from "../api/userSlice";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [enteredMa, setEnteredMa] = useState("");
  const [enteredPass, setEnteredPass] = useState("");
  const { height } = useWindowDimensions();

  const onLoginInHandle = async () =>{
    if (enteredPass === "" || enteredMa === "") {
      Alert.alert("Chưa điền đầy đủ thông tin!");
    } else {
      try {
        const action = signin({
          ma: enteredMa,
          password: enteredPass,
        });
        const resultAction = await dispatch(action);
        unwrapResult(resultAction);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
        Alert.alert("Mã sinh viên hoặc mật khẩu không chính xác");
      }
    }
  }
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={loginImage}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Mã sinh viên"
        value={enteredMa}
        setValue={setEnteredMa}
      />
      <CustomInput
        placeholder="Password"
        value={enteredPass}
        setValue={setEnteredPass}
        secureTextEntry={true}
      />
      <CustomButton label="Đăng nhập" onPress={onLoginInHandle}/>
      <CustomButton label="Quên mật khẩu" onPress={onLoginInHandle} type='TERTIARY'/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  logo: {
    with: "80%",
    maxWidth: 400,
    maxHeight: 400,
  },
});

export default LoginScreen;
