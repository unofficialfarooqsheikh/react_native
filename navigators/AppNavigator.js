import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  PermissionsAndroid,
  Permission,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OptionsScreen from "../screens/OptionsScreen";
import ScreenOne from "../screens/drawer/ScreenOne";
import ScreenTwo from "../screens/drawer/ScreenTwo";
import ScreenThree from "../screens/drawer/ScreenThree";
import Icon from "react-native-vector-icons/Octicons";
import Colors from "../constants/colors";
import Constants from "expo-constants";
// getting the dimensions of the screen
const { width, height } = Dimensions.get("window");
// just to get idea of the height and width of the device
console.log(height, width);
export default function AppNavigator() {
    
    //      *******************Navigation Mapping******************************
    //      BottomNavigator -> screen A,B
    //          screen A -> DrawerNavigator 
    //          DrawerNavigator -> screen 1,2,3,4
    //              screen1 -> StackNavigator
    //              screen2 -> ?
    //              screen3 -> ?
    //              screen4 -> ?
    //          screen B -> ?
    //      BottomNavigator -> screen B 
    //      
    //      ********************************************************************
    
    
    // stack navigator initialized
    const HomeStack = createStackNavigator();
    // drawer navigator initialized
    const Drawer = createDrawerNavigator();
    // tabs navigator initialized
    const BottomTab = createBottomTabNavigator();
    

  // Creating the Home tab where all the tabs are present
  const BottomTabOneContainer = ({ navigation }) => {
    return (
      <Drawer.Navigator initialRouteName="BROWSE PLEDGE">
        <Drawer.Screen name="BROWSE PLEDGE" children={createMainStack} />
        <Drawer.Screen name="Start A Pledge" component={ScreenOne} />
        <Drawer.Screen name="How It Works" component={ScreenTwo} />
        <Drawer.Screen name="Contact" component={ScreenThree} />
      </Drawer.Navigator>
    );
  };

  // creating the main stack and all the Header is designed here
  const createMainStack = ({ navigation }) => {
    return (
      <HomeStack.Navigator
        initialRouteName="App Name"
      >
        {/* this is for the home screen and options is used here for designing the header bar */}
        <HomeStack.Screen
          name="App Name"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={{ alignSelf: "center" }}>
                <Image
                  style={{ width: 200, height: 50 }}
                  resizeMode="contain"
                  source={{
                    uri: "https://offsetnow.com/assets/Offset_Logo_2.png",
                  }}
                />
              </View>
            ),

            headerLeft: () => (
              <View style={{ paddingLeft: 12 }}>
                <Icon
                  name="three-bars"
                  size={40}
                  color="#000"
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
          }}
        />
        {/* another screen */}
        <HomeStack.Screen name="Options" component={OptionsScreen} />
      </HomeStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" children={BottomTabOneContainer} />
        <BottomTab.Screen name="Login" component={LoginScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
