import React, { Component  } from 'react';
import {StyleSheet,View,ScrollView,TouchableOpacity,Text } from 'react-native';

import ItemView from '../components/ItemView';

 class ItemViewScreen extends Component {

  render() {
    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <ItemView item={this.props.navigation.getParam('item')}/>
          </ScrollView>
          <View style={{flexDirection:'row',height:45}}>
            <TouchableOpacity style={styles.buttonAddToCart} 
                              activeOpacity={0.5}>
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBuyNow} activeOpacity={0.5} 
                              onPress={()=>this.props.navigation.navigate('Delivery')}>
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