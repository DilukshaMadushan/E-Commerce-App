import StarRating from "react-native-star-rating";
import React, { Component } from "react";

class RatingStars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    return (
      <StarRating
        emptyStar={"ios-star-outline"}
        fullStar={"ios-star"}
        iconSet={"Ionicons"}
        maxStars={5}
        starSize={19}
        starStyle={{
          paddingEnd: 1,
        }}
        rating={this.state.starCount}
        fullStarColor={"rgba(0,179,155,1)"}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default RatingStars;
