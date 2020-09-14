import React, { useState } from "react";
import axios from "axios";

import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Switch,
  ScrollView,
} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

import colors from "../constants/colors";
import { AuthContext } from "../components/Context";
export default function SignUpScreen({ navigation }) {
  var RandomNumber = Math.floor(100000 + Math.random() * 900000) + 1;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [signUpForm, setsignUpForm] = useState({
    EmailAdress: "",
    MobileNumber: "",
    Password: "",
    ReturnLink: "http://offsetnowapi.fadelsoft.com/#/Home?VerifyId=",
    RandomLink: RandomNumber,
    FirstName: "",
    LastName: "",
  });
  const setFirstName = (val) => {
    setsignUpForm({
      ...signUpForm,
      FirstName: val,
    });
  };
  const setLastName = (val) => {
    setsignUpForm({
      ...signUpForm,
      LastName: val,
    });
  };
  const setEmail = (val) => {
    setsignUpForm({
      ...signUpForm,
      EmailAdress: val,
    });
  };
  const setNumber = (val) => {
    setsignUpForm({
      ...signUpForm,
      MobileNumber: val,
    });
  };
  const setPassword = (val) => {
    setsignUpForm({
      ...signUpForm,
      Password: val,
    });
  };

  const signUp = (data) => {};

  const { SignUp } = React.useContext(AuthContext);
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
      <Text style={styles.title}>Welcome!</Text>
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.nameInput}>
            <Text style={styles.nameText}>FirstName</Text>
            <TextInput
              style={styles.passwordText}
              placeholder="FirstName"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setFirstName(val)}
            />
            <Text></Text>
          </View>
          <View style={styles.LastnameInput}>
            <Text style={styles.nameText}>LastName</Text>
            <TextInput
              style={styles.passwordText}
              placeholder="LastName"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setLastName(val)}
            />
            <Text></Text>
          </View>
          <View style={styles.emailInput}>
            <Text style={styles.EmailText}>Email</Text>
            <TextInput
              style={styles.passwordText}
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setEmail(val)}
            />
            <Text></Text>
          </View>
          <View style={styles.mobileInput}>
            <Text style={styles.EmailText}>Mobile number</Text>
            <TextInput
              style={styles.passwordText}
              placeholder="Mobile number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setNumber(val)}
            />
            <Text></Text>
          </View>
          <View style={styles.mobileInput}>
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
              style={{ marginTop: 20 }}
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(val) => setPassword(val)}
            />
            <Text></Text>
          </View>
          <View style={styles.passwordInput}>
            <Text style={styles.passwordText}>Confirm Password</Text>
            <TextInput
              style={{ marginTop: 20 }}
              placeholder="Password"
              style={styles.textInput}
              secureTextEntry={true}
            />
            <Text></Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => SignUp(signUpForm)}
            >
              <View style={styles.button}>
                <Text
                  style={styles.buttonText}
                  // onPress = {() => signUp(signUpForm)}
                >
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    alignItems: "center",
  },

  emailInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp("80%"),
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopColor: "#fff",
  },
  nameInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp("80%"),
    marginTop: hp("2%"),
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  LastnameInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp("80%"),
    marginTop: hp("2%"),
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },

  mobileInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp("80%"),
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopColor: "#fff",
  },

  nameText: {
    fontSize: 15,
    marginTop: 10,
    paddingVertical: 5,
  },

  button: {
    borderRadius: 50,
    margin: 30,
    backgroundColor: "#75b79e",
    width: wp("80%"),
  },

  buttonText: {
    fontSize: 25,
    paddingVertical: 20,
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  },

  EmailText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
  },

  passwordInput: {
    paddingLeft: 20,
    backgroundColor: "#fff",
    width: wp("80%"),
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#eee",
    borderTopColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  passwordText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
  },

  signIn: {
    flexDirection: "row",
  },

  createText: {
    fontFamily: "lato",
    fontSize: 20,
    paddingLeft: 10,
    color: colors.primary,
  },
});
