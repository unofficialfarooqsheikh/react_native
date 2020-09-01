import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

export default function ScreenTwo() {
  // const [data, setData] = useState([]);

  useEffect((() => {
    axios
      .get("https://feapi.offsetnow.com/api/admin/GetCategories")
      .then((response) => {
        const temp =response.data
        console.log("Initial data",temp)
        // setData(temp)
      })
      .catch((error) => {
        alert(error);
      });
  }),[]);
  return (
    <View style={styles.container}>
      <Text>Start</Text>

      <Text>End</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "10%",
    padding: "10%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "justify",
  },
  seperator:{
    borderBottomWidth:2,
    borderBottomColor: "grey",
    marginTop: "10%",
    marginBottom: "10%",
  }
});
