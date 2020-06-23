import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions, } from "react-native";
import { connect } from "react-redux";

import SelectedItem from '../SelectedItem';

import Images from "../../common/Images";
import styles from "./styles";
import { Icon } from 'react-native-elements';


class CartItems extends React.Component{
    render(){
      return (
        <View style={styles.container}>
            <View style={styles.Upper}>
                <View style={styles.Cross}></View>
                <View style={styles.UpperItems}>
                    <Text>cart</Text>
                    <View style={styles.IconView,styles.Border}>
                        <Icon name='shopping-cart'
                              size={15}
                              type='font-awesome'
                              color={'rgba(0, 179, 155,1)'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Delivery</Text>
                    <View style={styles.IconView}>
                        <Icon name='paper-plane'
                            size={15}
                            type='font-awesome'
                            color={'black'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Payment</Text>
                    <View style={styles.IconView}>
                        <Icon name='paypal'
                            size={15}
                            type='font-awesome'
                            color={'black'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Order</Text>
                    <View style={styles.IconView}>
                        <Icon name='flag'
                            size={20}
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