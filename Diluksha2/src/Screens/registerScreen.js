import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Images from "../common/Images";
import { connect } from "react-redux";
import { signInUser } from "../store/authRedux";
import PostAPI from "../services/PostAPI";
import Spinner from 'react-native-loading-spinner-overlay';

class registerScreen extends Component {
  state = {
    username: null,
    email: null,
    phone:null,
    city:null,
    password: null,
    comfirm_password: null,
    isLoading: false,
  };

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem("profileId");
    } catch (error) {
      console.log(error);
    }
  };

  handleSignUp() {
    if (
      this.state.username !== null &&
      this.state.email !== null &&
      this.state.phone !== null
    ) {
      
      this.setState({ isLoading: true });
      PostAPI.registerApi(
        JSON.stringify({
          user_name: this.state.username,
          email: this.state.email,
          password: "123465",
          billing: {
            first_name: this.state.username,
            // last_name: "",
            // company: "",
            // address_1: "",
            // address_2: "",
            city: this.state.city,
            // state: "",
            // postcode: "",
            country: "SL",
            email: this.state.email,
            phone: this.state.phone
          },
        })
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this._storeData("isSigned", "true");
          this._storeData("profileId", responseJson.id.toString());
          this.handleSignInIdPassing(responseJson);
          this.setState({ isLoading: false });
          
          //this._storeData('profilePic',responseJson.avatar_url);
          //this._storeData('profileName',responseJson.user_name);
          //global.profileId[0] = responseJson.id;
          //global.profilePic[0] = responseJson.avatar_url;
          //global.name[0] = responseJson.user_name;

          this.props.navigation.navigate("Home");
        })
        .catch((error) => {
          this.setState({ isLoading: false });
          console.error(error);
          alert("Error with Your Details! Please Check and Try Again");
        });
      
    } else {
      alert("Please Fill All the Fields");
    }
  }

  handleSignInIdPassing = (user) => {
    this.props.addSignInId(user);
  };

  render() {
    const { width } = Dimensions.get("window");
    return (
      <ScrollView>
        {this.state.isLoading == false ? (
          <ScrollView style={styles.container}>
            <View style={styles.CardView}>
              <View style={{ alignSelf: "center", marginBottom: 30 }}>
                <Image source={Images.logo} style={styles.Logo}></Image>
              </View>
              <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder='User Name'
                  maxLength={40}
                  onChangeText={(text) => this.setState({ username: text })}
                />
              </View>
              <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder='Email'
                  maxLength={40}
                  onChangeText={(text) => this.setState({ email: text })}
                />
              </View>

              <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  keyboardType="phone-pad"
                  placeholder='Mobile'
                  maxLength={10}
                  onChangeText={(text) => this.setState({ phone: text })}
                />
              </View>

              <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder='City'
                  maxLength={40}
                  onChangeText={(text) => this.setState({ city: text })}
                />
              </View>

              {/* <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder='Enter Password'
                  maxLength={40}
                  secureTextEntry={true}
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </View> */}
              {/* <View style={styles.TextView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder='Comfirm Password'
                  maxLength={40}
                  secureTextEntry={true}
                  onChangeText={(text) =>
                    this.setState({ comfirm_password: text })
                  }
                />
              </View> */}

              <TouchableOpacity
                style={styles.Button}
                activeOpacity={0.5}
                onPress={() => {
                  this.handleSignUp();
                }}
              >
                <Text
                  style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                >
                  Continue Shopping
                </Text>
              </TouchableOpacity>
              {/* <View
                style={{
                  flexDirection: "row",
                  paddingTop: 10,
                  alignSelf: "center",
                }}
              >
                <Text style={{ alignSelf: "center" }}>Already a member??</Text>
                <TouchableOpacity
                  activeOpacity={0.1}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text
                    style={{
                      color: "black",
                      paddingStart: 5,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </ScrollView>
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: width*0.6 }}>
            <Image source={require('../images/logo-main.png')} style={{width:width*0.8, height:200, resizeMode:'contain'}}></Image> 
          </View>
        )}
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  CardView: {
    padding: 15,
    marginVertical: 50,
  },
  Logo: {
    width: 0.52 * width,
    height: 0.2 * width,
    alignSelf: "center",
  },
  TextView: {
    flexDirection: "row",

    marginHorizontal: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  TextInput: {
    height: 50,
    fontSize: 18,
    paddingStart: 10,
  },
  Button: {
    marginTop: 50,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#FF8C00",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addSignInId: (user) => dispatch(signInUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(registerScreen);
