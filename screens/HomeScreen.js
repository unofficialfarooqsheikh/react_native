import React ,{useState}from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView ,Image} from 'react-native';
// import CarouselItem from '../components/carousel/carousel_item'
import { SliderBox } from "react-native-image-slider-box";
import CardsComponent from '../components/carousel/cards/cards'
import TextComponent from  '../components/carousel/textComponent';
import colors from '../constants/colors';
import { Slider,Tooltip } from 'react-native-elements';
import  SliderCards from '../components/carousel/cards/donate_cards';

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
  const SliderCardsDataList=[
    {
      Progress:"0.5" , Raised:'€5',Goals : '€10' ,Icon:'calendar-alt' ,Content1:'Unlock2 Curfew Ends' 
      ,CalenderContent:'2 days remaining',  causestitle1:'Test',ImageUrl:'https://feapi.offsetnow.com/CampaignImages/f48db8f2-da59-4754-8c21-d0cef320536d.jpg'  },
      {
        Progress:"0.2" , Raised:'€128',Goals : '€1282.08' ,Icon:'calendar-alt' ,Content1:'Unlock3 Curfew Ends' 
        ,CalenderContent:'2 days remaining',  causestitle1:'Unlock3: Curfew Ends, No Schools Till End-August, Gyms Can Reopen Plese donate',
        ImageUrl:'https://feapi.offsetnow.com/CampaignImages/7cb4b5d2-7f62-4a03-b9a4-64277fd40737.jpg'  },
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
    
      
      <View>
        {
          SliderCardsDataList.map((item,index ) =>{
         return <SliderCards key={index}   data={item}/>
        })
      }
      </View>
      {/* <View style={styles.TextView}>
      <Image  
      source={{ uri: 'https://feapi.offsetnow.com/CampaignImages/7cb4b5d2-7f62-4a03-b9a4-64277fd40737.jpg' }}
      style={styles.imageCover}
          
          />
         
      </View>
      <View>
      <SliderCards  data={SliderCardsDataList[1]}/>
      </View> */}

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

});
