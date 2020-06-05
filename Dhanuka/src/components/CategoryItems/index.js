import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,SafeAreaView } from "react-native";
import { connect } from "react-redux";

import styles from './styles';
import Images from "../../common/Images";
import Wishlist from "../Wishlist";
import RatingStars from "../RatingStars";
import { Icon } from 'react-native-elements';


const DATA = [
  {
    id: '1',
    ItemName: 'First Item',
    ItemPrice:'10$',
    uri:Images.default_Item,
  },
  {
    id: '2',
    ItemName: 'Second Item',
    ItemPrice:'20$',
    uri:Images.default_Item_2,
  },
  {
    id: '3',
    ItemName: 'Third Item',
    ItemPrice:'30$',
    uri:Images.default_Item_3,
  },
  {
    id: '4',
    ItemName: 'Fourth Item',
    ItemPrice:'40$',
    uri:Images.default_Item_4,
  },
  {
    id: '5',
    ItemName: 'Fifth Item',
    ItemPrice:'50$',
    uri:Images.default_Item_5,
  },
  {
    id: '6',
    ItemName: 'Sixth Item',
    ItemPrice:'60$',
    uri:Images.default_Item_6,
  },
  {
    id: '7',
    ItemName: 'Seventh Item',
    ItemPrice:'70$',
    uri:Images.default_Item_7,
  },
  {
    id: '8',
    ItemName: 'Eightth Item',
    ItemPrice:'80$',
    uri:Images.default_Item_8,
  },
];


function Item({id,ItemName,ItemPrice,uri}) {
  return (
    <View style={styles.item}
                      activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image style={styles.itemImage} source={uri}></Image>
        </TouchableOpacity>
        <SafeAreaView style={{position:'absolute',alignSelf:'flex-end',top:0}}>
          <Wishlist/>
        </SafeAreaView>
      </View>
      <Text style={styles.ItemName}>{ItemName}</Text>
      <Text style={styles.ItemPrice}>{ItemPrice}</Text>
      <View style={{flexDirection:'row',}}>
        <View style={{flex:1,paddingEnd:40,justifyContent:'center'}}>
          <RatingStars/>
        </View>
        <TouchableOpacity>
          <Icon name='shopping-cart'
                containerStyle={styles.ShopItemIcon}
                type='font-awesome'
                color={'black'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

class CategoryItems extends Component {

  render() {
    return (
      <View style={{paddingBottom:10,paddingTop:10}}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => 
          <Item ItemName={item.ItemName} 
                uri={item.uri} 
                id={item.id}
                ItemPrice={item.ItemPrice}/>}
          keyExtractor={item => item.id}
        />
        <Text onPress={()=>this.props.navigation.navigate('ItemView')} style={{fontSize:25}}>Can't Go(Component)</Text>
      </View>
    );
  }
}
  
export default CategoryItems;

