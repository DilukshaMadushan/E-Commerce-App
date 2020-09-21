import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import {Icon} from 'react-native-elements';

class EmptyMyOrders extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          {/* <Icon
            name="shopping-cart"
            size={80}
            containerStyle={styles.ShopItemIcon}
            type="font-awesome"
            color={'black'}
          /> */}
          <Image
            style={{width: 80, height: 80, opacity: 0.7, marginBottom: 10}}
            source={require('../../../images/my-icons/order.png')}></Image>
        </View>
        <Text
          style={{
            fontSize: 25,
            alignSelf: 'center',
            fontFamily: 'Exo-Regular',
            color: '#162539',
          }}>
          Your order list is Empty
        </Text>
        <Text
          style={{
            fontSize: 15,
            alignSelf: 'center',
            fontFamily: 'Exo-Regular',
            color: '#162539',
          }}>
          Add a product to the shopping cart and Order New
        </Text>
        <TouchableOpacity
          style={styles.ShoppingButton}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate('Category')}>
          <Text style={{color: '#FFF', fontFamily: 'Exo-Bold', fontSize: 20}}>
            Shop Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmptyMyOrders;
