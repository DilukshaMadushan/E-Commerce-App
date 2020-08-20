import React from 'react';
import { Dimensions, View } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../components/Sidebar";
import AppScreens from "./AppNavigate";


const { width } = Dimensions.get("window");
const Drawer = createDrawerNavigator(
  {
    Waytoogo: {
      screen: AppScreens,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: "Waytoogo",
      }),
    },
  },
  {
    contentComponent: SideBar,
    initialRouteName: "Waytoogo",
    drawerWidth: width * 0.75,
    drawerPosition: "left",
    contentOptions: {
      activeTintColor: "#e91e63",
    },
  }
);

export default Drawer;
