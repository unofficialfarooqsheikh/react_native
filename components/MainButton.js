import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colours from '../constants/colors';
    
const { width, height } = Dimensions.get('window')
const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
          </View>
            <Text style={styles.sidearrow}></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  buttoncontainer:{
    flexDirection:"row",
  },
  buttonText: {
    color: 'white',
    fontSize: 20
  },
  sidearrow:{
    fontSize: 18,
    textAlignVertical:"center",
    margin:1,
    paddingLeft:"3%",
    paddingRight:"3%",
    backgroundColor:'white',
  }
});

export default MainButton;
