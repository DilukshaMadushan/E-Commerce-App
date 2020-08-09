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
    },
  },
  {
    initialRouteName: "Login",
  }
);

export default AuthStack;
