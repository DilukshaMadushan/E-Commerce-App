import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import AutoheightTextInput from "react-native-textinput-autoheight";
import GetAPI from "../../services/GetApi";
import stripHtml from "string-strip-html";

class AddReview extends Component {
  state = {
    id: this.props.id,
    review: null,
    reviewList: [],
  };

  postReviewCheck(review) {
    if (this.state.review != null) {
      this.props.toggleModel(review);
      //this.state.reviewList.push(review.replace(/(<([^>]+)>)/gi, ""));
    } else {
      alert("Please enter a Review!");
    }
  }
  componentWillMount() {
    this.getReviews();
  }

  getReviews() {
    GetAPI.getReviewsApi(this.state.id)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({ reviewList: responsejson });
        //console.log(responsejson);
      });
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
              placeholder='Enter your Review'
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={() => this.postReviewCheck(this.state.review)}
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
