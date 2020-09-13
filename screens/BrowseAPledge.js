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
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BrowseAPledge() {
  const [category, setCategory] = useState([]);
  const [catselect, setCatselect] = useState("0");
  const [Campaings,setCampgains] = useState([]);
  const [CurrentSelectCampaing ,SetCurrentSaveCampaign]=useState([])
const [IsPress,setIsPress] = useState(false)
  const seperator = () => {
    return;
  };

  useEffect(() => {
    axios.get("https://feapi.offsetnow.com/api/admin/GetCategories").then((response) => {
        const temp = response.data.objresult;
        // console.log("Initial data",temp)
        setCategory([...temp]);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);


    useEffect(() => {
      axios.get("https://feapi.offsetnow.com/api/admin/GetCampaignsByCategory?CategoryId=0&CountryCode=UK").then((response) => {
          const DataSet = response.data.objresult;
          for(var i in DataSet){
            DataSet[i].CampaignImages = "https://feapi.offsetnow.com"+DataSet[i].CampaignImages;

          }
          //console.log("Campaign data",DataSet)
          setCampgains([...DataSet]);
        }).catch((error) => {
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
      <Text>Hi</Text>
      <DeckSwiper
              dataSource={Campaings}
              renderItem={(item) => { 
console.log("##################################################################################################################")
                return(
               
                  <TouchableOpacity 
                  onPress={()=>{
                    // SetCurrentSaveCampaign([...item])
                    // console.log(CurrentSelectCampaing)
                  }}
                  >
                    <Card style={{ elevation: 3 }}>
                    <CardItem>
                      {/* <Left>
                        <Thumbnail source={{ uri: item.CampaignImages }} />
                        <Body>
                          <Text>{item.FundraiserTitle}</Text>
                       
                        </Body>
                      </Left> */}
                    </CardItem>
                    <CardItem cardBody>
                      <Image
                        style={{ height: 300, flex: 1 }}
                        source={{ uri: item.CampaignImages }}
                       
                      />
                    </CardItem>
                    <View style={styles.ImageHeightSet}> 
                    <Text style={styles.ImageDesc}>{item.FundraiserTitle}</Text>
                     <Text  style={styles.ImageDesc2}>{item.CampaignShortDescription}</Text>
                    </View>
                    <CardItem>
                      <Icon type="AntDesign" name="like2" style={{ color: "#ED4A6A" }} />
                      <Text>{item.CampaignName}</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                  
  
                )
              } }
            />
     
      
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
    ImageHeightSet:{
  
  paddingVertical:15,

  },
  ImageDesc:{
    textAlign:'center',
    fontFamily:'lato',
    fontSize:25,
  },
  ImageDesc2:{
    textAlign:'center',
  }
});
