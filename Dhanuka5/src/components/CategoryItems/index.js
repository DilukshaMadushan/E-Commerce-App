import React, {Component} from 'react';
import {
  View,
  FlatList,
  Picker,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
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
import {ScrollView} from 'react-native-gesture-handler';

function Item({ItemName, ItemPrice, item, images, navigation, addItemToCart}) {
  item.count = 1;
  const rate = Math.round(Number(item.average_rating));
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('ItemView', {item: item})}>
          <Image
            style={styles.itemImage}
            source={
              images.length !== 0
                ? {uri: images[0].src}
                : require('../../images/home/man22.jpg')
            }></Image>
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
    page: 1,
  };

  componentWillMount() {
    this.getItems(this.props.catId, this.state.page);
  }

  getItems(id, page) {
    this.setState({isLoading: true});
    GetAPI.categoryItemsApi(id, page)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        this.setState({ItemList: json});
        this.setState({isLoading: false});
        this.props.addRelatedItemList(json);
      });
  }
  pageCal(cal) {
    const pageCal = this.state.page;
    if (cal == 'minus') {
      if (pageCal != 1) {
        const pageCalNew = pageCal - 1;
        this.setState({page: pageCalNew});
        this.getItems(this.props.catId, pageCalNew);
      }
    } else if (cal == 'plus') {
      const pageCalNew = pageCal + 1;
      this.setState({page: pageCalNew});
      this.getItems(this.props.catId, pageCalNew);
    }
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
                    margin: 10,
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
                <ScrollView
                  style={{
                    height: '88%',
                  }}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      margin: 10,
                    }}>
                    {this.state.page != 1 ? (
                      <TouchableOpacity
                        style={styles.pageButton}
                        onPress={() => this.pageCal('minus')}>
                        <Text style={styles.pageButtonText}>Previous</Text>
                      </TouchableOpacity>
                    ) : (
                      <View style={{width: 100}} />
                    )}

                    <Text
                      style={{
                        flex: 1,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontWeight: 'bold',
                      }}>
                      {this.state.page}
                    </Text>
                    <TouchableOpacity
                      style={styles.pageButton}
                      onPress={() => this.pageCal('plus')}>
                      <Text style={styles.pageButtonText}>Next</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
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
