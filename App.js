import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image,Button, Dimensions, PermissionsAndroid,Permission , SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import OptionsScreen from './screens/OptionsScreen';
import ScreenOne from './screens/drawer/ScreenOne';
import ScreenTwo from './screens/drawer/ScreenTwo';
import ScreenThree from './screens/drawer/ScreenThree';
import Icon from 'react-native-vector-icons/Octicons';
import Colors from './constants/colors';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

// stack navigator initialized
const Stack= createStackNavigator();
// drawer navigator initialized
const Drawer= createDrawerNavigator()
// getting the dimensions of the screen
const { width, height } = Dimensions.get('window')

export default function App() {
  //const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS)
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // just to get idea of the height and width of the device 
  console.warn(height,width)
  // function to get the loaction
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('The request was denied');
      }else{
        try{
          alert(status)
          let location = await Location.getCurrentPositionAsync({});
          //alert("location permission Granted")
          // console.log(location)
          // do something with location
        }catch(e){
          alert('We could not find your position. Please make sure your location service provider is on');
          console.log('Error while trying to get location: ', e);
        }
      }
    })();
  });
  // creating the main stack and all the Header is designed here
  const createMainStack = ({navigation}) => 
  <Stack.Navigator 
  // screenOptions={{ headerStyle: { backgroundColor: Colours.primary } }}
  >
  {/* this is for the home screen and options is used here for designing the header bar */}
    <Stack.Screen name="App Name" component={HomeScreen}
      options={{
          headerTitle: ()=>(
            <View style={{alignSelf:"center"}}>
              <Image  style={{ width: 200, height: 50 }}   resizeMode='contain'
              source={{ uri: 'https://offsetnow.com/assets/Offset_Logo_2.png' }}
            />
            </View>
          ),

          headerLeft: () => (
            <View style={{paddingLeft:12}}>
              <Icon name='three-bars' size={40} color='#000' onPress={()=> navigation.openDrawer()}/>
            </View>
          ),
        }}
    />
    {/* another screen */}
    <Stack.Screen name="Options" component={OptionsScreen}/>
  </Stack.Navigator>

  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="App">
        <Drawer.Screen name="BROWSE PLEDGE" children={createMainStack}/>
        <Drawer.Screen name="Start A Pledge" component={ScreenOne} />
        <Drawer.Screen name="How It Works" component={ScreenTwo}/>
        <Drawer.Screen name="Contact" component={ScreenThree}/>
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}
