import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Images from '../common/Images';

import {createStackNavigator} from 'react-navigation-stack';
import loginScreen from '../Screens/loginScreen';
import registerScreen from '../Screens/registerScreen';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: loginScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        title: 'Sign In',
        //gestureEnabled: false,
      }),
    },
    Register: {
      screen: registerScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        //headerTintColor: '#633689',
        title: '',
        // headerLeft: () => (
        //   <TouchableOpacity
        //     onPress={() => navigation.navigate('Home')}
        //     style={{marginHorizontal: 15, width: 25, height: 25}}>
        //     <Image
        //       style={{width: '100%', height: '100%'}}
        //       source={Images.BackButton}
        //     />
        //   </TouchableOpacity>
        // ),
      }),
    },
  },
  {
    initialRouteName: 'Register',
  },
);

export default AuthStack;
