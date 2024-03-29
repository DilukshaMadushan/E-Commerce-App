import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ProfileItems from "../components/Profile";
import Images from "../common/Images";
import { connect } from "react-redux";
import { signOutUser } from "../store/authRedux";

class accountScreen extends Component {
  handleSignOutUser = () => {
    this.props.signOutUser();
  };

  render() {
    return (
      <View>
        <View style={styles.Upper}>
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
          </View>
        </View>
        <ProfileItems navigation={this.props.navigation} />
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  Upper: {
    backgroundColor: "#FFF",
    width: width,
    height: 0.5 * width,
    flexDirection: "row",
    alignItems: "center",
  },
  ProfileImage: {
    marginLeft: 30,
    width: 0.35 * width,
    height: 0.35 * width,
    borderRadius: 10,
  },
  Profileright: {
    paddingLeft: 30,
  },
  Text: {
    fontSize: 20,
    paddingStart: 5,
    fontWeight: "bold",
    color: "rgba(200,200,200,1)",
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

export default connect(mapStateToProps, mapDispatchToProps)(accountScreen);
