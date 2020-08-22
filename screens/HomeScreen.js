import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CarouselItem from '../components/carousel/carousel_item'

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
          {/* <CarouselItem item={{url:"https://picsum.photos/200/300",title:"Just OK",description:"Hello"}}/> */}
          <Button title="Go To" onPress={()=>{navigation.navigate('Options')}}></Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
