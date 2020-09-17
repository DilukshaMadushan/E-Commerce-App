import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Wishlist from '../Wishlist';
import StarRating from 'react-native-star-rating';
import {connect} from 'react-redux';
import {addcartItem} from '../../store/cartItemRedux';
import {addwishItem, removewishItem} from '../../store/wishlistRedux';

function Item({
  ItemName,
  ItemPrice,
  regularPrice,
  stock_status,
  item,
  uri,
  relatedItem,
  addItemToCart,
  addItemToWishlist,
  removeItemFromWishlist,
  Scroll,
}) {
  item.count = 1;
  if (item.wishlistState != false || item.wishlistState != true) {
    item.wishlistState = false;
  }

  const rate = Math.round(Number(item.average_rating));
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0} 
          onPress={() => {
            console.log(item);
            relatedItem(item);
            //Scroll();
          }}>
          <Image style={styles.itemImage} source={{uri: uri}}></Image>
        </TouchableOpacity>
        <View style={{position: 'absolute', alignSelf: 'flex-end', top: 5}}>
          <Wishlist
            item={item}
            addItemToWishlist={addItemToWishlist}
            removeItemFromWishlist={removeItemFromWishlist}
          />
        </View>
      </View>

      <View style={{alignItems:'center', justifyContent:'center'}}>
          <Text style={styles.ItemName}>{ItemName}</Text>
      </View>
      
      {/* <Text style={styles.ItemPrice}>{ItemPrice}</Text> */}
      {stock_status === 'instock' ? (
            <View></View>
          ) : (
            <Text style={{color: 'red', fontSize: 11, alignSelf: 'center'}}>
              Out of stock!{' '}
            </Text>
          )}

      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
          {(regularPrice===ItemPrice || regularPrice==="")?<View></View>:
          <Text style={styles.ItemDiscount}>{Math.round(((parseFloat(regularPrice)-parseFloat(ItemPrice))/parseFloat(regularPrice))*100)}% OFF</Text>}
          {(regularPrice===ItemPrice || regularPrice==="")?<View></View>:
          <Text style={styles.ItemPriceRegular}>Rs.{regularPrice}</Text>}
          <Text style={styles.ItemPrice}>Rs.{ItemPrice}</Text>
          
      </View>

      <View style={{flexDirection: 'row', paddingTop: 2}}>
        <View style={{flex: 1, paddingEnd: 40, justifyContent: 'center'}}>
          <StarRating
            emptyStar={'star-o'}
            fullStar={'star'}
            iconSet={'FontAwesome'}
            maxStars={5}
            starSize={19}
            starStyle={{
              paddingEnd: 1,
            }}
            disabled={true}
            rating={rate}
            fullStarColor={'rgba(0,179,155,1)'}
          />
        </View>
        <TouchableOpacity 
          activeOpacity={0.6}
          delayPressIn={0} 
          onPress={() => addItemToCart(item)}>
          {/* <Icon
            name="shopping-cart"
            containerStyle={styles.ShopItemIcon}
            type="font-awesome"
            color={'black'}
          /> */}
          <Image
              style={{width:23,height:23, opacity:0.8}}
              source={require('../../images/my-icons/order.png')}></Image>
              
        </TouchableOpacity>
      </View>
    </View>
  );
}

class RelatedProducts extends Component {
  state = {
    isLoading: false,
    itemList: this.props.itemList,
    related_id: this.props.related_ids,
    relatedList: [],
  };

  componentWillMount() {
    this.getItems();
  }

  getItems() {
    const RelatedItemsList = this.props.itemList.filter((items) =>
      this.state.related_id.includes(items.id),
    );
    this.setState({
      relatedList: RelatedItemsList,
    });
    //console.log(this.props.itemList.map((items) => items.id));
    //console.log(this.state.related_id);
  }
  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>
        {this.state.isLoading == false ? (
          <View style={styles.container}>
            {(this.state.relatedList.length>0)?<Text style={{fontSize:22, marginBottom:10}}>Related Products</Text>:<Text></Text>}
            <ScrollView>
              <FlatList
                data={this.state.relatedList}
                numColumns={1}
                horizontal={true}
                renderItem={({item}) => (
                  <Item
                    ItemName={item.name}
                    uri={item.images[0].src}
                    item={item}
                    ItemPrice={item.price}
                    regularPrice={item.regular_price}
                    stock_status={item.stock_status}
                    relatedItem={(item)=>this.props.updateData(item)}
                    addItemToCart={(item)=>this.props.addItemToCart(item)}
                    //wishlist
                    addItemToWishlist={this.props.addItemToWishlist}
                    removeItemFromWishlist={this.props.removeItemFromWishlist}
                    //Scroll
                    Scroll={this.props.Scroll}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: width * 0.7,
            }}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemList: state.relatedProducts.itemList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    addItemToWishlist: (item) => dispatch(addwishItem(item)),
    removeItemFromWishlist: (item) => dispatch(removewishItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProducts);
