import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, Button, ProgressBarAndroid } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Slider } from 'react-native-elements';
const { width, height } = Dimensions.get('window')
import Colours from '../../../constants/colours'


const Card = ({ data }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: data.ImageUrl }} />
            <View style={styles.ContentView}>
                    <View style={styles.textView}>
                        <View style={styles.titleContainer}>
                                <View style={{paddingTop:8}}><FontAwesome5 name={data.Icon} size={24} color="black" /></View>
                                <Text style={styles.itemTitle}> {data.Title}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                                <Button style={styles.button} color={Colours.secondary} title= {data.ButtonName}></Button>
                        </View>
                        <Text style={styles.itemDescription}>{data.Content}</Text>
                        <Slider value={data.Progress} thumbTintColor={Colours.secondary} disabled={1}/>
                        <View style={styles.titleContainer}>
                               <View styles={styles.valuesContainer}>
                                <Text style={styles.itemTitle}>{data.Heading1}</Text>
                                <Text style={styles.itemValue}>{data.Value1}</Text>
                               </View>
                               <View ><Text style={{fontSize:70}}> | </Text></View>
                               <View styles={styles.valuesContainer}>
                                <Text style={styles.itemTitle}>{data.Heading2}</Text>
                                <Text style={styles.itemValue}>{data.Value2}</Text>
                               </View>
                        </View>
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    ContentView:{
        flex:1,
        width: '100%',
        height:'100%',
        borderRadius: 10,
        position: "absolute",
        padding: 20,
        backgroundColor: Colours.primary,
        opacity: 0.9
    },
    titleContainer:{
            flexDirection:"row",
            justifyContent:"center",
            padding: 20
    },
    textView: {
        position: "relative",
        bottom: 20,
        margin: 10,
        left: 5,
    },
    image: {
        width: width - 20,
        height: height / 3,
        borderRadius: 10,
    },
    itemTitle: {
        color: 'white',
        fontSize: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    button: {
        width: 20,
        backgroundColor:Colours.secondary
    },
    buttonContainer:{
        alignItems:"center",
        "padding": 20,
        width: "100%",
    },
    valuesContainer:{
        flexDirection:"row"
    },
    itemValue:{
        fontSize:25,
        fontWeight:"bold"
    }
})

export default Card