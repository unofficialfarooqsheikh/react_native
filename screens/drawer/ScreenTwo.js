import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList,Dimensions } from "react-native";
import { Container, Header, Content, Picker, Form } from "native-base";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import axios from "axios";

export default function ScreenTwo() {
  const [category, setCategory] = useState([]);
  const [catselect, setCatselect] = useState("32");

  useEffect((() => {
    axios
      .get("https://feapi.offsetnow.com/api/admin/GetCategories")
      .then((response) => {
        const temp =response.data.objresult
        console.log("Initial data",temp)
        setCategory([...temp])
      })
      .catch((error) => {
        alert(error);
      });
  }),[]);
  console.log("DATA S",setCategory,"DATA E")
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={catselect}
                onValueChange={(value)=>{setCatselect(value)}}
              >
              {
                category.map((item,index)=>{
                  console.log("*******",item,"*********")
                  return <Picker.Item key={index+"gaaaand"} label={item.CategoryName} value={item.CategoryId} />
                })
              }
              </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pickerContainer:{
    marginTop:"10%",
  },
  seperator:{
    borderBottomWidth:2,
    borderBottomColor: "grey",
    marginTop: "10%",
    marginBottom: "10%",
  }
});
