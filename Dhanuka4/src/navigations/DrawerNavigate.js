import { Dimensions } from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideBar from "../components/Sidebar";
import App from "./AppNavigate";

const { width } = Dimensions.get("window");
const Drawer = createDrawerNavigator(
  {
    Waytoogo: {
      screen: App,
      navigationOptions: ({ navigation, screenProps }) => ({
        title: "Fluxstore",
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
