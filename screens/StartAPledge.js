import React , { useState } from "react";
import axios from "axios";

import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Switch,
  ScrollView,
} from "react-native";
import {

  Picker
} from "native-base";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TextInput } from 'react-native-paper';
const { width, height } = Dimensions.get("window");
export default function StartAPledge({ navigation }) {
  const [currencySelect, setCurrency] = useState("0");
  const [pledgeForSelect, setPledgeFor] = useState("0");
  const [pledgeForm, setStartApledge] = useState({
    Amount: '',
    PledgeTitle: '',
    AmountType: '',
    PledgeFor:'',
    Tags:'',
  });
  const setAmount = (val) => {
    setStartApledge({ 
      ...pledgeForm,
      Amount: val
    });
  }

  const setPledgeTitle = (val) =>{
    setStartApledge({
      ...pledgeForm,
      PledgeTitle:val
    });

    const setTags = (val) =>{
      setStartApledge

    }
  
  }
  return (
    <View style={styles.container}>
      <View style={styles.PledgeHeader}>
          <Text style={styles.HeaderText}>Start a New Pledge</Text>
      </View>
        {/* <View>
        <Image
          style={{ width: 200, height: 60, alignSelf: "center" }}
          resizeMode="contain"
          source={{
            uri: "https://offsetnow.com/assets/Offset_Logo_2.png",
          }}
        />
      </View> */}
      <ScrollView>


      <View style = {styles.form}>
      <View style={styles.pickerContainer}>
            <Picker
              note
              mode="dropdown"
              style={{ width: wp("50%") }}
              selectedValue={currencySelect}
              onValueChange={(value) => {
                setCurrency(value);
              }}
            >
              <Picker.Item key={"Default"} label={"Currency"} value={"0"} />
              {/* {category.map((item, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={item.CategoryName}
                    value={item.CategoryId}
                  />
                );
              })} */}
            </Picker>
          </View>
      <View style = { styles.nameInput}>
        {/* <Text style = {styles.nameText}>Amount</Text> */}
          <TextInput style ={styles.passwordText}
            placeholder="Amount"
            style={styles.textInput}
            autoCapitalize="none"
            value ={pledgeForm.Amount}
            onChangeText = {(val) => setAmount(val)}
          />
        <Text></Text>
        </View>
        <View style = { styles.LastnameInput}>
        {/* <Text style = {styles.nameText}>Pledge Title</Text> */}
          <TextInput
            placeholder="Pledge Title"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText = {(val) => setPledgeTitle(val)}
          />
        <Text></Text>
        </View>
        <View style={styles.pickerContainerPledge}>
            <Picker
              note
              mode="dropdown"
              style={{ width: wp("50%") }}
              selectedValue={setPledgeFor}
              onValueChange={(value) => {
                setPledgeFor(value);
              }}
            >
              <Picker.Item key={"Default"} label={"Pledge For"} value={"0"} />
              {/* {category.map((item, index) => {
                return (
                  <Picker.Item
                    key={index}
                    label={item.CategoryName}
                    value={item.CategoryId}
                  />
                );
              })} */}
            </Picker>
          </View>
        <View style = { styles.emailInput}>
        {/* <Text style = {styles.nameText}>Tags</Text> */}
          <TextInput style = {styles.passwordText}
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText = {(val) => setTags(val)}
          />
        <Text></Text>
        </View>
     
      
       
          <View>
          <TouchableOpacity activeOpacity={0.6}
          onPress = {()=>{}}
          >
            <View style = {styles.button}>
              <Text style = { styles.buttonText}
                // onPress = {() => signUp(signUpForm)}
              >Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      {/* <Button>
    </Button> */}
      {/* <TouchableOpacity>
        <Icon name="pluscircleo" size={50} color="black" />
      </TouchableOpacity>
      <Text>Add a Pledge</Text> */}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: hp('4%'),
  },

  form: {
    alignItems: "center"
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10%",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom:hp('1%'),
  },
  pickerContainerPledge:{
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom:hp('1%'),
  },
  nameInput: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    width: wp('100%'),
   
    borderStyle:'solid',
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  emailInput: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    width: wp('100%'),
    borderStyle:'solid',
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopColor: '#fff',
  },
  LastnameInput:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    width: wp('100%'),
    borderStyle:'solid',
    borderColor: "#eee",
    borderWidth: 0.5,
    borderTopColor: '#fff',
  },
  PledgeHeader:{
alignSelf:'center',

  },
  HeaderText:{
    fontSize:30,
    fontFamily:'lato'
  }
});
