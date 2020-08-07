import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import EmailList from "../components/EmailList";

class emailListScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.ItemsScreen}>
          <EmailList />
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  ItemsScreen: {
    height: "100%",
    backgroundColor: "#fff",
    paddingBottom: 100,
  },
});

export default emailListScreen;
