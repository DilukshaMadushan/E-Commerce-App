import React from 'react';
import {View, TouchableOpacity, Image, Dimensions, Text, Animated, Easing} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import Images from '../common/Images';
import ItemsScreen from '../Screens/categoryItemsScreen';
import ItemViewScreen from '../Screens/ItemViewScreen';
import deliveryScreen from '../Screens/deliveryScreen';
import paymentScreen from '../Screens/paymentScreen';
import finishOrderScreen from '../Screens/finishOrderScreen';
import myOrdersScreen from '../Screens/myOrdersScreen';
import myWishlistScreen from '../Screens/myWishlistScreen';
import payhereScreen from '../Screens/payhereScreen';
import UpdateProfileScreen from '../Screens/UpdateProfileScreen';
import emailListScreen from '../Screens/emailListScreen';
import ShoppingCartIcon from '../components/ShoppingCartIcon';
import Filters from '../components/Filters';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import PrivacyAndPolicy from '../components/PrivacyAndPolicy';
import Terms from '../components/Terms';
import TabScreen from '../navigations/TabNavigate';

const {width} = Dimensions.get('window');

//making a StackNavigator to export as default
const AppScreens = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: ({navigation, screenProps}) => ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      //headerTintColor: '#633689',
      title: '',
      headerLeft: (
        <View>
          <View style={{alignItems: 'center', marginLeft:7}}>
            <TouchableOpacity
              activeOpacity={0.6}
              delayPressIn={0}
              onPress={() => {
                navigation.openDrawer();
              }}>
              <View>
                <Image
                  source={Images.top_side_icon}
                  style={{
                    width: 18,
                    height: 18,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    //paddingLeft: '13%',
                  }}
                />
              </View>
            </TouchableOpacity>
            
            
            
          </View>
        </View>
      ),
      headerTitle:(
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Image
            style={{width: 150, height: 40}}
            resizeMode="contain"
            source={Images.logo}
          />
        </View>
      ),
      headerRight:(
        <View style={{paddingRight: 15}}>
              <ShoppingCartIcon navigation={navigation} />
        </View>
      )
    }),
  },
  //Category_Items,Items_view
  Items: {
    screen: ItemsScreen,
    navigationOptions: ({navigation, screenProps}) => ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      title: '',
      headerTitle: (<View style={{alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20,fontWeight:'normal'}}>Choose Item</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '27%'},
      headerRight: (
        <View style={{paddingRight: 15}}>
          <ShoppingCartIcon navigation={navigation} />
        </View>
      ),
    }),
  },

  // Items : ItemsScreen,
  ItemView: {
    screen: ItemViewScreen,
    navigationOptions: ({navigation, screenProps}) => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View style={{alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20,fontWeight:'normal'}}>Shop Item</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '32%'},
      headerRight: (
        <View style={{paddingRight: 15}}>
          <ShoppingCartIcon navigation={navigation} />
        </View>
      ),
    }),
  },
  //Delivery_Info
  Delivery: {
    screen: deliveryScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Delivery Infomations</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '16%'},
    }),
  },
  //Payment Methods
  Payment: {
    screen: paymentScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Payment Methods</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: 35},
    }),
  },
  //Thank You/Finish Order
  Finish_Order: {
    screen: finishOrderScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View style={{alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20,fontWeight:'normal'}}>Finish Order</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: 110},
      headerLeft: null,
    }),
  },

  //ContactUs
  ContactUs: {
    screen: ContactUs,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Contact Us</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: 80},
    }),
  },

  //Update Delivery Screen
  UpdateProfile: {
    screen: UpdateProfileScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Update Your Profile</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '17%'},
    }),
  },
  //MyOrdes
  MyOrders: {
    screen: myOrdersScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>My Orders</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '30%'},
    }),
  },
  //MyWishlist
  MyWishlist: {
    screen: myWishlistScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>My Wishlist</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '30%'},
    }),
  },
  //Email List
  EmailList: {
    screen: emailListScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Grocery list</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '17%'},
    }),
  },
  //Privacy And Policy
  PrivacyAndPolicy: {
    screen: PrivacyAndPolicy,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Privacy And Policy</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '20%'},
    }),
  },
  //Terms
  Terms: {
    screen: Terms,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>Terms</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {paddingLeft: '35%'},
    }),
  },
  //AboutUs
  AboutUs: {
    screen: AboutUs,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#FFF',
      },
      title: '',
      headerTitle: (<View><Text style={{fontSize:20,fontWeight:'normal'}}>About Us</Text></View>),
      animationEnabled: false,
      //headerTitleStyle: {alignSelf: 'center', paddingRight: 45},
    }),
  },
  //PayHere screen
  payhere: payhereScreen,
  //Filters
  Filters: Filters,
},


);

export default AppScreens;



const NavigationConfig = () =>{
  return{
    screenInterpolator: (sceneProps)=>{
      const position = sceneProps.position;
      const scene = sceneProps.scene;
      const index = sceneProps.index;
      const height = sceneProps.layout.initHeight;
      const width = sceneProps.layout.initWidth;

     //return FadeAnimation(index,position)
     //return BottomTransition(index,position,height)
    return SlideTransition(index, position, width)
    }
  }
}

const SlideTransition = (index,position,width) => {
  const sceneRange = [index-1,index,index+1];
  const outputOpacity = [width,0,0];
  const transition = position.interpolate({
    inputRange : sceneRange,
    outputRange : outputOpacity,
  });

  return {
    transform : [{translateX : transition}]
  }
}

// const FadeTransition=(index,position)=>{
//   const sceneRange = [index-1, index];
//   const outputOpacity = [0,1];
//   const transition = position.interpolate({
//     inputRange: sceneRange,
//     outputRange: outputOpacity,
//   });

//   return {
//     opacity: transition
//   }
// }

