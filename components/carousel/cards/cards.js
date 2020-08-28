import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImColoursage,
  Dimensions,
  Button,
  ProgressBarAndroid,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Slider } from "react-native-elements";
import MainButton from "../../MainButton";
import Colours from "../../../constants/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");

const Card = ({ data }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: data.ImageUrl }} />
      <View style={styles.ContentView}>
        <View style={styles.textView}>
          <View style={styles.titleContainer}>
            <View style={{ paddingRight: 10 }}>
              <FontAwesome5 name={data.Icon} size={30} color="black" />
            </View>
            <Text style={styles.itemTitle}> {data.Title}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton>{data.ButtonName}</MainButton>
          </View>
          <Slider
            value={data.Progress}
            thumbTintColor={Colours.secondary}
            disabled={true}
          />
          <View style={styles.titleContainer}>
            <View styles={styles.valuesContainer}>
              <Text style={styles.itemTitle}>{data.Heading1}</Text>
              <Text style={styles.itemValue}>{data.Value1}</Text>
            </View>
            <View>
              <Text style={styles.divider}> | </Text>
            </View>
            <View styles={styles.valuesContainer}>
              <Text style={styles.itemTitle}>{data.Heading2}</Text>
              <Text style={styles.itemValue}>{data.Value2}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: wp("90%"),
    height: height > 770 ? hp("30%") : hp("37%"),
    backgroundColor: "white",
    margin: wp("5%"),
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  ContentView: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: wp("12.5%"),
    backgroundColor: Colours.primary,
    opacity: 0.9,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textView: {
    position: "relative",
    bottom: 20,
    margin: 10,
    left: 5,
  },
  image: {
    width: wp("90%"),
    height: height > 770 ? hp("30%") : hp("37%"),
  },
  itemTitle: {
    color: "white",
    fontSize: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    backgroundColor: "red",
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  button: {
    width: wp("20%"),
    backgroundColor: Colours.secondary,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },
  valuesContainer: {
    flexDirection: "row",
  },
  itemValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  divider: {
    fontSize: hp("5%"),
    paddingLeft: wp("10%"),
    paddingRight: wp("10%"),
  },
});

export default Card;
