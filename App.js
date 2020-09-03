import React, { useState, useEffect } from "react";
import { BackHandler, Alert } from "react-native";

import AppNavigator from "./navigators/AppNavigator";
import * as Location from "expo-location";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    'dosis': require("./assets/fonts/Dosis-VariableFont_wght.ttf"),
    'lato': require("./assets/fonts/Lato-Regular.ttf"),
    'source-sans-pro': require("./assets/fonts/SourceSansPro-Regular.ttf"),
  });
};

export default function App() {
  //const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("The request was denied");
      } else {
        try {
          // alert(status);
          let location = await Location.getCurrentPositionAsync({});
          //alert("location permission Granted")
          // console.log(location)
          // do something with location
        } catch (e) {
          alert(
            "We could not find your position. Please make sure your location service provider is on"
          );
          console.log("Error while trying to get location: ", e);
        }
      }
    })();
  });

  if (!loaded) {
    console.log("LOADED",loaded)
    console.log("FETCH FONTS",fetchFonts)
    return <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setLoaded(true);
        }}
        onError={(err)=>{console.log(err)}}
      />
  }
  // function to get the loaction
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction()
  //   );

  //   return () => backHandler.remove();
  // }, []);

  //Load fonts before showing the content here

  

  

  return <AppNavigator />;
}
