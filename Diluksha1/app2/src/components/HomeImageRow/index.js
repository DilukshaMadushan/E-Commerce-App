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
import GetAPI from '../../services/GetApi';

function Item({
  ItemName,
  ItemPrice,
  item,
  uri,
  ItemRate,
  navigation,
  addItemToCart,
  addItemToWishlist,
  removeItemFromWishlist,
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
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ItemView', {item: item})}>
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

      <Text style={styles.ItemName}>{ItemName}</Text>
      <Text style={styles.ItemPrice}>{ItemPrice}</Text>
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
        <TouchableOpacity onPress={() => addItemToCart(item)}>
          <Icon
            name="shopping-cart"
            containerStyle={styles.ShopItemIcon}
            type="font-awesome"
            color={'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

class HomeImageRow extends Component {
  state = {
    ItemList: [],
    isLoading: false,
  };

  componentWillMount() {
    this.getItems();
  }

  getItems() {
    this.setState({isLoading: true});
    GetAPI.homeImageRowApi()
      .then((response) => response.json())
      .then((json) => {
        this.setState({isLoading: false});
        this.setState({ItemList: json});
      });
  }
  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>
        {this.state.isLoading == false ? (
          <View style={styles.container}>
            <ScrollView>
              <FlatList
                data={this.state.ItemList}
                numColumns={1}
                horizontal={true}
                renderItem={({item}) => (
                  <Item
                    ItemName={item.name}
                    uri={item.images[0].src}
                    item={item}
                    ItemPrice={'Rs ' + item.price}
                    ItemRate={item.average_rating}
                    navigation={this.props.navigation}
                    addItemToCart={this.props.addItemToCart}
                    //wishlist
                    addItemToWishlist={this.props.addItemToWishlist}
                    removeItemFromWishlist={this.props.removeItemFromWishlist}
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
              marginTop: width * 0.1,
            }}>
            <ActivityIndicator />
            <StatusBar barStyle="default" />
          </View>
        )}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    addItemToWishlist: (item) => dispatch(addwishItem(item)),
    removeItemFromWishlist: (item) => dispatch(removewishItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(HomeImageRow);
