import React, { Component } from 'react';
import {Text,View,ImageBackground,FlatList,ScrollView,TouchableOpacity,Dimensions} from 'react-native';

import Images from '../../common/Images';
import styles from './styles';


function Item({ItemName,ItemPrice,item,uri,navigation}) {
  item.count = 1;
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.Images}>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('ItemView',{'item':item})}>
        <ImageBackground  source={{uri:uri}}
                          style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>  
        </ImageBackground>
        <View style={{width:width/2*0.9, height:50, borderRadius:3}}>
          <Text style={{color:"gray",fontSize:13,paddingTop:2}}>{ItemName}</Text>
          <Text style={{fontSize:13}}>{ItemPrice}</Text>
        </View> 
      </TouchableOpacity>
    </View>
  );
}


class HomeImageRow2 extends Component {
  
    state={  
      ItemList:[],
    }

    componentWillMount(){
        this.getItems();  
    }

    getItems(){
    
      fetch('https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&category=229',{
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
                    navigation={this.props.navigation}
              />}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>

    );
  }
}

export default HomeImageRow2;

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