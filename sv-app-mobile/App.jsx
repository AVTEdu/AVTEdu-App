import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BottomNavigator from './src/components/BottomTabNavigaton';
import DateScreen from './src/screens/DateScreen';
import { useState } from 'react';
import SocreScreen from './src/screens/SocreScreen';
import { Provider } from "react-redux";
import store from './src/api/store';
import ModuleRegistrationScreen from './src/screens/ModuleRegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from './src/api/axiosClient';
import ClassRegistion from './src/screens/ClassRegistion';
import ChiTietLopHocPhanScreen from './src/screens/ChiTietLopHocPhanScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  const Check_Login = async () => {
      try {
        const value = await AsyncStorage.getItem('accessToken');
        const value1 = await AsyncStorage.getItem('accessToken');
        if (value !== null && value1 != null) {
          const url = "/userRequest/getThongTinSinhVien";
          const getUser = await axiosClient.get(url, {headers:{ 'authorization': `Bearer ${value}` }});
          if(!getUser){
            const newurl = "/auth/refreshToken";
            const getToken = await axiosClient.post(newurl,{refreshToken:value1});
            console.log(getToken)
            AsyncStorage.setItem("accessToken", getToken);
            const url = "/userRequest/getThongTinSinhVien";
            const getUser = await axiosClient.get(url, {headers:{ 'authorization': `Bearer ${getToken}` }});
            console.log(getUser)
          }
        }
      } catch (error) {
        console.log(error)
      }
    
  }

  if(!IsReady){
  {Check_Login()}
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Date" component={DateScreen} />
        <Stack.Screen name="Score" component={SocreScreen} />
        <Stack.Screen name="ModuleRegistration" component={ModuleRegistrationScreen} />
        <Stack.Screen name="ClassRegistion" component={ClassRegistion} />
        <Stack.Screen name="ChiTietLopHocPhan" component={ChiTietLopHocPhanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
  }

  return <View style={styles.container}> <Text>Hello Wolrd</Text> </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
