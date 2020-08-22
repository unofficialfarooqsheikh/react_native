import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import ScreenOne from './screens/drawer/ScreenOne';
import ScreenTwo from './screens/drawer/ScreenTwo';
import ScreenThree from './screens/drawer/ScreenThree';

const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();

export default function App() {

  const createMainStack = () => 
  <Stack.Navigator>
    <Stack.Screen name="App Name" component={HomeScreen}/>
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
