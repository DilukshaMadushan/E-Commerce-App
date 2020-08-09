import React from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Images from "../common/Images";
import loginScreen from "../Screens/loginScreen";
import registerScreen from "../Screens/registerScreen";
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
      //headerTintColor: '#633689',
      title: "Items",
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
        backgroundColor: "#FFFFFF",
      },
      //headerTintColor: '#633689',
      title: "Item",
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
        backgroundColor: "#FFFFFF",
      },
      title: "Finish Order",
      headerLeft: null,
    }),
  },
  //Register,Login
  Login: loginScreen,
  Register: registerScreen,
  //Delivery_Info
  Delivery: deliveryScreen,
  //Payment Methods
  Payment: paymentScreen,
  //MyOrdes
  MyOrders: myOrdersScreen,
  //MyWishlist
  MyWishlist: myWishlistScreen,
  //PayHere screen
  payhere: payhereScreen,
  //Update Delivery Screen
  UpdateProfile: UpdateProfileScreen,
  //Email List
  EmailList: emailListScreen,
  //Filters
  Filters: Filters,
});

export default App;
