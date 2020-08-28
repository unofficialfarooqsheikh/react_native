import React, { useState, useEffect } from "react";
import AppNavigator from "./navigators/AppNavigator";
import * as Location from "expo-location";

export default function App() {
  //const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // function to get the loaction
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        alert("The request was denied");
      } else {
        try {
          alert(status);
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

  return <AppNavigator />;
}
