import React ,{useState}from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
// import CarouselItem from '../components/carousel/carousel_item'
import { SliderBox } from "react-native-image-slider-box";
import CardsComponent from '../components/carousel/cards/cards'

const { width, height } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {
 const ImageList = ["https://offsetnow.com/assets/images/banner1.jpg","https://offsetnow.com/assets/images/baneer2.jpg","https://offsetnow.com/assets/Baners/baner3.jpg"]
 const DataList = [
                  {Title:"Fund",Icon: "money-bill-alt",Progress:0.2,ImageUrl: "https://offsetnow.com/Valrnteer1.jpg", Content : "", ButtonName: "Join Us",Heading1:"Reached",Value1:"3,000",Heading2:"Reached",Value2:"3,000"},
                  {Title:"Donors",Icon: "hand-holding-heart",Progress:0.8,ImageUrl: "https://offsetnow.com/money1.jpg", Content : "", ButtonName: "Join Us",Heading1:"Reached",Value1:"3,000",Heading2:"Reached",Value2:"3,000"}
                  ]
 return (
    <ScrollView style={{flex: 1}}>
    <SliderBox 
      sliderBoxHeight={height/3}
      circleLoop autoplay={true}
      resizeMethod={'resize'}
      resizeMode={'cover'}
      images={ImageList}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"/>
      <View>
        {
          DataList.map((item,index)=>{
            return <CardsComponent key={index} data={item}/>
          })
        }
      </View>
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
    
  }
});
