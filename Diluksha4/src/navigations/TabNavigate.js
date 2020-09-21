import React from 'react';
import {Image} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import homeScreen from '../Screens/homeScreen';
import categoryScreen from '../Screens/categoryScreen';
import searchScreen from '../Screens/searchScreen';
import accountScreen from '../Screens/accountScreen';
import myCartscreen from '../Screens/mycartScreen';

const TabScreen = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={23} color="#696969" />
        ),
      },
    },
    Category: {
      screen: categoryScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="th-large" size={20} color="#696969" />
        ),
      },
    },
    Search: {
      screen: searchScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="search" size={20} color="#696969" />
        ),
      },
    },
    Mycart: {
      screen: myCartscreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          // <Icon name="shopping-cart" size={20} color="#696969" />
          <Image
              style={{width:20,height:20,opacity:0.6}}
              source={require('../images/my-icons/order.png')}></Image>
        ),
      },
    },
    Account: {
      screen: accountScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={21} color="#696969" />
        ),
        
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#D3D3D3',
    barStyle: {backgroundColor: '#FFFFFF'},
  }
);

export default TabScreen;
