import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Header,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon,
  Picker,
  Separator,
  Left,
  Body,
  Right,
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
  const [loading, setLoading] = useState(false);
  const [Campaings, setCampgains] = useState([]);
  const [CurrentSelectCampaing, SetCurrentSaveCampaign] = useState([]);
  const [IsPress, setIsPress] = useState(false);
  const seperator = () => {
    return;
  };

  useEffect(() => {
    axios
      .get("http://feapi.offsetnow.com/api/admin/GetCategories")
      .then((response) => {
        const temp = response.data.objresult;
        // console.log("Initial data",temp)
        setCategory([...temp]);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "http://feapi.offsetnow.com/api/admin/GetCampaignsByCategory?CategoryId="+catselect+"&CountryCode=UK"
      )
      .then((response) => {
        const DataSet = response.data.objresult;
        for (var i in DataSet) {
          DataSet[i].CampaignImages =
            "http://feapi.offsetnow.com" + DataSet[i].CampaignImages;
        }
        //console.log("Campaign data",DataSet)
        setLoading(false);
        setCampgains([...DataSet]);
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }, [catselect]);


  return (
    <React.Fragment>
      {/* <Header/> */}
      <SafeAreaView style={{ marginTop: hp("5%"), marginBottom: hp("1%") }}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Picker
              note
              mode="dropdown"
              style={{ width: wp("50%"), color: "black" }}
              selectedValue={catselect}
              onValueChange={(value) => {
                setCatselect(value);
              }}
            >
              <Picker.Item
                key={"Default"}
                label={"All Categories"}
                value={"0"}
              />
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

      <View style={{ marginTop: hp("8%"), height: hp("80%") }}>
        {loading ? (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size={"small"} />
          </View>
        ) : (
          <FlatList
            numColumns={2}
            data={Campaings}
            keyExtractor={(item, index) => {
              return item.CampaignId.toString();
            }}
            renderItem={(item) => {
              return (
                <View style={{ width: width / 2 }}>
                  <Card style={{ elevation: 3 }}>
                    <CardItem header>
                      <Left>
                        <Thumbnail source={{ uri: item.item.CampaignImages }} />
                        <Body>
                          <Text>{item.item.CampaignName}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        style={{ height: 300, flex: 1 }}
                        source={{ uri: item.item.CampaignImages }}
                      />
                    </CardItem>
                    <View style={styles.ImageHeightSet}>
                      <Text style={styles.ImageDesc}>
                        {item.FundraiserTitle}
                      </Text>
                      <Text style={styles.ImageDesc2}>
                        {item.item.CampaignShortDescription.length > 30 ? item.item.CampaignShortDescription.slice(0,30)+ "...":item.item.CampaignShortDescription}
                      </Text>
                    </View>
                    <CardItem style={styles.CampaignValuesContainer}>
                      <Content>
                        <List>
                          <ListItem>
                            <View style={styles.CampaignValues}>
                              <Text>Campaign Target </Text>
                              <Text>:</Text>
                              <Text>{item.item.CampaignTarget}</Text>
                            </View>
                          </ListItem>
                          <ListItem noBorder>
                            <View style={styles.CampaignValues}>
                              <Text>Collected Amount </Text>
                              <Text>:</Text>
                              <Text>{item.item.CollectedAmount}</Text>
                            </View>
                          </ListItem>
                        </List>
                      </Content>
                    </CardItem>
                    <CardItem>
                      <Left>
                        <TouchableOpacity>
                          <View style={{flexDirection:"column"}}>
                            <Icon
                              type="EvilIcons"
                              name="like"
                              style={{ color: "#ED4A6A" }}
                            />
                            <Text>{"Donate"}</Text>
                          </View>
                        </TouchableOpacity>
                      </Left>
                      <Body></Body>
                      <Right>
                        <TouchableOpacity>
                          <Icon type="AntDesign"
                            name="sharealt"
                            style={{ color: "#ED4A6A" }}/>
                            <Text>{"Share"}</Text>
                        </TouchableOpacity>
                      </Right>
                    </CardItem>
                  </Card>
                </View>
              );
            }}
          />
        )}
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
  ImageHeightSet: {
    paddingVertical: 15,
  },
  ImageDesc: {
    textAlign: "center",
    fontFamily: "lato",
    fontSize: 25,
  },
  ImageDesc2: {
    textAlign: "center",
  },
  CampaignValuesContainer: {
    flexDirection: "column",
    width: "100%",
    borderWidth: 0.5,
    borderColor: "lightslategrey",
  },
  CampaignValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
