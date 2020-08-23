import React ,{useState}from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
// import CarouselItem from '../components/carousel/carousel_item'
import { SliderBox } from "react-native-image-slider-box";
const { width, height } = Dimensions.get('window')
console.log(width,height)
export default function HomeScreen({ navigation }) {
  var ImageList = ["https://offsetnow.com/assets/images/banner1.jpg","https://offsetnow.com/assets/images/baneer2.jpg","https://offsetnow.com/assets/Baners/baner3.jpg"]
  console.warn(ImageList)
  return (
    <SafeAreaView>
      
      <View style={styles.container}>
          <View style={styles.carouselcontainter}>
            <SliderBox
            sliderBoxHeight={height/3}
            circleLoop
            autoplay={true}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            images={ImageList} />
          </View>
          <View style={{height:height/3}}><Text>Lorem</Text></View>
          {/* <CarouselItem item={{url:"https://picsum.photos/200/300",title:"Just OK",description:"Hello"}}/> */}
          <Button title="Open Options" onPress={()=>{navigation.navigate('Options')}}></Button>
          <View style={{height:height/3}}></View>
      </View>
    </SafeAreaView>
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
