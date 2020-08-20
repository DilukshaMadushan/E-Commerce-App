import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
// import { SliderBox } from "react-native-image-slider-box";
// import Images from "../common/Images";
// import HomeIconRow from "../components/HomeIconRow";
// import HomeImageRow from "../components/HomeImageRow";
// import HomeImageRow2 from "../components/HomeImageRow2";

export default class homeScreen extends Component {
  // state = {
  //   images: [
  //     Images.Home_Slider01,
  //     Images.Home_Slider02,
  //     Images.Home_Slider03,
  //     Images.Home_Slider04,
  //   ],
  // };

  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
          <Text>Home Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});
