import React, {Component} from 'react';
import {
  View,
  FlatList,
  Picker,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import Wishlist from '../Wishlist';
import StarRating from 'react-native-star-rating';
import EmptyItems from './EmptyItems';
// import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {addcartItem} from '../../store/cartItemRedux';
import {addRelatedItemList} from '../../store/relatedProductsRedux';
import GetAPI from '../../services/GetApi';
import Spinner from 'react-native-loading-spinner-overlay';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';


function Item({ItemName, ItemPrice, regularPrice, stock_status, item, images, navigation, addItemToCart}) {
  item.count = 1;
  const rate = Math.round(Number(item.average_rating));
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <View style={styles.itemView}>
        <TouchableOpacity
          activeOpacity={0.5}
          delayPressIn={0}
          onPress={() => navigation.navigate('ItemView', {item: item})}>
          <Image
            style={styles.itemImage}
            source={
              (images.length !== 0)
                ? {uri: images[0].src}
                : require('../../images/home/man22.jpg')
            }></Image>
        </TouchableOpacity>
        <View style={{position: 'absolute', alignSelf: 'flex-end', top: 5}}>
          <Wishlist item={item} />
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
            rating={Math.round(parseFloat(item.average_rating))}
            fullStarColor={'rgba(0,179,155,1)'}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0} 
          onPress={() => addItemToCart(item)}>

            {/* <Icon name="shopping-cart" size={23} color="black" style={styles.ShopItemIcon}/> */}
            <Image
              style={{width:23,height:23, opacity:0.8}}
              source={require('../../images/my-icons/order.png')}></Image>

          {/* <Icon
            name="shopping-cart"
            containerStyle={styles.ShopItemIcon}
            type="font-awesome"
            color={'black'}
          /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

class CategoryItems extends Component {
  state = {
    ItemList: [],
    isLoading: true,
    pickerSelectedValue: 'date&order=desc',
    page: 1,
    isSubCatModelVisible:false,
    categoryId:null,
    subCategoryArray:[],
    categoryName:null,
    refreshing:false,
    moreDataIsLoading:false
  };

  componentWillMount() {
    const id=this.props.catId;
    this.setState({categoryId:id});
    const subArray = this.props.categoryList.filter(function (cat) {
      return cat.parent == id;
    });
    this.setState({subCategoryArray: subArray  });
    this.setState({categoryName:this.props.catName});

    this.getItems(this.props.catId, this.state.page, this.state.pickerSelectedValue);

  }

  getItems(id, page, sort) {
    this.setState({isLoading: true});
    GetAPI.categoryItemsApi(id, page, sort)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ItemList: json});
        //console.log(json[0].images);
        this.setState({isLoading: false});
        this.setState({refreshing:false});
        this.props.addRelatedItemList(json);
        
      });
  }

  onRefreshGetItems(id, page, sort) {
    this.setState({refreshing:true});
    GetAPI.categoryItemsApi(id, page, sort)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ItemList: json});
        //console.log(json[0].images);
        
        this.setState({refreshing:false});
        this.props.addRelatedItemList(json);
        
      });
  }

  onGetMoreData(id, page, sort) {
    this.setState({moreDataIsLoading:true});
    GetAPI.categoryItemsApi(id, page, sort)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        this.setState({moreDataIsLoading:false});
        const allItems = this.state.ItemList.concat(json);
        this.setState({ItemList:allItems });
        this.props.addRelatedItemList(allItems);
        this.setState({page:this.state.page+1});
        
      });
  }
  
  pageCal(cal) {
    const pageCal = this.state.page;
    if (cal == 'minus') {
      if (pageCal != 1) {
        const pageCalNew = pageCal - 1;
        this.setState({page: pageCalNew});
        this.getItems(this.state.categoryId, pageCalNew, this.state.pickerSelectedValue);
      }
    } else if (cal == 'plus') {
      const pageCalNew = pageCal + 1;
      this.setState({page: pageCalNew});
      this.getItems(this.state.categoryId, pageCalNew, this.state.pickerSelectedValue);
    }
  }

  show = (value) => {
    this.setState({pickerSelectedValue: value});
    if (value == '1') {
      this.setState({pickerSelectedValue:'title&order=asc'});
      this.setState({page:1});
      this.getItems(this.state.categoryId, 1, 'title&order=asc');
    } else if (value == '2') {
      this.setState({pickerSelectedValue:'price&order=asc'});
      this.setState({page:1});
      this.getItems(this.state.categoryId, 1, 'price&order=asc');
    } else if (value == '3') {
      this.setState({pickerSelectedValue:'rating&order=asc'});
      this.setState({page:1});
      this.getItems(this.state.categoryId, 1, 'rating&order=asc');
    }
  };

  getMoreItems=()=>{
    // console.log("Fuck ya");
    // alert("Fuck ya")
    this.onGetMoreData(this.state.categoryId, this.state.page+1, this.state.pickerSelectedValue);
  }

  refreshItems=()=>{
    this.setState({page:1});
    this.onRefreshGetItems(this.state.categoryId, 1, this.state.pickerSelectedValue);
  }                   

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>
        {this.state.isLoading === false ? (
          <View>
            {this.props.itemList.length > 0 ? (
              <View>
                <View
                  style={{
                    flexDirection:'row'
                  }}>
                  <View style={{flex:1.5}}>
                    <TouchableOpacity
                        disabled={this.state.subCategoryArray.length==0}
                        activeOpacity={0.5}
                        delayPressIn={0}
                        style={{marginTop:11}}
                        onPress={() => {
                          this.setState({isSubCatModelVisible:true});
                          this.setState({categoryId:this.props.catId});
                          
                        }}
                      >
                        <View style={{flexDirection:'row', marginLeft:10}}>
                            <Icon name="sliders" size={22} color="#696969" />
                            <Text style={{fontSize:16, marginLeft:10, color: "#696969"}}>{this.state.categoryName}</Text>
                        </View>
                      </TouchableOpacity>
                  </View>
                  <View style={{flex:1,width:width/2}}>
                    <Picker
                      
                      mode="dropdown"
                      selectedValue={this.state.pickerSelectedValue}
                      onValueChange={this.show}>
                      <Picker.Item label="Sort By" value="0" color="gray" />
                      <Picker.Item label="A-Z" value="1" />
                      <Picker.Item label="Price" value="2" />
                      <Picker.Item label="Rating" value="3" />
                    </Picker>
                  </View>
                  
                  
                </View>

                <View>
                  <Modal isVisible={this.state.isSubCatModelVisible}>
                    <View style={{
                            //height: '50%',
                            backgroundColor: '#FFF',
                            borderRadius: 10,
                            padding: 15,
                          }}>
                      <ScrollView>
                        <Text style={{fontSize:23, alignSelf:'center'}}>Select a Sub Category</Text>
                        
                        <FlatList
                          style={{marginTop:10}}
                          data={this.state.subCategoryArray}
                          renderItem={({item}) => (
                            <TouchableOpacity
                              style={{marginTop:10}}
                              activeOpacity={0.6}
                              delayPressIn={0}
                              onPress={() => {
                                  this.setState({page:1});
                                  this.setState({categoryId:item.id});
                                  this.setState({categoryName:item.name});
                                  this.getItems(item.id, 1, this.state.pickerSelectedValue);
                                  this.setState({isSubCatModelVisible:false});
                              }}
                              >
                              <Text style={{fontSize:20, color:'gray', alignSelf:'center'}}>{item.name}</Text>
                            
                            </TouchableOpacity>
                          )}
                          //keyExtractor={(item) => item.id}
                        />

                      </ScrollView>
                      
                      <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
                        <TouchableOpacity
                          style={{paddingVertical:7, backgroundColor:'#f7941d', borderRadius:5, width:width*0.4, marginRight:5}}
                          activeOpacity={0.6}
                          delayPressIn={0}
                          onPress={() => {this.setState({isSubCatModelVisible:false}); }}
                          >
                          <Text
                            style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                            Cancel
                          </Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </Modal>
                </View>
                <View
                  style={{
                    height: '92%',
                  }}>
                  <FlatList
                    data={this.props.itemList}
                    numColumns={2}
                    refreshing={this.state.refreshing}
                    onRefresh={this.refreshItems}
                    keyExtractor={(item, index) => item.id.toString()}
                    onEndReached={this.getMoreItems}
                    onEndReachedThreshold={1}
                    renderItem={({item}) => (

                      <Item
                        ItemName={item.name}
                        images={item.images}
                        item={item}
                        ItemPrice={item.price}
                        regularPrice={item.regular_price}
                        stock_status={item.stock_status}
                        navigation={this.props.navigation}
                        addItemToCart={this.props.addItemToCart}
                      />

                    )}
                    // keyExtractor={(item) => item.id}
                  />
                  {(this.state.moreDataIsLoading)?<View style={{alignItems:'center', justifyContent:'center'}}>
                    <ActivityIndicator size="large" color="#FF8C00" />
                  </View>:<View></View>}
                  {/* <View
                    style={{
                      flexDirection: 'row',
                      margin: 10,
                    }}>
                    {this.state.page != 1 ? (
                      <TouchableOpacity
                        activeOpacity={0.5}
                        delayPressIn={0}
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
                      activeOpacity={0.5}
                      delayPressIn={0}
                      style={styles.pageButton}
                      onPress={() => this.pageCal('plus')}>
                      <Text style={styles.pageButtonText}>Next</Text>
                    </TouchableOpacity>
                  </View> */}
                </View>
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
            
            <ActivityIndicator size="large" color="#FF8C00" />
            
            {/* <Spinner
              visible={this.state.isLoading}
              textContent={'Loading...'}
              
            /> */}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemList: state.relatedProducts.itemList,
    categoryList: state.categoryListRedux.categoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    addItemToWishlist: (item) => dispatch(addwishItem(item)),
    removeItemFromWishlist: (item) => dispatch(removewishItem(item)),
    addRelatedItemList: (item) => dispatch(addRelatedItemList(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItems);
