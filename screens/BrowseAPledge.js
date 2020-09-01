import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import {Picker} from '@react-native-community/picker';
import { List } from 'react-native-paper';
import axios from "axios";
import { log } from "react-native-reanimated";

export default function BrowseAPledge() {
  const [data, setData] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://feapi.offsetnow.com/api/admin/GetCategories")
//       .then((response) => {
//         const temp = response.data;
//         console.log("Initial data", temp);
//         // setData(temp)
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);
  const [selectedValue, setSelectedValue] = useState("py");
  return (
    <View style={styles.container}>
      <List.AccordionGroup style={{width:"100%"}} >
        <List.Accordion title="python" id="1" >
          <List.Item title="JavaScript" onPress={(props)=>{}} />
          <List.Item title="Js" onPress={()=>{}}/>
          <List.Item title="python" onPress={()=>{}}/>
        </List.Accordion>
      </List.AccordionGroup>
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
  seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
