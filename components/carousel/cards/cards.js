import React from 'react'
import { Card} from 'react-native-elements';
import { StyleSheet, Text, View, Button, Dimensions,Image } from 'react-native';
const { width, height } = Dimensions.get('window')
const CardsComponent= ({HeaderText})=>{
return (

        <Card title={HeaderText}  
                style={{height:height/3}} 
                image={require('../../../assets/donar_image.jpg')}> 

                <Text style={styles.paragraph}>
                Help us to eradicate poverty around the world and save the million of lives from unwanted demises.
                Millions of innocent lives we lost every year for malnutritions.
                </Text>
                <Button title="Join Us" color="#841584" accessibilityLabel="Learn more about this purple button"
                />
        </Card>
)

}

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})

export default CardsComponent

