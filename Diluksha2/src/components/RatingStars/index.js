import StarRating from 'react-native-star-rating';
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

class RatingStars extends Component {
  state = {
    average_rating: null,
  };

  onStarRatingPress() {
    this.props.toggleModal(this.state.average_rating);
  }

  render() {
    return (
      <View style={styles.Modal}>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
          Rate Item
        </Text>
        <StarRating
          containerStyle={{paddingVertical: 30}}
          emptyStar={'star-o'}
          fullStar={'star'}
          iconSet={'FontAwesome'}
          maxStars={5}
          starSize={40}
          starStyle={{
            paddingEnd: 1,
          }}
          rating={this.state.average_rating}
          fullStarColor={'rgba(0,179,155,1)'}
          selectedStar={(rating) => this.setState({average_rating: rating})}
        />
        <View style={{width: width}}>
          <TouchableOpacity
            onPress={() => this.onStarRatingPress()}
            style={{alignSelf: 'flex-end', paddingRight: 80}}>
            <Text style={styles.Button}>Rate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  Modal: {
    height: '30%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
  },
  Button: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(0,179,155,1)',
  },
});

export default RatingStars;
