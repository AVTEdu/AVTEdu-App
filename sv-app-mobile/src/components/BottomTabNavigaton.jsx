import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/color';
import {View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor: COLORS.primary,
        headerShown:false
      }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Nhắc nhở"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Góp ý"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="textsms" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;