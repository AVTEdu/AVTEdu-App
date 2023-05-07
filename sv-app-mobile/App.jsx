import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import BottomNavigator from './src/components/BottomTabNavigaton';
import DateScreen from './src/screens/DateScreen';
import { useState } from 'react';
import SocreScreen from './src/screens/SocreScreen';
import { Provider, useDispatch } from "react-redux";
import store from './src/api/store';
import ModuleRegistrationScreen from './src/screens/ModuleRegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosClient from './src/api/axiosClient';
import ClassRegistion from './src/screens/ClassRegistion';
import ChiTietLopHocPhanScreen from './src/screens/ChiTietLopHocPhanScreen';
import { useEffect } from 'react';


const Stack = createNativeStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);

  const checkAccessToken = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken');
      const value1 = await AsyncStorage.getItem('accessToken');
      

      if (value !== null && value1 != null) {
        const url = '/userRequest/getThongTinSinhVien';
        const getUser = await axiosClient.get(url, {
          headers: { authorization: `Bearer ${value}` },
        });
        
        if (!getUser.status == 201) {
          const newUrl = '/auth/refreshToken';
          const getToken = await axiosClient.post(newUrl, { refreshToken: value1 });
          AsyncStorage.setItem('accessToken', getToken);
          const url = '/userRequest/getThongTinSinhVien';
          const getUser = await axiosClient.get(url, {
            headers: { authorization: `Bearer ${getToken}` },
          });
          setSignedIn(true);
        }
        setSignedIn(true);
      }
    } catch (error) {
      console.log(error);
      setSignedIn(false);
    }
  };

  const checkServerConnection = async () => {
    try {
      const response = await fetch('https://api.avtedu.cloud/hello');
      if (response.status === 200) {
        console.log('Server is online');
        setIsReady(true);
      } else {
        console.log('Server is offline');
        setIsReady(false);
      }
    } catch (error) {
      console.log('Error checking server connection:', error);
      setIsReady(false);
    }
  }
  

  useEffect(() => {
    checkServerConnection();
    checkAccessToken();
    console.log(isSignedIn)
  },[]);

  if (!isReady) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store} >
      <NavigationContainer >
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={BottomNavigator} />
          <Stack.Screen name="Date" component={DateScreen} />
          <Stack.Screen name="Score" component={SocreScreen} />
          <Stack.Screen
            name="ModuleRegistration"
            component={ModuleRegistrationScreen}
          />
          <Stack.Screen name="ClassRegistion" component={ClassRegistion} />
          <Stack.Screen
            name="ChiTietLopHocPhan"
            component={ChiTietLopHocPhanScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
