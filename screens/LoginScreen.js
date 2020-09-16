import React, { useState, useEffect, useRef } from "react";
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
  SafeAreaView,
} from "react-native";
import { Icon } from "native-base";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

import colors from "../constants/colors";
import { color } from "react-native-reanimated";
import { ScrollView } from "react-native-gesture-handler";
import { AuthContext } from "../components/Context";

export default function LoginScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [formEmailError, setFormEmailError] = useState(false);
  const [formPassError, setFormPassError] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const formRef = useRef(null);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const setEmail = (val) => {
    setLoginForm({
      ...loginForm,
      email: val,
    });
  };

  const setPassword = (val) => {
    setLoginForm({
      ...loginForm,
      password: val,
    });
  };

  const { signIn } = React.useContext(AuthContext);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.form}>
          <View
            style={[
              styles.emailInput,
              formEmailError ? { borderWidth: 1, borderColor: "red" } : null,
            ]}
          >
            <Text style={styles.EmailText}>Email</Text>
            <TextInput
              ref={formRef}
              textContentType={"emailAddress"}
              keyboardType={"email-address"}
              style={styles.passwordErrorText}
              placeholder="Your email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => {
                setFormEmailError(false);
                setEmail(val);
              }}
            />
            <Text></Text>
          </View>
          <View
            style={[
              styles.passwordInput,
              formPassError ? { borderWidth: 1, borderColor: "red" } : null,
            ]}
          >
            <Text style={styles.passwordText}>Password</Text>
            <View style={styles.passContent}>
              <View style={{ width: "70%" }}>
                <TextInput
                  ref={formRef}
                  style={{ marginTop: 20 }}
                  placeholder="Password"
                  style={styles.textInput}
                  secureTextEntry={hidePass}
                  onChangeText={(val) => {
                    setFormPassError(false);
                    setPassword(val);
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setHidePass(!hidePass);
                }}
              >
                <Text style={styles.hideShow}>
                  {hidePass ? "Show" : "Hide"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text></Text>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.6}>
              <View>
                <Text
                  style={[styles.title, { marginTop: 50, color: "#21a984" }]}
                >
                  Forgot password ?
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signIn}>
            <Text style={[styles.title, { marginTop: 30 }]}>
              Keep me signed in
            </Text>
            <Switch
              style={[styles.title, { marginTop: 32, paddingLeft: 10 }]}
              trackColor={{ false: colors.secondary, true: colors.primary }}
              thumbColor="#fff"
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                if (loginForm.email != "" && loginForm.password != "") {
                  signIn(loginForm);
                } else {
                  setFormEmailError(true);
                  setFormPassError(true);
                }
              }}
            >
              <View style={styles.button}>
                <Text
                  style={styles.buttonText}
                  // onPress = {() => login(loginForm)}
                >
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.signIn}>
            <Text style={{ fontFamily: "lato", fontSize: 20 }}>
              Haven't signed up yet?
            </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text
                style={styles.createText}
                onPress={() => {
                  navigation.navigate("signup");
                }}
              >
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.extraSignIn}>
          <TouchableOpacity activeOpacity={0.6} style={styles.googleSignIn}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Icon
                type="FontAwesome"
                name="google"
                color="white"
                style={{ fontSize: 20, color: "white", paddingRight: 10 }}
              ></Icon>
              <Text
                style={{ color: "white", paddingRight: 10 }}
                onPress={() => {}}
              >
                Login with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.facebookSignIn}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Icon
                type="FontAwesome"
                name="facebook-f"
                color="white"
                style={{ fontSize: 20, color: "white", paddingRight: 10 }}
              ></Icon>
              <Text
                style={{ color: "white", paddingLeft: 10 }}
                onPress={() => {}}
              >
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text></Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("7%"),
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
    marginTop: hp("2%"),
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  button: {
    borderRadius: 40,
    margin: 20,
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

  passwordErrorText: {
    fontSize: 15,
    borderColor: "red",
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 5,
  },
  passContentError: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "red",
  },
  passContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hideShow: {
    color: colors.primary,
    fontFamily: "lato",
    fontSize: 17,
    paddingRight: 10,
  },

  signIn: {
    flexDirection: "row",
  },
  extraSignIn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  createText: {
    fontFamily: "lato",
    fontSize: 17,
    paddingLeft: 10,
    color: colors.primary,
  },
  facebookSignIn: {
    backgroundColor: "#3b5998",
    padding: 13,
    fontSize: 40,
  },
  googleSignIn: {
    backgroundColor: "#de5246",
    padding: 13,
    fontSize: 20,
  },
});
