import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions, } from "react-native";
import { connect } from "react-redux";

import Images from "../../common/Images";
import styles from "./styles";
import { Icon } from 'react-native-elements';


const { width, height } = Dimensions.get("window");

class EmptyCart extends Component {

    render() {
      return (
        <View style={styles.container}>
            <View>
            <Icon name='shopping-cart'
                size={80}
                containerStyle={styles.ShopItemIcon}
                type='font-awesome'
                color={'black'}/>
            </View>
            <Text style={{fontSize:25,alignSelf:'center'}}>Your Cart is Empty</Text>
            <Text style={{fontSize:15,alignSelf:'center'}}>Add a product to the shopping cart</Text>
            <TouchableOpacity style={styles.ShoppingButton}
                              activeOpacity={0.5}>
                <Text style={{color:'black',
                              fontWeight:'bold',
                              fontSize:20
                              }}>Shop Now</Text>
            </TouchableOpacity>
        </View>

      );
    }
  }
    
  export default EmptyCart;