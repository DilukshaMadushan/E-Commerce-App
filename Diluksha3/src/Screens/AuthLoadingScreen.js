import React, { Component } from "react";
import { View, ActivityIndicator, StatusBar, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { signInUser } from "../store/authRedux";
import GetAPI from "../services/GetApi";
import Spinner from 'react-native-loading-spinner-overlay';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._loadData();
  }
  state = {
    isLoading: true,
  };

  getStoreData = async (key) => {
    try {
      const val = await AsyncStorage.getItem(key);
      if (val !== null) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  _loadData = async () => {
    if (!this.getStoreData("isSigned")) {
      this.props.navigation.navigate("Welcome"); // isSigned kiyala ekak Kalin Hadilada kiyala balanne 
    } else {
      const isLoggedIn = await AsyncStorage.getItem("isSigned");
      console.log(isLoggedIn);
      if (isLoggedIn != "true") {
        this.props.navigation.navigate("Welcome");
      } else {
        //const token = await AsyncStorage.getItem('token');
        //const profilePic = await AsyncStorage.getItem('profilePic');
        //const profileName = await AsyncStorage.getItem('profileName');
        this.props.navigation.navigate("Drawer");
        var profileId = parseInt(await AsyncStorage.getItem("profileId"));
        this.handleSignInIdPassing(profileId);
      }
    }
  };

  handleSignInIdPassing = (id) => {
    GetAPI.authLoadingApi(id)
      .then((response) => response.json())
      .then((json) => {
        try {
          if (json.role == "customer") {
            this.setState({ isLoading: false });
            this.props.addSignInId(json);
          } else {
            this.setState({ isLoading: false });
            this.props.navigation.navigate("Auth");
            alert("Please Login before Shop !");
          }
        } catch {
          alert("error");
        }
      });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              />
        {/* <StatusBar barStyle='default' /> */}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSignInId: (user) => dispatch(signInUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(AuthLoadingScreen);
