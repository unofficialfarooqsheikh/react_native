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
import { AuthContext } from "../components/Context";
import axios from 'axios';
export default function AppNavigator() {
  const userSettings=[];
  const [isLoading, setIsloading] = useState(true);
  const [userToken, SetUserToken] = useState(null);
  const [setUserDetails ,SetUserDetails] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "REGISTER", token: "adf" });
    });
  });

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

 

 

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
        break;
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        console.log(userToken +  "   UserToken Genreated")
        break;
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
        break;
      case "SIGNUP":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
        break;
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );
  const authContext = React.useMemo(() => ({
    signIn: (userData) => {
      // SetUserToken('ISValid');
      // setIsloading(false);
      console.log(userData.email);
      
        const url ="https://feapi.offsetnow.com/api/admin/SignIn?emailAddress=" +userData.email +"&password=" +userData.password;
        // axios.get(url)
        //   .then((response) => {
        //     const temp = response.data;
        //     console.log("login response", temp);
        //     SetUserToken("iih");
        //   })
        //   .catch((error) => {
        //     alert(error);
        //   });
         fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.Message=="Success"){
          console.log(responseJson.objresult);
          SetUserToken(responseJson.objresult);
          SetUserDetails=responseJson.objresult;
          dispatch({ type: "LOGIN", id: userData.email, token: userToken });
          }
        })
        .catch((error) => {
          console.error(error);
        });
          
     

      // if (userData.email == "user" && userData.password == "pass") {
      //   SetUserToken("iih");
      //   alert("tokenset");
      //   console.log("################################s" + userData.email);
     
      // }
      
    },
    SingOut: () => {
      SetUserToken(null);
      setIsloading(false);
    },
    SignUp: (data) => {
      // SetUserToken("ISValid");
      // setIsloading(false);
      console.log("signupHit")
      console.log(data)
      const url = 'https://feapi.offsetnow.com/api/admin/SignUp';
      axios.post(url,data).then((response) => {
          const temp = response.data;
          console.log("login response",temp)
          alert("signup Success");
        })
        .catch((error) => {
          alert(error);
        });
    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: data
    // };
    // fetch(url, requestOptions)
    //     .then(async response => {
    //         const data = await response.json();

    //         // check for error response
    //         if (!response.ok) {
    //             // get error message from body or default to response status
    //             const error = (data && data.message) || response.status;
    //             return Promise.reject(error);
    //         }

    //         this.setState({ postId: data.id })
    //     })
    //     .catch(error => {
    //         this.setState({ errorMessage: error.toString() });
    //         console.error('There was an error!', error);
    //     });
    },
  }));

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
        drawerPosition={"left"}
      >
        <Drawer.Screen name="Homescreen" children={createMainStack} />
        <Drawer.Screen name="Profile" children={ScreenOne} />
        <Drawer.Screen name="Pledges" component={ScreenTwo} />
        <Drawer.Screen name="PolicyScreen" component={ScreenThree} />
      </Drawer.Navigator>
    );
  };
  //creating the login stack
  const CreateLoginStack = (navigation) => {
    return (
      <LoginStack.Navigator >
        <LoginStack.Screen name="login" component={LoginScreen} options={{headerShown: false}}/>
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
          children={CreateLoginStack}
          options={{ tabBarLabel: "Login" }}
        />
      </BottomTab.Navigator>
    );
  };

  return (
    <AuthContext.Provider value={userToken}>
      {userToken != null ? (
         
        <NavigationContainer>
          <CreateBottomTab />
        </NavigationContainer>
       
      ) : (
        <NavigationContainer>
          <CreateLoginStack />
        </NavigationContainer>
      )}
      {/* <NavigationContainer>
      <CreateBottomTab />
    </NavigationContainer> */}
    </AuthContext.Provider>
  );
}
