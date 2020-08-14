import React, { Component } from "react";
import { Text, View, TouchableOpacity, RefreshControl } from "react-native";
import styles from "./styles";
import AutoheightTextInput from "react-native-textinput-autoheight";

class AddReview extends Component {
  state = {
    review: null,
    reviewList: this.props.reviewList,
  };

  postReviewCheck(review) {
    if (this.state.review != null) {
      this.props.toggleModel(review);
    } else {
      alert("Please enter a Review!");
    }
  }

  render() {
    const checkReview = this.state.reviewList.filter(
      (items) => items.reviewer_email == this.props.email
    ).length;
    return (
      <View style={styles.container}>
        {this.state.reviewList.map((item, index) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.reviewer} :
            </Text>
            <Text
              style={{ flex: 1, fontSize: 15, color: "grey", paddingLeft: 30 }}
            >
              {item.review.replace(/(<([^>]+)>)/gi, "")}
            </Text>
          </View>
        ))}
        {checkReview < 1 || checkReview == null ? (
          <View>
            <AutoheightTextInput
              onChangeText={(text) => this.setState({ review: text })}
              style={[styles.TextView, { paddingVertical: 30 }]}
              placeholder='Enter your Review...'
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                this.postReviewCheck(this.state.review);
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                Post Review
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

export default AddReview;
