import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
// import Images from "../../common/Images";
// import { connect } from "react-redux";
// import { signOutUser } from "../../store/AuthRedux";

class SideBar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi hi</Text>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Upper: {
    backgroundColor: "rgba(0,0,0,0.04)",
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  ProfileImage: {
    marginLeft: 30,
    width: 0.2 * width,
    height: 0.2 * width,
    borderRadius: 40,
  },
  Profileright: {
    paddingLeft: 20,
  },
  list: {
    paddingTop: 30,
  },
  Text: {
    fontSize: 17,
    paddingStart: 25,
  },
});


export default SideBar;

