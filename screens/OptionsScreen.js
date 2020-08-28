import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CarouselItem from "../components/carousel/carousel_item";

export default function OptionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Options Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
