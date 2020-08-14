import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import ProfileUpdate from "../components/ProfileUpdate";

class UpdateProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileUpdate navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
});

export default UpdateProfileScreen;
