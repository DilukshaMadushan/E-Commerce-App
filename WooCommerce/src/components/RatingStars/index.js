import StarRating from 'react-native-star-rating';
import React, { Component } from 'react';

class RatingStars extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={16}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        fullStarColor={'rgb(102,255,220)'}
      />
    );
  }
}

export default RatingStars;