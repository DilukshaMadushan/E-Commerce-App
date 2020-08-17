import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CategoryItems from "../components/CategoryItems";
import { connect } from "react-redux";

class ItemsScreen extends Component {
  render() {
    return (
      <View style={styles.categoryScreen}>
        <CategoryItems
          navigation={this.props.navigation}
          catId={this.props.navigation.getParam("id")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
    backgroundColor: "#FFF",
  },
});

export default ItemsScreen;
