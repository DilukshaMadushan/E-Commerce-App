import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class ShoppingCartIcon extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          onPress={() => {
            this.props.navigation.navigate('Mycart');
          }}>
          {/* <Icon
            name="shopping-cart"
            containerStyle={styles.Icon}
            type="font-awesome"
            color={'black'}
            size={29}
          /> */}
          <Image
              style={{width:29,height:29, marginLeft:5}}
              source={require('../../images/my-icons/order.png')}></Image>
          <View style={styles.Number}>
            <Text style={{color: '#FFF', fontWeight: 'bold', fontSize:13}}>
              {this.props.cartItems.length.toString()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Icon: {
    padding: 1,
  },
  Number: {
    width: 19,
    height: 19,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f36523',
    position: 'absolute',
    opacity:0.8,
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cartList,
  };
};

export default connect(mapStateToProps, null)(ShoppingCartIcon);
