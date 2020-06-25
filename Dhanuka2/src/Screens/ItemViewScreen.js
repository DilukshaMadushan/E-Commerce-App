import React, { useState  } from 'react';
import {StyleSheet,View,Dimensions,ScrollView,TouchableOpacity,Text } from 'react-native';
import { connect } from "react-redux";
import Color from '../common/Color';

import ItemView from '../components/ItemView';

 class ItemViewScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    const { categories, onViewProductScreen } = this.props;

    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <ItemView item={this.props.navigation.getParam('item')}/>
          </ScrollView>
          <View style={{flexDirection:'row',height:45}}>
            <TouchableOpacity style={styles.buttonAddToCart} activeOpacity={0.5}>
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBuyNow} activeOpacity={0.5}>
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
  },
  buttonAddToCart:{
    flex:1,
    backgroundColor:'rgba(250,120,120,0.8)',
    paddingVertical:5,
    justifyContent:'center'
  },
  buttonBuyNow:{
    flex:1,
    backgroundColor:'rgba(0, 179, 155,0.7)',
    paddingVertical:5,
    justifyContent:'center'
  }
});


export default ItemViewScreen;