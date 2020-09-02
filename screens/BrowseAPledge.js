import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Icon,
  Picker
} from "native-base";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import axios from "axios";

export default function BrowseAPledge() {
  const [category, setCategory] = useState([]);
  const [catselect, setCatselect] = useState("0");

  const seperator = () => {
    return;
  };

  useEffect(() => {
    axios
      .get("https://feapi.offsetnow.com/api/admin/GetCategories")
      .then((response) => {
        const temp = response.data.objresult;
        // console.log("Initial data",temp)
        setCategory([...temp]);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  // console.log("DATA S",setCategory,"DATA E")
  const cards = [
    {
      text: "Card One",
      name: "One",
      image: "https://feapi.offsetnow.com/CampaignImages/7cb4b5d2-7f62-4a03-b9a4-64277fd40737.jpg",
    },
    {
      text: "Card two",
      name: "two",
      image: "https://feapi.offsetnow.com/CampaignImages/f48db8f2-da59-4754-8c21-d0cef320536d.jpg",
    },
    {
      text: "Card three",
      name: "three",
      image: "https://feapi.offsetnow.com/CampaignImages/7cb4b5d2-7f62-4a03-b9a4-64277fd40737.jpg",
    },
    {
      text: "Card Four",
      name: "Four",
      image: "https://offsetnow.com/fun-fact-bg.jpg",
    },
  ];
  return (
    <React.Fragment>
    {/* <Header/> */}
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Picker
              note
              mode="dropdown"
              style={{ width: wp("50%") }}
              selectedValue={catselect}
              onValueChange={(value) => {
                setCatselect(value);
              }}
            >
              <Picker.Item key={"Default"} label={"All Categories"} value={"0"} />
              {category.map((item, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={item.CategoryName}
                    value={item.CategoryId}
                  />
                );
              })}
            </Picker>
          </View>
        </View>
      </SafeAreaView>
      <View style={{marginTop:hp("15%")}}>
          <View>
            <DeckSwiper
              dataSource={cards}
              renderItem={(item) => (
                <Card style={{ elevation: 3 }}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.image }} />
                      <Body>
                        <Text>{item.text}</Text>
                        <Text note>Text notes</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 300, flex: 1 }}
                      source={{ uri: item.image }}
                    />
                  </CardItem>
                  <CardItem>
                    <Icon type="AntDesign" name="like2" style={{ color: "#ED4A6A" }} />
                    <Text>{item.name}</Text>
                  </CardItem>
                </Card>
              )}
            />
          </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
  },
  seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "grey",
    marginTop: "10%",
    marginBottom: "10%",
  },
});
