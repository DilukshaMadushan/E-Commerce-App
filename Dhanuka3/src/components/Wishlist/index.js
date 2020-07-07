import React, { Component } from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';


class Wishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      State:false,
      }
      this.onWishlistPress = this.onWishlistPress.bind(this);
  }

  onWishlistPress(click) {
    this.setState({
      State: true
    });
  }

  render() {
    return (
      <TouchableOpacity
        onPressIn={(click) => this.onWishlistPress(click)}>
        <Icon name={this.state.State ? 'heart' : 'heart-o'}
              containerStyle={styles.Wishlist}
              type='font-awesome'
              size={24}
              color={this.state.State ? 'red' : 'grey'}/>
      </TouchableOpacity>
    );
  }
}




const styles = StyleSheet.create({
  Wishlist: {
    padding:6,
  },
});

export default Wishlist;