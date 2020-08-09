import StarRating from "react-native-star-rating";
import React, { Component } from "react";
import { View } from "react-native";
import PutAPI from "../../services/PutApi";

class RatingStars extends Component {
  state = {
    item: this.props.item,
    average_rating: this.props.average_rating,
    rating_count: this.props.rating_count,
  };

  onStarRatingPress(rating) {
    const average_rating =
      (this.state.average_rating * this.state.rating_count + rating) /
      (this.state.rating_count + 1);
    const rating_count = this.state.rating_count + 1;
    PutAPI.ratingPostApi(
      this.state.item.id,
      JSON.stringify({
        average_rating: toString(average_rating),
        reviews_allowed: false,
        rating_count: rating_count,
      })
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });
  }

  render() {
    const rate = Math.round(Number(this.state.average_rating));
    const rateStatus = this.state.item.reviews_allowed;
    return (
      <View>
        <StarRating
          disabled={rateStatus}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          iconSet={"Ionicons"}
          maxStars={5}
          starSize={19}
          starStyle={{
            paddingEnd: 1,
          }}
          rating={rate}
          fullStarColor={"rgba(0,179,155,1)"}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
        />
      </View>
    );
  }
}

export default RatingStars;
