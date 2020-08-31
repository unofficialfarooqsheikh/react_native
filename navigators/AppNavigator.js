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
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  DrawerContent from "../components/DrawerContent"

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OptionsScreen from "../screens/OptionsScreen";
import ScreenOne from "../screens/drawer/ScreenOne";
import ScreenTwo from "../screens/drawer/ScreenTwo";
import ScreenThree from "../screens/drawer/ScreenThree";
import Icon from "react-native-vector-icons/Octicons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import Constants from "expo-constants";
import SignUpScreen from "../screens/SignUpScreen";
import colors from "../constants/colors";
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
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props=><DrawerContent {...props}/>}
        drawerType={"back"}
        drawerPosition={"right"}
      >
        <Drawer.Screen name="Home" children={createMainStack} />
        <Drawer.Screen name="Pledges" component={ScreenOne} />
        <Drawer.Screen name="PolicyScreen" component={ScreenTwo} />
        {/* <Drawer.Screen name="How It Works" component={ScreenTwo} /> */}
        {/* <Drawer.Screen name="Contact" component={ScreenThree} /> */}
      </Drawer.Navigator>
    );
  };

  // creating the main stack and all the Header is designed here
  const createMainStack = ({ navigation }) => {
    return (
      <HomeStack.Navigator initialRouteName="App Name">
        {/* this is for the home screen and options is used here for designing the header bar */}
        <HomeStack.Screen
          name="App Name"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={{ alignSelf: "center"}}>
                <Image
                  style={{ width: 200, height: 50 }}
                  resizeMode="contain"
                  source={{
                    uri: "https://offsetnow.com/assets/Offset_Logo_2.png",
                  }}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ paddingRight: 12 }}>
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
        <HomeStack.Screen name="SignUp" component={SignUpScreen} />

      </HomeStack.Navigator>
    );
  };

  const CreateBottomTab = ({ navigation }) => {
    return (
    <BottomTab.Navigator
    tabBarOptions={{
      inactiveTintColor: 'white',
      activeTintColor: 'black',
      style: { backgroundColor: colors.primary}

    }}
    screenOptions={(route) => ({
      tabBarIcon: (props) => {
        console.log(route.route);
        let iconName;
        if (route.route.name == "Home") {
          iconName = "home";
        }
        if (route.route.name == "Login") {
          iconName = "user";
        }
        if (route.route.name == "Start") {
          iconName = "add-to-list";
        }
        if (route.route.name == "Browse") {
          iconName = "folder";
        }
        if (route.route.name == "Notification") {
          iconName = "notification";
        }
        return (
          <Entypo name={iconName} size={props.size} color= 'white' />
        );
      },
    
      })}
    >
      <BottomTab.Screen
        name="Home"
        children={BottomTabOneContainer}
        options={{ tabBarLabel: "Home" }}
      />
      <BottomTab.Screen
        name="Start"
        children={OptionsScreen}
        options={{ tabBarLabel: "Start a pledge" }}
      />
      <BottomTab.Screen
        name="Browse"
        children={OptionsScreen}
        options={{ tabBarLabel: "Browse a Pledge" }}
      />
      <BottomTab.Screen
        name="Notification"
        children={OptionsScreen}
        options={{ tabBarLabel: "Notifications" }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{ tabBarLabel: "Login" }}
      />
    </BottomTab.Navigator>);
  };

  return (
    <NavigationContainer >
      <CreateBottomTab />
    </NavigationContainer>
  );
}
