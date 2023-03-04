import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

const Tab= createBottomTabNavigator();

const BottomTabNavigatior = () =>{
    return(
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
            

        </Tab.Navigator>
    )
}