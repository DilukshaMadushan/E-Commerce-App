import { createStackNavigator } from "react-navigation-stack";
import loginScreen from "../Screens/loginScreen";
import registerScreen from "../Screens/registerScreen";

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: loginScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: "Sign In",
        //gestureEnabled: false,
      }),
    },
    Register: {
      screen: registerScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        //headerTintColor: '#633689',
        title: "",
        headerLeft: null
      })
    },
  },
  {
    initialRouteName: "Register",
  }
);

export default AuthStack;
