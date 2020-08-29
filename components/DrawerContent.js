import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colours from '../constants/colors';
    
const { width, height } = Dimensions.get('window')
const DrawerContent = props => {
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
  
});

export default DrawerContent;