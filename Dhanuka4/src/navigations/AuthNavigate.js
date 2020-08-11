import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import loginScreen from "../Screens/loginScreen";
import registerScreen from "../Screens/registerScreen";
import Images from "../common/Images";

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: loginScreen,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: "Sign In",
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ marginHorizontal: 15, width: 25, height: 25 }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={Images.BackButton}
            />
          </TouchableOpacity>
        ),
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
