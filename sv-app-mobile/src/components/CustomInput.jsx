import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import IconAntDesign from "react-native-vector-icons/AntDesign";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    width: "100%",
    height: 50,

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 3,

    paddingHorizontal: 10,
    marginVertical: 5,
    justifyContent: "center",
  },
  input: {},
});

export default CustomInput;
