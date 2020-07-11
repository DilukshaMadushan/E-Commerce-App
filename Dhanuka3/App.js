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
import mycartScreen from './src/Screens/mycartScreen';
import loginScreen from './src/Screens/loginScreen';
import registerScreen from './src/Screens/registerScreen';
import ItemsScreen from './src/Screens/categoryItemsScreen';
import ItemViewScreen from './src/Screens/ItemViewScreen';
import deliveryScreen from './src/Screens/deliveryScreen';
import paymentScreen from './src/Screens/paymentScreen';
import finishOrderScreen from './src/Screens/finishOrderScreen';


import sideBar from './src/components/Sidebar/sideBar';

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
    Mycart: { screen : mycartScreen ,
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
      headerLeft : (<View>
                      <View style={{flexDirection:"row"}}>
                        <TouchableOpacity
                            style={{flex:1}}
                            activeOpacity = { .5 }
                            onPress={()=>{navigation.openDrawer();}}  >
                            <View>
                              <Image source={Images.top_side_icon}
                              style = {{width:18,
                                        height:18,
                                        marginLeft:10,
                                        marginTop:10, }}/>
                                  {/* <Icon
                                    //style={{flex:1}}
                                    name="navicon"
                                    size={30}
                                    color="purple"
                                    /> */}
                            </View>
                        </TouchableOpacity>
                            <View style={{flex:1}}>
                              <Image style = {{width:150,
                                               height:40,
                                               marginLeft:width/5 }}
                                     resizeMode="contain"
                                     source={Images.logo}/>
                            </View>
                      </View>
                    </View>
        )
    }),
  },
  //Category_Items,Items_view
  Items : ItemsScreen,
  ItemView : ItemViewScreen,
  //Register,Login
  Login : loginScreen,
  Register : registerScreen,
  //Delivery_Info
  Delivery: deliveryScreen,
  //Payment Methods
  Payment:paymentScreen,
  //Thank You/Finish Order
  Finish_Order:finishOrderScreen,
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

class AuthLoadingScreen extends Component{
  constructor(props){
    super(props);
    this._loadData();
  }

  getStoreData = async (key) => {
    try {
        const val=await AsyncStorage.getItem(key);
        if (val!==null){
          return true;
        }
        else{
          return false;
        }
        
    } catch (error) {
        console.log(error);
        return false;
    }
    };

  _loadData = async() =>{

      if (!this.getStoreData('isSigned')){
        this.props.navigation.navigate('Auth');   // Balanna aulak thyenawada kiyala passe
      }else{
        const isLoggedIn =await AsyncStorage.getItem('isSigned');
        if (isLoggedIn!='true'){
          this.props.navigation.navigate('Auth');
        }else{
          const token = await AsyncStorage.getItem('token');
          const profileId = await AsyncStorage.getItem('profileId');
          const profilePic = await AsyncStorage.getItem('profilePic');
          const profileName = await AsyncStorage.getItem('profileName');

          this.props.navigation.navigate('Drawer');
        }
      }
  }

  render(){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
      </View>
    );
   }
  }



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
                          contentComponent:  sideBar,
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
    initialRouteName: 'Drawer'
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
