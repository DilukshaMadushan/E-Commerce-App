import React, { Component } from 'react';
import { StyleSheet,
   Text, 
   View, 
   ActivityIndicator,
   StatusBar,
   AsyncStorage,
   Button,
   Dimensions,
   TouchableOpacity, } from 'react-native';   //Text = <p>    View = <div>
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import homeScreen from './src/Screens/homeScreen';
import categoryScreen from './src/Screens/categoryScreen';
import searchScreen from './src/Screens/searchScreen';
import accountScreen from './src/Screens/accountScreen';
import mycartScreen from './src/Screens/mycartScreen';


import sideBar from './src/components/sideBar';


import login from './src/Screens/loginScreen';
import register from './src/Screens/registerScreen';


import ItemsScreen from './src/Screens/categoryItemsScreen';
import ItemViewScreen from './src/Screens/ItemViewScreen';


const TabScreen = createMaterialBottomTabNavigator(
  {
    Home: { screen: homeScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          //Your icon component for example => 
          <Icon name="home" size={23} color="black" />
        )

      } 
    },
    Category: { screen: categoryScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          //Your icon component for example => 
          <Icon name="tv" size={20} color="black" />
        )
      } },
    Search: { screen : searchScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          //Your icon component for example => 
          <Icon name="picture-o" size={20} color="black" />
        )
      }},
    Mycart: { screen : mycartScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          //Your icon component for example => 
          <Icon name="picture-o" size={20} color="black" />
        )
      }},
    Account: { screen : accountScreen ,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          //Your icon component for example => 
          <Icon name="user" size={22} color="black" />
        )
      }}
  },
  {
    tabBarOptions: {
      style: {
      height: 55,
      backgroundColor: '#FFFFFF'
      }
    }
  }
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
      headerTintColor: '#633689',
      title: 'Fluxstore',
      
      headerLeft : (<View>
                        <TouchableOpacity
                                //style={{paddingTop:10,paddingRight:20}}
                                activeOpacity = { .5 }
                                onPress={()=>{
                                  navigation.openDrawer();
                                    
                                }}  
                            >
                              <View style={{paddingRight:10}}>
                               
                                <Icon
                                  //style={{flex:1}}
                                  name="navicon"
                                  size={30}
                                  color="purple"
                                  />
                              </View>
                            </TouchableOpacity>
                        
                    </View>
        )
      
    })
  },
  //Category,Items
  Items : ItemsScreen,
  ItemView : ItemViewScreen,

});

const AuthStack = createStackNavigator({
  Login :{
    screen : login,
    navigationOptions: ({ navigation, screenProps })=> ({
      title: 'Sign In',
      //gestureEnabled: false,
    })
  },


  Register : {
    screen : register
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

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading : AuthLoadingScreen,
    Drawer : Drawer,
    Auth : AuthStack,

  },
  {
    initialRouteName: 'Drawer'
  }

));


