import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";
import AuthStack from "../navigations/AuthNavigate";
import Drawer from "./DrawerNavigate";

import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from "../Screens/homeScreen";
import AppScreens from "./AppNavigate";


const MainApp = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Drawer: Drawer,
      Auth: AuthStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
  )
);

export default MainApp;
