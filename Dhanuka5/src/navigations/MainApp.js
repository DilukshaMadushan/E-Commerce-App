import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "../Screens/AuthLoadingScreen";
import AuthStack from "../navigations/AuthNavigate";
import Drawer from "../navigations/DrawerNavigate";

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
