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
import {color} from 'react-native-reanimated';

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
            <Text style={{fontFamily: 'Exo-Medium', color: '#162539'}}>
              cart
            </Text>
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
            <Text style={{fontFamily: 'Exo-Regular', color: '#162539'}}>
              Delivery
            </Text>
            <View style={styles.IconView}>
              <Icon
                name="paper-plane"
                size={15}
                type="font-awesome"
                color={'#162539'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Regular', color: '#162539'}}>
              Payment
            </Text>
            <View style={styles.IconView}>
              <Icon
                name="paypal"
                size={15}
                type="font-awesome"
                color={'#162539'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Regular', color: '#162539'}}>
              Order
            </Text>
            <View style={styles.IconView}>
              <Icon name="flag" size={20} type="Entypo" color={'#162539'} />
            </View>
          </View>
        </View>

        <View style={styles.TotalPrice}>
          <Text
            style={{
              fontFamily: 'Exo-Bold',
              color: '#162539',
              fontSize: 20,
              flex: 1,
            }}>
            Total Price
          </Text>
          <Text
            style={{fontFamily: 'Exo-Bold', color: '#162539', fontSize: 20}}>
            Rs. {this.props.TotalPrice}
          </Text>
        </View>

        <ScrollView style={styles.SelectedItemsView}>
          <SelectedItem navigation={this.props.navigation} />
          <View style={{height: 10}}></View>
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
