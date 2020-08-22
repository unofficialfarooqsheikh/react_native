import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button, PermissionsAndroid,Permission } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import ScreenOne from './screens/drawer/ScreenOne';
import ScreenTwo from './screens/drawer/ScreenTwo';
import ScreenThree from './screens/drawer/ScreenThree';
import Constants from 'expo-constants';
import * as Location from 'expo-location';


const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();


export default function App() {
  //const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location)
    })();
  });

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  const createMainStack = () => 
  <Stack.Navigator>
    <Stack.Screen name="App Name" component={HomeScreen} options={{
       
          headerRight: () => (
            <Button
              onPress={() =>  this.navigation.openDrawer()}
              title="Info"
              color="#fff"
            />
          ),
        }}/>
       
    <Stack.Screen name="Options" component={OptionsScreen}/>
  </Stack.Navigator>

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="App">
        <Drawer.Screen name="Home" children={createMainStack}/>
        <Drawer.Screen name="Screen One" component={ScreenOne}/>
        <Drawer.Screen name="Screen Two" component={ScreenTwo}/>
        <Drawer.Screen name="Screen Three" component={ScreenThree}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
