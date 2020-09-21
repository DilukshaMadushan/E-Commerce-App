import React, {Component} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
import StarRating from 'react-native-star-rating';
import RatingStars from '../RatingStars';
import RelatedProducts from '../RelatedProducts';
import AddReview from '../Review';
import DropDownMenu from '../DropDownMenu';
import {SliderBox} from 'react-native-image-slider-box';
import Images from '../../common/Images';
import PostAPI from '../../services/PostAPI';
import GetAPI from '../../services/GetApi';
import {connect} from 'react-redux';

import {addcartItem} from '../../store/cartItemRedux';
import {
  addRelatedItemList,
  addHomeItemList2,
} from '../../store/relatedProductsRedux';

const {width, height} = Dimensions.get('window');

class ItemView extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    statusTab: 1,
    item: null,
    isModalVisible: false,
    review: null,
    count: 1,
    previewReview: '',
  };

  componentWillMount() {
    this.setState({item: this.props.item});
    console.log(this.props.item.images);
    console.log('Average ', this.props.item.average_rating);
  }

  //short_description
  Tabs(width, height, description) {
    if (this.state.statusTab === 1) {
      let des_array = [];
      let new_description = '';
      let newLine = '';
      let i = 0;
      while (i < description.length) {
        if (description[i] == '<') {
          if (description[i + 1] == 'b') {
            let j = 2;
            while (description[i + j] !== '>') {
              j = j + 1;
            }
            des_array.push(newLine);
            new_description = new_description + newLine;
            newLine = '';
            i = i + j;
          } else {
            let k = 1;
            while (description[i + k] !== '>') {
              k = k + 1;
            }
            if (i + k + 1 < description.length) {
              i = i + k;
            } else {
              des_array.push(newLine);
              new_description = new_description + newLine;
            }
          }
        } else {
          if (description[i] !== '\n') {
            newLine = newLine + description[i];
          }
        }
        i = i + 1;
      }
      //console.log(this.state.item);
      return (
        <View style={{width: '100%', paddingLeft: 60, paddingTop: 30}}>
          <FlatList
            data={des_array}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Exo-Medium',
                    paddingVertical: 5,
                    fontSize: 15,
                    marginRight: 10,
                  }}></Text>
                <Text style={styles.Description}>{item}</Text>
              </View>
            )}
          />
        </View>
      );
    } else if (this.state.statusTab === 2) {
      return (
        <View>
          <AddReview
            id={this.props.item.id}
            email={this.props.profile_email}
            profile_name={this.props.profile_name}
            toggleModel={(review) => {
              this.setState({review: review, isModalVisible: true});
            }}
          />

          <Modal isVisible={this.state.isModalVisible}>
            <RatingStars toggleModal={(rating) => this.postingReview(rating)} />
          </Modal>
        </View>
      );
    } else if (this.state.statusTab === 3) {
      return <View style={{width: '100%', height: 200}}></View>;
    }
  }

  postingReview(rating) {
    this.setState({isModalVisible: false});
    console.log(
      'Ratinggggg ',
      this.state.item.average_rating,
      'hi ',
      this.state.item.rating_count,
      'Rating my ',
      rating,
    );

    let itemInHomeList = [];
    const itemInList = this.props.itemList.filter((item) => {
      return this.state.item.id === item.id;
    });

    let itemIndex = 0;
    let homeItemIndex = 0;
    if (itemInList.length !== 0) {
      itemIndex = this.props.itemList.indexOf(itemInList[0]);
    } else {
      itemInHomeList = this.props.homeItemList2.filter((item) => {
        return this.state.item.id === item.id;
      });
      homeItemIndex = this.props.homeItemList2.indexOf(itemInHomeList[0]);
    }

    console.log(
      parseFloat(this.state.item.average_rating),
      this.state.item.rating_count,
    );

    const review = this.state.review;
    const average_rating =
      (parseFloat(this.state.item.average_rating) *
        this.state.item.rating_count +
        rating) /
      (this.state.item.rating_count + 1);
    const New_Avarege = Math.round(Number(average_rating));

    // let newItem = this.state.item;
    // newItem.average_rating = New_Avarege;
    // const ratingCount = newItem.rating_count;
    // newItem.rating_count = ratingCount+1;
    // this.setState({item:newItem});

    if (itemInList.length !== 0) {
      let item_List = this.props.itemList;
      item_List[itemIndex].average_rating = New_Avarege;
      item_List[itemIndex].rating_count = item_List[itemIndex].rating_count + 1;
      this.props.addItemList([]);
      this.props.addItemList(item_List);
    } else {
      let home_item_List = this.props.homeItemList2;
      home_item_List[homeItemIndex].average_rating = New_Avarege;
      home_item_List[homeItemIndex].rating_count =
        home_item_List[homeItemIndex].rating_count + 1;
      this.props.addHomeItemList2([]);
      this.props.addHomeItemList2(home_item_List);
    }

    PostAPI.reviewApi(
      JSON.stringify({
        product_id: this.state.item.id,
        review: review,
        reviewer: this.props.profile_name,
        reviewer_email: this.props.profile_email,
        rating: rating,
      }),
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.props._onRefresh();
        this.props.Scroll();
        console.log('This is the responce ', responseJson);
      });
  }

  ItemImageShow() {
    if (this.state.item.images.length == 0) {
      return (
        <Image
          style={styles.ItemImage}
          source={require('../../images/home/man22.jpg')}></Image>
      );
    } else if (this.state.item.images.length == 1) {
      return (
        <Image
          style={styles.ItemImage}
          source={{uri: this.state.item.images[0].src}}></Image>
      );
    } else if (this.state.item.images.length > 1) {
      return (
        <SliderBox
          autoplay={true}
          circleLoop={true}
          style={styles.ItemImage}
          images={this.state.item.images.map((a) => a.src)}></SliderBox>
      );
    }
  }
  updateData = (id) => {
    GetAPI.ItemApi(id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({item: json});
        this.refs._scrollView.scrollTo(0);
      });
  };

  upDateSuggestItem = (item) => {
    this.setState({item: item});
    this.refs._scrollView.scrollTo(0);
  };

  handleItemPasing = (item) => {
    let i = item;
    i.count = this.state.count;
    //item.count = this.state.count;
    this.props.addItemToCart(i);
  };

  render() {
    const rate = Math.round(parseFloat(this.state.item.average_rating));
    return (
      <View style={styles.categoryScreen}>
        <ScrollView style={{padding: 10}} ref="_scrollView">
          {this.ItemImageShow()}
          <Text style={styles.ItemName}>{this.state.item.name}</Text>
          {this.state.item.stock_status == 'instock' ? (
            <View></View>
          ) : (
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                alignSelf: 'center',
                fontFamily: 'Exo-Medium',
              }}>
              Out of stock!{' '}
            </Text>
          )}
          {this.state.item.regular_price === this.state.item.price ||
          this.state.item.regular_price === '' ? (
            <View></View>
          ) : (
            <Text style={styles.ItemDiscount}>
              {Math.round(
                ((parseFloat(this.state.item.regular_price) -
                  parseFloat(this.state.item.price)) /
                  parseFloat(this.state.item.regular_price)) *
                  100,
              )}
              % OFF
            </Text>
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {this.state.item.regular_price === this.state.item.price ||
            this.state.item.regular_price === '' ? (
              <View></View>
            ) : (
              <Text style={styles.ItemPriceRegular}>
                Rs. {this.state.item.regular_price}
              </Text>
            )}
            <Text style={styles.ItemPrice}>Rs. {this.state.item.price}</Text>
          </View>

          <View style={styles.ItemReviews}>
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
              rating={parseFloat(this.state.item.average_rating)}
              fullStarColor={'rgba(0,179,155,1)'}
            />
            <Text style={styles.ReviewNumber}>
              {' '}
              {this.state.item.average_rating} ({this.state.item.rating_count})
            </Text>
          </View>
          {this.state.item.attributes.length > 0 ? (
            <DropDownMenu
              id={this.state.item.id}
              updateData={(val) => this.updateData(val)}
            />
          ) : (
            <View></View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 5,
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              onPress={() => {
                if (this.state.count !== 1) {
                  this.setState({count: this.state.count - 1});
                }
              }}
              style={{
                width: 30,
                backgroundColor: '#f7f8f8',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
                borderWidth: 1,
                borderColor: '#dbdcdc',
              }}>
              <Text
                style={{
                  paddingVertical: 7,
                  color: '#162539',
                  fontFamily: 'Exo-Medium',
                }}>
                -
              </Text>
            </TouchableOpacity>

            <View
              style={{
                width: 50,
                backgroundColor: '#f7f8f8',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#dbdcdc',
              }}>
              <Text
                style={{
                  paddingVertical: 7,
                  color: '#162539',
                  fontFamily: 'Exo-Medium',
                }}>
                {this.state.count.toString()}
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              onPress={() => {
                this.setState({count: this.state.count + 1});
              }}
              style={{
                width: 30,
                backgroundColor: '#f7f8f8',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                borderWidth: 1,
                borderColor: '#dbdcdc',
              }}>
              <Text
                style={{
                  paddingVertical: 7,
                  color: '#162539',
                  fontFamily: 'Exo-Medium',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: width,
              flexDirection: 'row',
              marginTop: 10,
              paddingRight: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              style={
                this.state.statusTab == 1 ? styles.button : styles.buttonPressed
              }
              onPress={() => {
                this.state.statusTab == 1
                  ? this.setState({statusTab: 1})
                  : this.setState({statusTab: 1});
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#162539',
                  fontFamily: 'Exo-Bold',
                }}>
                Description
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              style={
                this.state.statusTab == 2 ? styles.button : styles.buttonPressed
              }
              onPress={() => {
                this.state.statusTab == 2
                  ? this.setState({statusTab: 2})
                  : this.setState({statusTab: 2});
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#162539',
                  fontFamily: 'Exo-Bold',
                }}>
                Reveiws
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              style={
                this.state.statusTab == 3 ? styles.button : styles.buttonPressed
              }
              onPress={() => {
                this.state.statusTab == 3
                  ? this.setState({statusTab: 3})
                  : this.setState({statusTab: 3});
                console.log(this.state.item.images.length);
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#162539',
                  fontFamily: 'Exo-Bold',
                }}>
                Features
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.DescriptionView}>
            {this.Tabs(width, height, this.state.item.short_description)}
          </View>
          {this.state.item.related_ids.length > 0 ? (
            <View style={{marginTop: 10}}>
              <RelatedProducts
                related_ids={this.state.item.related_ids}
                navigation={this.props.navigation}
                updateData={(val) => this.upDateSuggestItem(val)}
                Scroll={this.props.Scroll}
              />
            </View>
          ) : (
            <View />
          )}
        </ScrollView>
        <View style={{flexDirection: 'row', height: 45}}>
          <TouchableOpacity
            style={styles.buttonAddToCart}
            activeOpacity={0.6}
            delayPressIn={0}
            onPress={() => this.handleItemPasing(this.state.item)}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{width: 23, height: 22, opacity: 0.5, marginRight: 10}}
                source={require('../../images/my-icons/order.png')}></Image>

              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  textAlign: 'center',
                  fontFamily: 'Exo-Bold',
                }}>
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonBuyNow}
            activeOpacity={0.6}
            delayPressIn={0}
            onPress={() => {
              let BuyingItem = this.state.item;
              BuyingItem.count = this.state.count;
              this.props.navigation.navigate('Delivery', {
                itemData: {isBuyItem: true, buyItem: [BuyingItem]},
              });
              //this.handleItemPasing(this.state.item);
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                textAlign: 'center',
                fontFamily: 'Exo-Bold',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile_name: state.auth.profile_name,
    profile_email: state.auth.profile_email,
    itemList: state.relatedProducts.itemList,
    homeItemList2: state.relatedProducts.homeItemList2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    addItemList: (item) => dispatch(addRelatedItemList(item)),
    addHomeItemList2: (item) => dispatch(addHomeItemList2(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
