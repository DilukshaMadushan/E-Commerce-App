import { createStackNavigator } from "react-navigation-stack";
import loginScreen from "../Screens/loginScreen";
import registerScreen from "../Screens/registerScreen";
import welcomeScreen from "../Screens/welcomeScreen";

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: loginScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: "Sign In",
        animationEnabled: false,
        //gestureEnabled: false,
      }),
    },
    Register: {
      screen: registerScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        headerShown: false,
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        //headerTintColor: '#633689',
        title: "",
        headerLeft: null,
        animationEnabled: false,
      })
    },
    Welcome: {
      screen: welcomeScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        headerShown: false,
        animationEnabled: false,
      })
    }
  },
  {
    initialRouteName: "Register",
  }
);

export default AuthStack;
