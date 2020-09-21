import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import styles from './styles';
import AutoheightTextInput from 'react-native-textinput-autoheight';
import GetAPI from '../../services/GetApi';

class AddReview extends Component {
  state = {
    id: this.props.id,
    review: null,
    fastReviewState: null,
    reviewList: [],
    profile_name: this.props.profile_name,
    isLoading: false,
    previewReview: '',
  };
  componentWillMount() {
    this.getReviews();
    this.setState({isLoading: true});
  }
  getReviews() {
    GetAPI.getReviewsApi(this.state.id)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({reviewList: responsejson});
        this.setState({isLoading: false});
      });
  }

  postReviewCheck(review) {
    this.setState({fastReviewState: true});
    this.setState({previewReview: review});
    this.setState({review: null});
    if (this.state.review != null) {
      this.props.toggleModel(review);
    } else {
      alert('Please enter a Review!');
    }
  }

  render() {
    const checkReview = this.state.reviewList.filter(
      (items) => items.reviewer_email == this.props.email,
    ).length;
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '7%',
            }}>
            <ActivityIndicator size="large" color="#FF8C00" />
          </View>
        ) : (
          <View>
            {this.state.reviewList.map((item, index) => (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Exo-Bold',
                    color: '#162539',
                  }}>
                  {item.reviewer} :
                </Text>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: 'grey',
                    paddingLeft: 30,
                    fontFamily: 'Exo-Medium',
                  }}>
                  {item.review.replace(/(<([^>]+)>)/gi, '')}
                </Text>
              </View>
            ))}
            {this.state.fastReviewState != null ? (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Exo-Bold',
                    color: '#162539',
                  }}>
                  {this.state.profile_name} :
                </Text>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    fontFamily: 'Exo-Medium',
                    color: 'grey',
                    paddingLeft: 30,
                  }}>
                  {this.state.previewReview}
                </Text>
              </View>
            ) : (
              <View />
            )}

            {checkReview < 1 || checkReview == null ? (
              <View>
                <AutoheightTextInput
                  onChangeText={(text) => this.setState({review: text})}
                  style={[
                    styles.TextView,
                    {paddingVertical: 30, fontFamily: 'Exo-Regular'},
                  ]}
                  placeholder="Enter your Review..."
                />
                <TouchableOpacity
                  style={styles.Button}
                  onPress={() => {
                    this.postReviewCheck(this.state.review);
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontFamily: 'Exo-Bold',
                      fontSize: 20,
                    }}>
                    Submit Review
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View />
            )}
          </View>
        )}
      </View>
    );
  }
}

export default AddReview;
