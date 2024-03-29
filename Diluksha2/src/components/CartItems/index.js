import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import SelectedItem from '../SelectedItem';
import styles from './styles';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';

class CartItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Upper}>
          <View style={styles.Cross}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}></View>
          </View>
          <View style={styles.UpperItems}>
            <Text>cart</Text>
            <View style={(styles.IconView, styles.Border)}>
              <Icon
                name="shopping-cart"
                size={15}
                type="font-awesome"
                color={'#f7941d'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text>Delivery</Text>
            <View style={styles.IconView}>
              <Icon
                name="paper-plane"
                size={15}
                type="font-awesome"
                color={'black'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text>Payment</Text>
            <View style={styles.IconView}>
              <Icon
                name="paypal"
                size={15}
                type="font-awesome"
                color={'black'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text>Order</Text>
            <View style={styles.IconView}>
              <Icon name="flag" size={20} type="Entypo" color={'black'} />
            </View>
          </View>
        </View>

        <View style={styles.TotalPrice}>
          <Text style={{fontWeight: 'bold', fontSize: 20, flex: 1}}>
            Total Price
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Rs. {this.props.TotalPrice}
          </Text>
        </View>
        
        <ScrollView style={styles.SelectedItemsView}>
          <SelectedItem navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TotalPrice: state.cartItems.totalPrice,
  };
};

export default connect(mapStateToProps, null)(CartItems);
