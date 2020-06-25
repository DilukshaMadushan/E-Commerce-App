import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,SafeAreaView } from "react-native";
import { connect } from "react-redux";
import styles from './styles';
import Images from "../../common/Images";
import Wishlist from "../Wishlist";
import RatingStars from "../RatingStars";
import { Icon } from 'react-native-elements';


function Item({ItemName,ItemPrice,item,uri,navigation}) {
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ItemView',{'item':item})}>
          <Image style={styles.itemImage} source={{uri:uri}}></Image>
        </TouchableOpacity>
        <View style={{position:'absolute',alignSelf:'flex-end',top:5}}>
          <Wishlist/>
        </View>
      </View>

      <Text style={styles.ItemName}>{ItemName}</Text>
      <Text style={styles.ItemPrice}>{ItemPrice}</Text>
      <View style={{flexDirection:'row',paddingTop:2}}>
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

class CategoryItems extends React.Component{

  state = {
    ItemList:[]
  }

  componentWillMount(){
      this.getItems(this.props.catId);
      
  }

  getItems(id){
  
    fetch('https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category='+id,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
          //'Authorization': ('Bearer '+token)
      }
      
      })
    .then((response) => response.json())
    .then((json) => {
       
       this.setState({ItemList:json});
       console.log(this.state.ItemList[0]);
       //this.setState({MainCategoryList:json.filter(function(cat){return cat.parent == 0;})})
  
    })
  }



  render(){
    return (
      <View>
        <FlatList
          data={this.state.ItemList}
          numColumns={2}
          renderItem={({ item }) => 
          <Item ItemName={item.name} 
                uri={item.images[0].src} 
                item={item}
                ItemPrice={'Rs '+item.price}
                navigation={this.props.navigation}/>}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  }

export default CategoryItems;

