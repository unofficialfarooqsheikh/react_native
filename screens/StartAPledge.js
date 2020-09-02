import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text } from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export default function StartAPledge({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Button>
    </Button> */}
      <TouchableOpacity>
        <Icon name="pluscircleo" size={50} color="black" />
      </TouchableOpacity>
      <Text>Add a Pledge</Text>
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
