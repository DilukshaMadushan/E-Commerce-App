import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

class Filters extends Component {
  toggleModal = (item) => {
    this.props.toggleModal(item);
  };

  render() {
    return (
      <View style={styles.Modal}>
        <Text style={styles.FilterText}>Filters</Text>
        <Text style={styles.Catalog}>Product Catalog</Text>
        <View style={{ height: "40%" }}>
          <TouchableOpacity style={styles.Types}>
            <Text style={styles.TypesText}>Mens</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Catalog}>Product Tags</Text>
        <View style={{ height: "34%" }}></View>
        <TouchableOpacity
          title='Hide modal'
          onPress={() => this.toggleModal("AAA")}
          style={styles.SearchFilter}
        >
          <Text style={{ fontSize: 20, color: "#FFF", fontWeight: "900" }}>
            Search By Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.ClearFilter}>Clear Filter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  Modal: {
    height: "100%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
  },
  FilterText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  Catalog: {
    fontWeight: "bold",
    fontSize: 20,
  },
  SearchFilter: {
    width: "100%",
    height: 40,
    backgroundColor: "rgba(0, 179, 155,0.7)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ClearFilter: {
    paddingTop: 8,
    fontWeight: "900",
    fontSize: 20,
    color: "rgba(0, 179, 155,0.7)",
    alignSelf: "center",
  },
  Types: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 40,
    backgroundColor: "rgba(100,100,100,0.5)",
    borderRadius: 20,
  },
  TypesText: {
    alignSelf: "center",
    color: "#FFF",
    fontWeight: "900",
    fontSize: 17,
  },
});

export default Filters;
