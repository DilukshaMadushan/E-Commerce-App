import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Images from "../../common/Images";
import { connect } from "react-redux";
import { signOutUser } from "../../store/authRedux";
import DrawerCategories from "./DrawerCategories";
import { ScrollView } from "react-native-gesture-handler";

class SideBar extends Component {
  handleSignOutUser = () => {
    this.props.signOutUser();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Upper}
          onPress={() => this.props.navigation.navigate("Account")}
        >
          {this.props.isSigned ? (
            <Image
              source={{ uri: this.props.profile_pic }}
              style={styles.ProfileImage}
            />
          ) : (
            <Image source={Images.default_Item} style={styles.ProfileImage} />
          )}
          <View style={styles.Profileright}>
            {this.props.isSigned ? (
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {this.props.profile_name}
              </Text>
            ) : (
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>Guest</Text>
            )}
          </View>
        </TouchableOpacity>
        <ScrollView>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate("Category")}
          >
            <Text style={styles.Text}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate("ContactUs")}
          >
            <Text style={styles.Text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate("AboutUs")}
          >
            <Text style={styles.Text}>About Us</Text>
          </TouchableOpacity>
          {!this.props.isSigned ? (
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.handleSignOutUser()}
            >
              <Text style={styles.Text}>Logout</Text>
            </TouchableOpacity>
          )}

          <View>
            <Text
              style={{
                paddingTop: 15,
                paddingStart: 25,
                color: "black",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Categories
            </Text>
            <DrawerCategories />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "rgba(0,0,0,0.04)",
  },
  Upper: {
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,150,0.1)",
  },
  ProfileImage: {
    marginLeft: 30,
    width: 0.2 * width,
    height: 0.2 * width,
    borderRadius: 40,
  },
  Profileright: {
    paddingLeft: 20,
  },
  list: {
    borderBottomWidth: 1,
    borderColor: "rgba(150,150,150,0.1)",
    paddingVertical: 10,
  },
  Text: {
    fontSize: 17,
    paddingStart: 25,
    fontWeight: "bold",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    isSigned: state.auth.isSigned,
    profile_pic: state.auth.profile_pic,
    profile_name: state.auth.profile_name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
