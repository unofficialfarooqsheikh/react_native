import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import {
  Avatar,
  Text,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AuthContext,UserContext } from "../components/Context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Colours from "../constants/colors";
import { log } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function DrawerContent(props) {
  const  {SingOut} = React.useContext(AuthContext); 
  //console.log(JSON.stringify(myContext))
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      <UserContext.Consumer>
          {user => (
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://api.adorable.io/avatars/50/abott@adorable.png",
                }}
                size={60}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>{user.Name}</Title>
                <Caption style={styles.caption}>{user.EmailAddress}</Caption>
              </View>
            </View>
          </View>
        </View>
             )}
             </UserContext.Consumer>
        <Drawer.Section>
          <DrawerItem
          icon={(props) => {
            return (
              <Icon
                name={"home"}
                color={props.color}
                size={props.size}
              />
            );
          }}
            label="Home"
            onPress={() => {
              props.navigation.navigate("Homescreen");
            }}
          ></DrawerItem>
          <DrawerItem
          icon={(props) => {
            return (
              <Icon
                name={"edit"}
                color={props.color}
                size={props.size}
              />
            );
          }}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
          ></DrawerItem>
          <DrawerItem 
            icon={(props) => {
              return (
                <Icon
                  name={"folder-open-o"}
                  color={props.color}
                  size={props.size}
                />
              );
            }}
            label="My Pledges"
            onPress={() => {
              props.navigation.navigate("Pledges");
            }}
          ></DrawerItem>
          <DrawerItem
          icon={(props) => {
            return (
              <Icon
                name={"file-text-o"}
                color={props.color}
                size={props.size}
              />
            );
          }}
            label="Privacy Policy"
            onPress={() => {
              props.navigation.navigate("PolicyScreen");
            }}
          ></DrawerItem>
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          icon={(props) => {
            return (
              <Icon
                name={"sign-out"}
                color={props.color}
                size={props.size}
              />
            );
          }}
          label="Sign Out"
          onPress = {()=>SingOut(null)}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
