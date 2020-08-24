import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

class EmptyWishlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon
            name="heart"
            size={80}
            containerStyle={styles.ShopItemIcon}
            type="font-awesome"
            color={'black'}
          />
        </View>
        <Text style={{fontSize: 25, alignSelf: 'center'}}>
          Your Wishlist is Empty
        </Text>
        <Text style={{fontSize: 15, alignSelf: 'center'}}>
          Add a product to the Wishlist
        </Text>
        <TouchableOpacity
          style={styles.ShoppingButton}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate('Category')}>
          <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 20}}>
            Shop Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmptyWishlist;
