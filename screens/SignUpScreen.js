import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";

import colors from "../constants/colors";

export default function SignUpScreen({ navigation }) {
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
      <ScrollView>
        <Text style={styles.textFooter}>Name</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your name"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.textFooter, { marginTop: 30 }]}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Your email"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.textFooter, { marginTop: 30 }]}>Mobile No.</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Mobile number"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Set password"
              style={styles.textInput}
              secureTextEntry={true}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 30 }]}>Confirm password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="confirm password"
              style={styles.textInput}
              secureTextEntry={true}
            />
          </View>
          <View style={[styles.signUp, { justifyContent: "space-between" }]}>
            <TouchableOpacity activeOpacity={0.6}>
              <View style={styles.button}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6}>
            <View style={styles.button}>
                  <Text style={styles.buttonText}
                    onPress = {() => {navigation.goBack()}}
                  >Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    paddingBottom: 20,
    alignSelf: "center",
    // paddingTop: 5,
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

  signUp: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  signUpTest: {
    color: "#21a984",
    paddingLeft: 10,
  },

  backText: {
    alignItems: "center",
    color: "#fff",
  }
});
