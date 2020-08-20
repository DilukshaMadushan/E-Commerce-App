import React, { Component } from "react";
import { Text,StyleSheet, View, ScrollView } from "react-native";
// import Categories from "../components/ColumnCategories";

class categoryScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Category Screen</Text>
        {/* <ScrollView style={styles.categoryScreen}>
          <Categories />
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default categoryScreen;
