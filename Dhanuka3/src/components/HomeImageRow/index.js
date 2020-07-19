import React, { Component } from 'react';
import {Text,View,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native';

import styles from './styles';
import { Icon } from 'react-native-elements';

import Wishlist from "../Wishlist";
import RatingStars from "../RatingStars";

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


class HomeImageRow extends Component {
  
    state={  
      ItemList:[],
    }

    componentWillMount(){
        this.getItems();  
    }

    getItems(){
    
      fetch('https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category=192',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            //'Authorization': ('Bearer '+token)
          }
        })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ItemList:json});
      })
    }
    render(){
      return (
        <View style={styles.container}>
          <ScrollView>
            <FlatList
              data={this.state.ItemList}
              numColumns={1}
              horizontal={true}
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
          </ScrollView>
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

export default connect(null,mapDispatchToProps)(HomeImageRow);

/*



  state = {height:0,autoPlay:false}

constructor(props){
  super(props)
  this._goToNextPage = this._goToNextPage.bind(this)
  this._onScroll = this._onScroll.bind(this)
  this._startAutoPlay = this._startAutoPlay.bind(this)
  this._stopAutoPlay = this._stopAutoPlay.bind(this)
  this._onScrollViewLayout = this._onScrollViewLayout.bind(this)

  this._currentIndex=0;
  this._childrenCount=5;
}

componentDidMount(){
  if(this.state.autoPlay) this._startAutoPlay()
  else this._startAutoPlay
}




        <ScrollView //horizontal={true}
                    onLayout={this._onScrollViewLayout}
                    onScroll={this._onScroll}
                    ref={SCROLLVIEW_REF}
                    pagingEnabled={true}
                    scrollEventThrottle={8}
                    
        >


          <View style={styles.Images}>
              <ImageBackground source={Images.HomeSlide01}
                              style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                <Text style={{color:"gray",fontSize:10,paddingTop:2,paddingLeft:124}}>T-Shirts</Text>
                <Text style={{paddingLeft:88,fontSize:13}}>THE OFFICE</Text>
                <Text style={{paddingLeft:133,fontSize:13}}>LIFE</Text>     
              </ImageBackground>
          </View>
          <View style={styles.Images}>
              <ImageBackground source={Images.HomeSlide02}
                              style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                            
                <Text style={{color:"gray",fontSize:10,paddingTop:60,paddingLeft:5}}>Dress</Text>
                <Text style={{paddingLeft:5,fontSize:13}}>ELEGANT</Text>
                <Text style={{paddingLeft:5,fontSize:13}}>DESIGN</Text> 
              </ImageBackground>
          </View>
          <View style={styles.Images}>
              <ImageBackground source={Images.HomeSlide01}
                              style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                <Text style={{color:"gray",fontSize:10,paddingTop:2,paddingLeft:124}}>T-Shirts</Text>
                <Text style={{paddingLeft:88,fontSize:13}}>THE OFFICE</Text>
                <Text style={{paddingLeft:133,fontSize:13}}>LIFE</Text>     
              </ImageBackground>
          </View>
          <View style={styles.Images}>
              <ImageBackground source={Images.HomeSlide02}
                              style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                            
                <Text style={{color:"gray",fontSize:10,paddingTop:60,paddingLeft:5}}>Dress</Text>
                <Text style={{paddingLeft:5,fontSize:13}}>ELEGANT</Text>
                <Text style={{paddingLeft:5,fontSize:13}}>DESIGN</Text> 
              </ImageBackground>
          </View>


_onScroll(event){
  let{y} = event.nativeEvent.contentOffset, offset, position = Math.floor(y/this.state.height)
  if(y === this._preScrollY ) return;
  this._preScrollY = y 
  offset = y/this.state.height - position

  if(offset === 0)
  this._currentIndex = position
  this._timerId = setInterval(this._goToNextPage,3000)
}

_onScrollViewLayout(event){
  let{height} = event.nativeEvent.layout
  this.setState({height:height}) 
}

_goToNextPage(){
  this._stopAutoPlay()
  let nextIndex = (this._currentIndex +1) % this._childrenCount;
  this.refs[SCROLLVIEW_REF].scrollTo({y:this.state.height * nextIndex}) 
}  


_startAutoPlay(){
  this._timerId = setInterval(this._goToNextPage,3000)
}

_stopAutoPlay(){
  if(this._timerId){
    clearInterval(this._timerId)
    this._timerId=null
  }
}

*/