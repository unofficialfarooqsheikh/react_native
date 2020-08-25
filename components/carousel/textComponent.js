import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Slider } from 'react-native-elements';
import Colours from '../../constants/colours'




const  TextComponent = ({data}) =>{

    return(
        <View>
        <Tooltip popover={<Text>Info here</Text>}>
          <Text>Press me</Text>
        </Tooltip>
       <Slider value={FundRaiseSlider[0].Progress} thumbTintColor={Colours.priimary} disabled={1}/>
       </View>
    );
}

const styles = StyleSheet.create({
    TextHeader :{

    }
});

export default TextComponent;