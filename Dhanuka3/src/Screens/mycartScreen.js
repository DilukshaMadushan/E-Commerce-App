import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import CartItems from "../components/CartItems";

class myCartScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.ItemsScreen}>
          <CartItems
            addItemToCart={this.props.addItemToCart}
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.ButtonsScreen}>
          <TouchableOpacity
            style={styles.buttonBack}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNext}
            activeOpacity={0.5}
            onPress={() => {
              if (this.props.cartItems.length > 0) {
                this.props.navigation.navigate("Delivery");
              } else {
                alert("Please add item to cart");
              }
            }}
          >
            <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  ItemsScreen: {
    height: "100%",
    backgroundColor: "rgba(250,250,250,1)",
    paddingBottom: 110,
  },
  ButtonsScreen: {
    backgroundColor: "#fff",
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    width: width,
  },
  buttonBack: {
    flex: 1,
    backgroundColor: "rgba(220,220,220,0.8)",
    paddingVertical: 5,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: "rgba(0, 179, 155,0.7)",
    paddingVertical: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cartList,
  };
};

export default connect(mapStateToProps, null)(myCartScreen);
