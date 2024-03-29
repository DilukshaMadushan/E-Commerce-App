import React, { Component } from 'react';
import { StyleSheet,Text,View,ActivityIndicator,StatusBar,AsyncStorage,Button,Dimensions,TouchableOpacity,Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Images from './src/common/Images';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import homeScreen from './src/Screens/homeScreen';
import categoryScreen from './src/Screens/categoryScreen';
import searchScreen from './src/Screens/searchScreen';
import accountScreen from './src/Screens/accountScreen';
import myCartscreen from './src/Screens/mycartScreen';
import loginScreen from './src/Screens/loginScreen';
import registerScreen from './src/Screens/registerScreen';
import ItemsScreen from './src/Screens/categoryItemsScreen';
import ItemViewScreen from './src/Screens/ItemViewScreen';
import deliveryScreen from './src/Screens/deliveryScreen';
import paymentScreen from './src/Screens/paymentScreen';
import finishOrderScreen from './src/Screens/finishOrderScreen';
import myOrdersScreen from './src/Screens/myOrdersScreen';
import myWishlistScreen from './src/Screens/myWishlistScreen';
import payhereScreen from './src/Screens/payhereScreen';
import UpdateProfileScreen from './src/Screens/UpdateProfileScreen';
import emailListScreen from './src/Screens/emailListScreen';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';


import ShoppingCartIcon from './src/components/ShoppingCartIcon';
import SideBar from './src/components/Sidebar';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';



const TabScreen = createMaterialBottomTabNavigator(
  {
    Home: { screen: homeScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={23} color="#696969" />
        )
      } 
    },
    Category: { screen: categoryScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="th-large" size={20} color="#696969" />
        )
      } },
    Search: { screen : searchScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" size={20} color="#696969" />
        )
      }},
    Mycart: { screen : myCartscreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" size={20} color="#696969" />
        )
      }},
    Account: { screen : accountScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" size={21} color="#696969" />
        )
      }},
  },
  {
    initialRouteName : "Home",
    activeColor : "#D3D3D3",
    barStyle: { backgroundColor: '#FFFFFF' },
    
  },

  // {
  //   lazy: true,
  //   tabBarPosition: 'bottom',
  //   swipeEnabled: true,
  //   animationEnabled: true,
  //   tabBarOptions: {
      
  //     showIcon: true,
  //     showLabel:false,
  //     activeTintColor: '#000000',
  //     inactiveTintColor: '#000000',
  //     style: {
  //       backgroundColor: 'white',
  //     },
  //     labelStyle: {
  //       textAlign: 'center',
  //     },
  //     indicatorStyle: {
  //       borderBottomColor: 'white',
  //       borderBottomWidth: 2,
  //     },
  //   },
  // }
);
//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: ({ navigation, screenProps })=> ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      //headerTintColor: '#633689',
      title: '',
      headerLeft : (<View style={{width:width}}>
        <View style={{flexDirection:"row",alignItems:'center'}}>
          <TouchableOpacity
              activeOpacity = { 0.5 }
              onPress={()=>{navigation.openDrawer();}}  >
              <View>
                <Image source={Images.top_side_icon}
                style = {{width:18,height:18,marginLeft:10,marginTop:10 }}/>
              </View>
          </TouchableOpacity>
          <View style={{flex:1}}>
              <Image style = {{width:150,height:40,marginLeft:width/5 }}
                     resizeMode="contain"
                     source={Images.logo}/>
          </View>
          <View style={{paddingRight:15}}>
            <ShoppingCartIcon navigation={navigation}/>
          </View>
        </View>
      </View>
        )
    }),
  },
//Category_Items,Items_view
  Items: {
    screen: ItemsScreen,
    navigationOptions: ({ navigation, screenProps })=> ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      //headerTintColor: '#633689',
      title: 'Items',
      headerRight : (
          
          <View style={{paddingRight:15}}>
            <ShoppingCartIcon navigation={navigation}/>
          </View>
        
        )
    }),
  },
  
  // Items : ItemsScreen,
  ItemView: {
    screen: ItemViewScreen,
    navigationOptions: ({ navigation, screenProps })=> ({
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      //headerTintColor: '#633689',
      title: 'Item',
      headerRight : (
          
          <View style={{paddingRight:15}}>
            <ShoppingCartIcon navigation={navigation}/>
          </View>
        
        )
    }),
  },
  //Register,Login
  Login : loginScreen,
  Register : registerScreen,
  //Delivery_Info
  Delivery: deliveryScreen,
  //Payment Methods
  Payment:paymentScreen,
  //Thank You/Finish Order
  Finish_Order:finishOrderScreen,
  //MyOrdes
  MyOrders:myOrdersScreen,
  //MyWishlist
  MyWishlist:myWishlistScreen,
  //PayHere screen
  payhere : payhereScreen,
  //Update Delivery Screen
  UpdateProfile : UpdateProfileScreen,
  //Email List
  EmailList:emailListScreen,
});

const AuthStack = createStackNavigator({
  Login :{
    screen : loginScreen,
    navigationOptions: ({ navigation, screenProps })=> ({
      title: 'Sign In',
      //gestureEnabled: false,
    })
  },
  Register : {
    screen : registerScreen
    },
},
{
  initialRouteName: 'Login'
});


const { width } = Dimensions.get('window');
const Drawer = createDrawerNavigator(
                        {
                          PetBliss :{
                            screen : App,
                            navigationOptions: ({ navigation, screenProps })=> ({
                              title: 'Fluxstore'
                            })
                          },
                        },
                        {
                          contentComponent: SideBar,
                          initialRouteName:"PetBliss",
                          drawerWidth: width*0.75,
                          drawerPosition:'left',
                          contentOptions:{
                          activeTintColor:'#e91e63'
                          },
                        }
);

const MainApp = createAppContainer(createSwitchNavigator(
  {
    AuthLoading : AuthLoadingScreen,
    Drawer : Drawer,
    Auth : AuthStack,
  },
  {
    initialRouteName: 'AuthLoading'
  }
));



export default class MainClass extends Component{
  render(){
    const store = configureStore();
    return(
      <Provider store={store}>
         <MainApp/>
      </Provider>
        
    );
  }
};
