import React, {Component} from 'react';
import {TextInput,StyleSheet, Text, View, Image, Dimensions,} from 'react-native';

import MyWishlist from '../components/MyWishlist';

class myWishlistScreen extends Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
          <MyWishlist navigation={this.props.navigation}/>
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default myWishlistScreen;