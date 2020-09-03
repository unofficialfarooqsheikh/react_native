import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

import colors from "../constants/colors";
import { color } from "react-native-reanimated";

export default function LoginScreen({ navigation }) {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 200, height: 80 }}
          resizeMode="contain"
          source={{
            uri: "https://offsetnow.com/assets/Offset_Logo_2.png",
          }}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Email</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>
        <View style={[styles.signIn, { justifyContent: "space-between" }]}>
          <TouchableOpacity activeOpacity={0.6} >
            <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}>
            <View>
              <Text style={styles.forgotPasswordText}>Forgot password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.signIn}>
          <View>
            <Text>New to Offsetnow?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6}>
            <View>
              <Text style={styles.signUpTest}
                onPress = {() => {navigation.navigate('signup')}}
              >Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#21a984",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignSelf: "center",
    paddingTop: 20,
  },
  footer: {
    marginTop: 5,
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 12,
  },

  textFooter: {
    paddingLeft: 6,
    color: "#05375a",
    fontSize: 15,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#21a984",
    paddingBottom: 5,
  },

  button: {
    backgroundColor: "#21a984",
    width: 120,
  },

  buttonText: {
    paddingVertical: 10,
    alignItems: "center",
    color: "#fff",
    textAlign: 'center'
  },
  forgotPassword: {
    flex: 1,
    alignSelf: "flex-end",
    textAlign: "justify",
  },

  forgotPasswordText: {
    marginTop: 10,
    textAlign: "right",
    color: "#21a984",
  },

  signIn: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  signUpTest: {
    color: "#21a984",
    paddingLeft: 10,
  },
});
