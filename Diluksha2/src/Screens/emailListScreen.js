import React, { Component } from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import EmailList from "../components/EmailList";

class emailListScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.ItemsScreen}>
        {/* <ImageBackground source={require('../images/backgroundImage.jpg')} style={{flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}}> */}
          <EmailList />
          {/* </ImageBackground> */}
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  ItemsScreen: { height: "100%", backgroundColor: "#FFF" },
});

export default emailListScreen;
