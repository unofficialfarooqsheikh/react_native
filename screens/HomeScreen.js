import React ,{useState}from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView ,Image} from 'react-native';
// import CarouselItem from '../components/carousel/carousel_item'
import { SliderBox } from "react-native-image-slider-box";
import CardsComponent from '../components/carousel/cards/cards'
import TextComponent from  '../components/carousel/textComponent';
import colors from '../constants/colors';
import { Slider,Tooltip } from 'react-native-elements';

import {heightPercentageToDP as hp,
  widthPercentageToDP as wp} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {
  // Images for slider
 const ImageList = ["https://offsetnow.com/assets/images/banner1.jpg","https://offsetnow.com/assets/images/baneer2.jpg","https://offsetnow.com/assets/Baners/baner3.jpg"]
//  Data for the cards 
 const DataList = [
                  {Title:"Fund",Icon: "money-bill-alt",Progress: "0.2",ImageUrl: "https://offsetnow.com/Valrnteer1.jpg", Content : "", ButtonName: "Join Us",Heading1:"Reached",Value1:"500",Heading2:"Goal",Value2:"3,000"},
                  {Title:"Donors",Icon: "hand-holding-heart",Progress: "0.8",ImageUrl: "https://offsetnow.com/money1.jpg", Content : "", ButtonName: "Join Us",Heading1:"Reached",Value1:"1000",Heading2:"Goal",Value2:"1,200"}
                  ]
               
  const FundRaiseSlider=[{Progress:"0.8"}]
 return (
    <ScrollView style={{flex: 1}}>
    {/* Temporary slider box which would be replaced by customer slider box */}
    <SliderBox 
      sliderBoxHeight={height/3}
      circleLoop autoplay={true}
      resizeMethod={'resize'}
      resizeMode={'cover'}
      images={ImageList}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"/>
      {/* return No of cards as much as length of data in DataList */}
      <View>
        {
          DataList.map((item,index)=>{
            return <CardsComponent key={index} data={item}/>
          })
        }
        </View>
      {/* Causes div */}
      <View style={styles.TextView}>
     
      <Text style = {styles.TextSectionHeader}>Top causes</Text>
        <Text style = {styles.TextSectionHDesc}> View the Pledges that are most active right now.</Text>
         
      </View>
      {/* Image Only  with water */}
      <View style={styles.TextView}>
      <Image  
      source={{ uri: 'https://feapi.offsetnow.com/CampaignImages/f48db8f2-da59-4754-8c21-d0cef320536d.jpg' }}
      style={styles.imageCover}
          
          />
      </View>

      {/* Slider ForGoals Raised */}
     
    </ScrollView>
   
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselcontainter:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cards:{
    
  },
  TextView:{
    marginTop:'10%'
  },
  TextSectionHeader:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign :'center',
    fontSize :40,
    fontWeight: "bold",
    
  },
  TextSectionHDesc:{
    alignItems: 'center',
    justifyContent: 'center',
    textAlign :'center',
    fontSize :20,
    marginTop:'5%'
   
  },
  imageCover:{
    width: '100%',
    height: height/1,
  }
});
