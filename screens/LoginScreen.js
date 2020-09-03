import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Switch
} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

import colors from "../constants/colors";
import { color } from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ width: 200, height: 80, alignSelf: "center" }}
          resizeMode="contain"
          source={{
            uri: "https://offsetnow.com/assets/Offset_Logo_2.png",
          }}
        />
      </View>
      <Text style = {styles.title}>Welcome!</Text>
      <View style = {styles.form}>
        <View style = { styles.emailInput}>
        <Text style = {styles.EmailText}>Email</Text>
          <TextInput style = {styles.passwordText}
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
          />
        <Text></Text>
        </View>
        <View style = {styles.passwordInput}>
        <Text style = {styles.passwordText}>Password</Text>
          <TextInput
            style = {{marginTop: 20}} 
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Text></Text>
        </View>
        <View>
          <TouchableOpacity activeOpacity={0.6}>
            <View>
              <Text style = {[styles.title, {marginTop: 50, color: '#21a984'}]}>Forgot password ?</Text>
            </View>
          </TouchableOpacity>
        </View>
          <View style ={styles. signIn}>
            <Text style = {[styles.title, {marginTop: 30}]}>Keep me signed in</Text>
            <Switch
              style = {[styles.title, {marginTop: 32, paddingLeft: 10}]}
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor= '#fff'
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View>
          <TouchableOpacity activeOpacity={0.6}>
            <View style = {styles.button}>
              <Text style = { styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style = {styles.signIn}>
          <Text style = {{    fontFamily: 'lato',}}>Haven't signed up yet?</Text>
          <TouchableOpacity activeOpacity={0.6}>
              <Text style = {styles.createText}
                onPress = {() => {navigation.navigate('signup')}}
              >Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.background
  },

  title: {
    textAlign: "center",
    fontSize: 20,
  },

  form: {
    alignItems: "center"
  },

  emailInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp('80%'),
    marginTop: hp('2%'),
    borderStyle:'solid',
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  button: {
    borderRadius: 50,
    margin: 30,
    backgroundColor: '#75b79e',
    width: wp('80%')
  },

  buttonText: {
    fontSize: 25,
    paddingVertical: 20,
    alignItems: "center",
    color: "#fff",
    textAlign: 'center'
  },

  EmailText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5
  },

  passwordInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp('80%'),
    borderStyle:'solid',
    borderWidth: 0.5,
    borderColor: "#eee",
    borderTopColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  passwordText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5
  },

  signIn: {
    flexDirection: 'row',
  },

  createText: {
    fontFamily: 'lato',
    fontSize: 20,
    paddingLeft: 10,
    color: colors.primary
  }

});
