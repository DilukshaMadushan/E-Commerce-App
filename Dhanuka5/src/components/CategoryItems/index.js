import React, {Component} from 'react';
import {
  View,
  FlatList,
  Picker,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import styles from './styles';
import Wishlist from '../Wishlist';
import StarRating from 'react-native-star-rating';
import EmptyItems from './EmptyItems';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {addcartItem} from '../../store/cartItemRedux';
import {addRelatedItemList} from '../../store/relatedProductsRedux';
import GetAPI from '../../services/GetApi';
import Spinner from 'react-native-loading-spinner-overlay';

function Item({ItemName, ItemPrice, item, images, navigation, addItemToCart}) {
  item.count = 1;
  const rate = Math.round(Number(item.average_rating));
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ItemView', {item: item})}>
          <Image style={styles.itemImage} source={(images.length!==0)?{uri:images[0].src}:require("../../images/home/man22.jpg")}></Image>
        </TouchableOpacity>
        <View style={{position: 'absolute', alignSelf: 'flex-end', top: 5}}>
          <Wishlist item={item} />
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

class CategoryItems extends Component {
  state = {
    ItemList: [],
    isLoading: true,
    pickerSelectedValue: '0',
  };

  componentWillMount() {
    this.getItems(this.props.catId);
  }

  getItems(id) {
    GetAPI.categoryItemsApi(id)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        this.setState({ItemList: json});
        this.setState({isLoading: false});
        this.props.addRelatedItemList(json);
        //console.log(this.props.catId)
        //this.setState({MainCategoryList:json.filter(function(cat){return cat.parent == 0;})})
      });
  }

  show = (value) => {
    this.setState({pickerSelectedValue: value});
    if (value == '1') {
      this.state.ItemList.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    } else if (value == '2') {
      this.state.ItemList.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (value == '3') {
      this.state.ItemList.sort(function (b, a) {
        return parseFloat(a.average_rating) - parseFloat(b.average_rating);
      });
    }
  };

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>
        {this.state.isLoading == false ? (
          <View>
            {this.state.ItemList.length > 0 ? (
              <View>
                <View
                  style={{
                    backgroundColor: 'rgba(200,200,200,0.5)',
                    marginBottom: 15,
                  }}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.pickerSelectedValue}
                    onValueChange={this.show}>
                    <Picker.Item label="Sort By" value="0" color="gray" />
                    <Picker.Item label="Alphabetical Order" value="1" />
                    <Picker.Item label="Price" value="2" />
                    <Picker.Item label="Rating" value="3" />
                  </Picker>
                </View>
                <FlatList
                  data={this.state.ItemList}
                  numColumns={2}
                  renderItem={({item}) => (
                    <Item
                      ItemName={item.name}
                      images={item.images}
                      item={item}
                      ItemPrice={'Rs ' + item.price}
                      navigation={this.props.navigation}
                      addItemToCart={this.props.addItemToCart}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>
            ) : (
              <EmptyItems navigation={this.props.navigation} />
            )}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: width * 0.8,
              marginBottom: width * 1.3,
            }}>
            <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              />
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
    addRelatedItemList: (item) => dispatch(addRelatedItemList(item)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItems);
