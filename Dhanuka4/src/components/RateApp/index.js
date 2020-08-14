import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import StarRating from "react-native-star-rating";

class RateApp extends Component {
  state = {
    rating_count: 0,
  };
  toggleModal = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <View style={styles.Modal}>
        <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}>
          Rate WaytooGo App
        </Text>
        <StarRating
          containerStyle={{ paddingVertical: 25 }}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          iconSet={"Ionicons"}
          maxStars={5}
          starSize={45}
          starStyle={{ paddingHorizontal: 10 }}
          rating={this.state.rating_count}
          fullStarColor={"rgba(0,179,155,1)"}
          selectedStar={(rating_count) =>
            this.setState({ rating_count: rating_count })
          }
        />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => this.toggleModal()}
            style={{ flex: 1, paddingLeft: 5 }}
          >
            <Text style={styles.Button}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.toggleModal()}
            style={{ paddingEnd: 10 }}
          >
            <Text style={styles.Button}>Rate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  Modal: {
    height: "30%",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    justifyContent: "center",
  },
  Button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(0,179,155,1)",
  },
});

export default RateApp;
