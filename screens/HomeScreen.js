import React ,{useState}from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
// import CarouselItem from '../components/carousel/carousel_item'
import { SliderBox } from "react-native-image-slider-box";
import CardsComponent from '../components/carousel/cards/cards'

const { width, height } = Dimensions.get('window')
export default function HomeScreen({ navigation }) {
 const ImageList = ["https://offsetnow.com/assets/images/banner1.jpg","https://offsetnow.com/assets/images/baneer2.jpg","https://offsetnow.com/assets/Baners/baner3.jpg"]
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
        <CardsComponent HeaderText='Donator' CardImage='../../../assets/donar_image.jpg'></CardsComponent>
        <CardsComponent HeaderText='Fund' CardImage='../../../assets/donar_image.jpg'></CardsComponent>
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
