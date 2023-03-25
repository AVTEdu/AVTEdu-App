import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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


const Stack = createNativeStackNavigator();

export default function App() {

  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if(!IsReady){
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="Date" component={DateScreen} />
        <Stack.Screen name="Score" component={SocreScreen} />
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
