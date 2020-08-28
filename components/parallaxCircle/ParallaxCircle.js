import React from 'react';
import { View, StyleSheet, Text, Dimensions, ImageBackground , TouchableHighlight} from 'react-native';
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window')


const ParallaxCircle =({data})=>{

    return (
        <View style={styles.container}>
       
          <View style={styles.circleAlignment}>
            <View style = {styles.circle} >
             <Text style={styles.CircleText}> {data.circleNumber}</Text>
            </View>
          </View>
          <View style={styles.TextContentView}>
            <Text style={styles.TextContent}>{data.ContentText}</Text>
        </View>
      
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: '#123a54'
    },
   
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold"
    },
    circle:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        borderColor:'#fff',
        borderWidth: 4, borderColor: 'white', borderStyle:'solid' ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleAlignment:{
      marginTop: height * 0.05,
      marginLeft: width * 0.3,
    },
    CircleText:{
        color: '#23a884',
        fontSize:60,
        textAlign:'center'
        

    },
    TextContent:{
        color:'#fff',
        fontSize:30,
        textAlign: 'center'
       ,flexDirection: 'column'
       // marginTop: height * 0.05,
    }

  });

  export default ParallaxCircle;