import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Images from "../common/Images";
import ItemsScreen from "../Screens/categoryItemsScreen";
import ItemViewScreen from "../Screens/ItemViewScreen";
import deliveryScreen from "../Screens/deliveryScreen";
import paymentScreen from "../Screens/paymentScreen";
import finishOrderScreen from "../Screens/finishOrderScreen";
import myOrdersScreen from "../Screens/myOrdersScreen";
import myWishlistScreen from "../Screens/myWishlistScreen";
import payhereScreen from "../Screens/payhereScreen";
import UpdateProfileScreen from "../Screens/UpdateProfileScreen";
import emailListScreen from "../Screens/emailListScreen";
import ShoppingCartIcon from "../components/ShoppingCartIcon";
import Filters from "../components/Filters";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import PrivacyAndPolicy from "../components/PrivacyAndPolicy";
import Terms from "../components/Terms";
import TabScreen from "../navigations/TabNavigate";

const { width } = Dimensions.get("window");

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        backgroundColor: "#FFFFFF",
      },
      //headerTintColor: '#633689',
      title: "",
      headerLeft: (
        <View style={{ width: width }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <View>
                <Image
                  source={Images.top_side_icon}
                  style={{
                    width: 18,
                    height: 18,
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: 150, height: 40, marginLeft: width / 5 }}
                resizeMode='contain'
                source={Images.logo}
              />
            </View>
            <View style={{ paddingRight: 15 }}>
              <ShoppingCartIcon navigation={navigation} />
            </View>
          </View>
        </View>
      ),
    }),
  },
  //Category_Items,Items_view
  Items: {
    screen: ItemsScreen,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        backgroundColor: "#FFFFFF",
      },
      title: "Choose Item",
      headerTitleStyle: { paddingLeft: 50 },
      headerRight: (
        <View style={{ paddingRight: 15 }}>
          <ShoppingCartIcon navigation={navigation} />
        </View>
      ),
    }),
  },

  // Items : ItemsScreen,
  ItemView: {
    screen: ItemViewScreen,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Shop Item",
      headerTitleStyle: { paddingLeft: 60 },
      headerRight: (
        <View style={{ paddingRight: 15 }}>
          <ShoppingCartIcon navigation={navigation} />
        </View>
      ),
    }),
  },
  //Thank You/Finish Order
  Finish_Order: {
    screen: finishOrderScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Finish Order",
      headerTitleStyle: { paddingLeft: 110 },
      headerLeft: null,
    }),
  },
  //AboutUs
  AboutUs: {
    screen: AboutUs,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "About Us",
      headerTitleStyle: { paddingLeft: 70 },
    }),
  },
  //ContactUs
  ContactUs: {
    screen: ContactUs,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Contact Us",
      headerTitleStyle: { paddingLeft: 80 },
    }),
  },
  //Privacy And Policy
  PrivacyAndPolicy: {
    screen: PrivacyAndPolicy,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Privacy And Policy",
      headerTitleStyle: { paddingLeft: 35 },
    }),
  },
  //Terms
  Terms: {
    screen: Terms,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Terms",
      headerTitleStyle: { paddingLeft: 85 },
    }),
  },
  //Email List
  EmailList: {
    screen: emailListScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "WaytooGo Email List",
      headerTitleStyle: { paddingLeft: 25 },
    }),
  },
  //MyWishlist
  MyWishlist: {
    screen: myWishlistScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "My Wishlist",
      headerTitleStyle: { paddingLeft: 60 },
    }),
  },
  //MyOrdes
  MyOrders: {
    screen: myOrdersScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "My Orders",
      headerTitleStyle: { paddingLeft: 70 },
    }),
  },
  //Update Delivery Screen
  UpdateProfile: {
    screen: UpdateProfileScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Update Your Profile",
      headerTitleStyle: { paddingLeft: 30 },
    }),
  },
  //Delivery_Info
  Delivery: {
    screen: deliveryScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: " Delivery Infomations",
      headerTitleStyle: { paddingLeft: 25 },
    }),
  },
  //Payment Methods
  Payment: {
    screen: paymentScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: "#FFF",
      },
      title: "Payment Methods",
      headerTitleStyle: { paddingLeft: 35 },
    }),
  },
  //PayHere screen
  payhere: payhereScreen,
  //Filters
  Filters: Filters,
});

export default App;
