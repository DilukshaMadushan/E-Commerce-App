import React, { Component } from "react";
import { View, FlatList,Picker, Image, Text,TouchableOpacity,SafeAreaView, Dimensions, ActivityIndicator, StatusBar ,Alert} from "react-native";

import styles from './styles';
import Wishlist from "../Wishlist";
import RatingStars from "../RatingStars";
import { Icon } from 'react-native-elements';

import {connect} from 'react-redux';
import {addcartItem} from "../../store/cartItemRedux";
import {addwishItem,removewishItem} from "../../store/wishlistRedux";


function Item({ItemName,ItemPrice,item,uri,ItemRate,navigation,addItemToCart,addItemToWishlist,removeItemFromWishlist}) {
  item.count = 1;
  if(item.wishlistState!=false || item.wishlistState!=true){
    item.wishlistState=false;
  }
  
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ItemView',{'item':item})}>
          <Image style={styles.itemImage} source={{uri:uri}}></Image>
        </TouchableOpacity>
        <View style={{position:'absolute',alignSelf:'flex-end',top:5}}>
          <Wishlist item={item} addItemToWishlist={addItemToWishlist} removeItemFromWishlist={removeItemFromWishlist}/>
        </View>
      </View>

      <Text style={styles.ItemName}>{ItemName}</Text>
      <Text style={styles.ItemPrice}>{ItemPrice}</Text>
      <View style={{flexDirection:'row',paddingTop:2}}>
        <View style={{flex:1,paddingEnd:40,justifyContent:'center'}}>
          <RatingStars ItemRate={ItemRate}/>
        </View>
        <TouchableOpacity onPress={()=>addItemToCart(item)}>
          <Icon name='shopping-cart'
                containerStyle={styles.ShopItemIcon}
                type='font-awesome'
                color={'black'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

class CategoryItems extends Component{

  state = {
    ItemList:[],
    isLoading:true,
    pickerSelectedValue:"0"
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
      console.log(json);
       this.setState({ItemList:json});
       this.setState({isLoading:false});
       console.log(this.props.catId)
       //this.setState({MainCategoryList:json.filter(function(cat){return cat.parent == 0;})})
  
    })
  }

  show=(value)=>{
    this.setState({pickerSelectedValue:value});
    if (value=="1"){
      this.state.ItemList.sort(function(a, b) { 
        return a.name.localeCompare(b.name);
      });
      
    }else if (value=="2"){
      this.state.ItemList.sort(function(a, b) { 
        return parseFloat(a.price) - parseFloat(b.price);
      });

    }else if(value=="3"){
      this.state.ItemList.sort(function(b, a) { 
        return parseFloat(a.average_rating) - parseFloat(b.average_rating);
      });
    }
  }



  render(){
    const { width } = Dimensions.get('window');
    return (
      <View>
      {(this.state.isLoading==false)?
      <View>
        <View>
            <Picker
              selectedValue = {this.state.pickerSelectedValue}
              onValueChange={this.show}
            >
              <Picker.Item label="Sort By" value="0" color="gray"></Picker.Item>
              <Picker.Item label="Alphabetical Order" value="1"></Picker.Item>
              <Picker.Item label="Price" value="2"></Picker.Item>
              <Picker.Item label="Rating" value="3"></Picker.Item>
            </Picker>
        </View>
        <FlatList
          data={this.state.ItemList}
          numColumns={2}
          renderItem={({ item }) => 
          <Item ItemName={item.name} 
                uri={item.images[0].src} 
                item={item}
                ItemPrice={'Rs '+item.price}
                ItemRate={item.average_rating}
                navigation={this.props.navigation}
                addItemToCart={this.props.addItemToCart}
            //wishlist
                addItemToWishlist={this.props.addItemToWishlist}
                removeItemFromWishlist={this.props.removeItemFromWishlist}
          />}
          keyExtractor={item => item.id}
        />
      </View> : 
      <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:width*0.7}}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
      }
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart:(product) => dispatch(addcartItem(product)),
    addItemToWishlist:(item) => dispatch(addwishItem(item)),
    removeItemFromWishlist:(item) => dispatch(removewishItem(item)),
  }
}

export default connect(null,mapDispatchToProps)(CategoryItems);

