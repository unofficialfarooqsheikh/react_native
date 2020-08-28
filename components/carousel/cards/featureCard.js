import React from 'react'
import { View, StyleSheet, Text, ImColoursage, Dimensions, Button, ProgressBarAndroid ,Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Slider } from 'react-native-elements';
import MainButton from '../../MainButton';
import Colours from '../../../constants/colors';
import {heightPercentageToDP as hp,
    widthPercentageToDP as wp} from 'react-native-responsive-screen';
    import { Card } from 'react-native-elements';
import TextComponent from '../textComponent';
const { width, height } = Dimensions.get('window')

const FeatureCards = ({data}) =>{
  
    return (
      
        <View style= {styles.CardSliders}>
            <View style={styles.TextView}>
                <Image
                    source={{ uri: data.ImageUrl }}
                    style={styles.imageCover}
                />
            </View>

            
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                }}>
                    <View>
                         <Text  style={styles.FeatureTextSpan}>Featured</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.ContentDiv}>
                            {data.Content1}
                        </Text>
                    </View>
                    <View style={styles.titleContainer}>
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>

                            <Text style={styles.ContentDiv}>{data.CalenderContent}</Text>
                        </View>
                    </View>
                    <View style={{ marginLeft: 2, marginTop: 20, color: '#5a6871' }}>

                        <Text style={styles.ContentDesc}>{data.causestitle1}</Text>
                    </View>
                    <View style={{ marginLeft: 2, marginTop: 20, color: '#5a6871' }}>

                        <Text style={styles.paragraph}>{data.sliderstitle1}</Text>
                    </View>
                    <Slider value={data.Progress} thumbTintColor={Colours.primary} disabled={true} />
                    <View style={{ flex: 1, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.paragraph}>Raised : <Text style={styles.Currency}>{data.Raised}</Text></Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right' }} style={styles.GoalsText}> Goals :
    <Text style={styles.Currency}>{data.Goals}</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.donateBtn} >
                    <Button
                        title="Donate"
                    />
                </View>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    SliderCards:{
        width : width/1

    },
    container: {
        flex: 1,
        padding:15,
        backgroundColor: '#ecf0f1',
      },
    
      paragraph: {
        flex:1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#34495e',
      },
      CardSliders:{
        flex: 1,
        margin: 15
      },
      Currency:{
          color:"#23a884"
      },
      GoalsText:{
          flex:1,
        fontSize: 30,
        fontWeight: 'bold',
       textAlign:'right',
        color: '#34495e', 
        textAlign: 'right', alignSelf: 'stretch'
      },
      ContentDiv:{
        fontSize: 30,
        color: "#123a54",
       fontWeight: 'bold',
        
      },
      IconContent :{
        fontSize: 30,
        color: "#123a54",
       fontWeight: 'bold',
        
        fontWeight: "bold",
        elevation: 5
      }

, titleContainer:{
    flexDirection:"row",
    
},
donateBtn:{
    width:width/3,
    marginTop:20
},
ContentDesc:{
    fontSize: 15,
    color: "#123a54",
   
    flexDirection:'column',
    fontWeight: "bold",
    elevation: 5
},
imageCover:{
    width: '100%',
    height: height/2,
  },
  TextView:{
    marginTop:'10%'
  },
  FeatureTextSpan:{
    backgroundColor:'#23a884' ,flex:1,
    width: wp("30%"),
    fontSize:25,
    color:'#fff',
    textAlign:'center'
  }
})

export default FeatureCards