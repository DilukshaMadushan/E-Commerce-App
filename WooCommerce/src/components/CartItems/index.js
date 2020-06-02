import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions, } from "react-native";
import { connect } from "react-redux";

import SelectedItem from '../SelectedItem';

import Images from "../../common/Images";
import styles from "./styles";
import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("window");

class CartItems extends Component {

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.Upper}>
                <View style={styles.Cross}>
                </View>
                <View style={styles.UpperItems}>
                    <Text>cart</Text>
                    <View style={styles.ItemBorder}>
                        <Icon name='shopping-cart'
                            size={25}
                            containerStyle={styles.UpperItemIcons}
                            type='font-awesome'
                            color={'black'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Delivery</Text>
                    <View style={styles.ItemBorder}>
                        <Icon name='paper-plane'
                            size={25}
                            containerStyle={styles.UpperItemIcons}
                            type='font-awesome'
                            color={'black'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Payment</Text>
                    <View style={styles.ItemBorder}>
                        <Icon name='paypal'
                            size={25}
                            containerStyle={styles.UpperItemIcons}
                            type='font-awesome'
                            color={'black'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Order</Text>
                    <View style={styles.ItemBorder}>
                        <Icon name='flag'
                            size={25}
                            containerStyle={styles.UpperItemIcons}
                            type='Entypo'
                            color={'black'}/>
                    </View>
                </View>
            </View>
            <View style={styles.SelectedItemsView}>
                <SelectedItem/>
            </View>
        </View>

      );
    }
  }
    
  export default CartItems;