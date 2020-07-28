import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import MyWishlist from '../components/MyWishlist';

class myWishlistScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
          <MyWishlist navigation={this.props.navigation}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default myWishlistScreen;