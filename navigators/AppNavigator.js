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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerContent from "../components/DrawerContent";

import HomeScreen from "../screens/HomeScreen";
import BrowseAPledge from "../screens/BrowseAPledge";
import LoginScreen from "../screens/LoginScreen";
import OptionsScreen from "../screens/OptionsScreen";
import StartAPledge from "../screens/StartAPledge";
import ScreenOne from "../screens/drawer/ScreenOne";
import ScreenTwo from "../screens/drawer/ScreenTwo";
import ScreenThree from "../screens/drawer/ScreenThree";
import Icon from "react-native-vector-icons/Octicons";
import { FontAwesome } from "@expo/vector-icons";
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
  const LoginStack = createStackNavigator();
  // drawer navigator initialized
  const Drawer = createDrawerNavigator();
  // tabs navigator initialized
  const BottomTab = createBottomTabNavigator();

  // Creating the Home tab where all the tabs are present
  const BottomTabOneContainer = ({ navigation }) => {
    return (
      <Drawer.Navigator
        initialRouteName="Homescreen"
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerPosition={"right"}
      >
        <Drawer.Screen name="Homescreen" children={createMainStack} />
        <Drawer.Screen name="Profile" children={ScreenOne} />
        <Drawer.Screen name="Pledges" component={ScreenTwo} />
        <Drawer.Screen name="PolicyScreen" component={ScreenThree} />
      </Drawer.Navigator>
    );
  };
  //creating the login stack
  const loginStack = () => {
    return (
      <LoginStack.Navigator>
        <LoginStack.Screen name="login" component={LoginScreen} />
        <LoginStack.Screen name="signup" component={SignUpScreen} />
      </LoginStack.Navigator>
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
            headerRight: () => (
              <View style={{ paddingRight: 12 }}>
                <Icon
                  name="three-bars"
                  size={25}
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

  const CreateBottomTab = ({ navigation }) => {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          inactiveTintColor: "white",
          activeTintColor: "black",
          style: { backgroundColor: colors.primary },
        }}
        screenOptions={(route) => ({
          tabBarIcon: (props) => {
            let iconName;
            if (route.route.name == "Home") {
              iconName = "home";
            }
            if (route.route.name == "Login") {
              iconName = "user-circle-o";
            }
            if (route.route.name == "Start") {
              iconName = "plus";
            }
            if (route.route.name == "Browse") {
              iconName = "folder";
            }
            if (route.route.name == "Notification") {
              iconName = "bell";
            }
            return (
              <FontAwesome name={iconName} size={props.size} color="white" />
            );
          },
        })}
      >
        <BottomTab.Screen
          // listeners={(props) => {
          //   console.log("***********************");
          //   console.log(props);
          // }}
          name="Home"
          children={BottomTabOneContainer}
          options={{ tabBarLabel: "Home" }}
          onPress={() => {
            console.log(navigation);
          }}
        />
        <BottomTab.Screen
          name="Start"
          component={StartAPledge}
          options={{ tabBarLabel: "Start a pledge" }}
        />
        <BottomTab.Screen
          name="Browse"
          component={BrowseAPledge}
          options={{ tabBarLabel: "Browse a Pledge" }}
        />
        <BottomTab.Screen
          name="Notification"
          component={OptionsScreen}
          options={{ tabBarLabel: "Notifications" }}
        />
        <BottomTab.Screen
          name="Login"
          children={loginStack}
          options={{ tabBarLabel: "Login" }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <CreateBottomTab />
    </NavigationContainer>
  );
}
