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
} from "react-native";

import loginImage from "../assets/images/login.jpg";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

const LoginScreen = ({ navigation }) => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const { height } = useWindowDimensions();

  const onLoginInHandle = () =>{
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={loginImage}
        style={[styles.logo, { height: height * 0.5 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
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
