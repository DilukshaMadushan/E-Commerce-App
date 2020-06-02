import React, { Component } from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

'use strict';

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
        <View style={styles.dark}></View>
        <Icon name='heart'
              containerStyle={styles.Wishlist}
              type='font-awesome'
              color={this.state.State ? 'red' : '#fff'}/>
      </TouchableOpacity>
    );
  }
}




const styles = StyleSheet.create({
  Wishlist: {
    padding:10,
  },

  dark:{
    backgroundColor:'black',
    width:'100%',
    height:'100%',
    position:'absolute',
    opacity:0.1,
    borderRadius:25,
  },
});

export default Wishlist;