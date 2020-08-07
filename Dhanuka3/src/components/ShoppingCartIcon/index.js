import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";

class ShoppingCartIcon extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Mycart");
          }}
        >
          <Icon
            name='shopping-cart'
            containerStyle={styles.Icon}
            type='font-awesome'
            color={"black"}
            size={34}
          />
          <View style={styles.Number}>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
              {this.props.cartItems.length.toString()}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Icon: {
    padding: 1,
  },
  Number: {
    width: 20,
    height: 20,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "rgba(0, 179, 155,0.7)",
    position: "absolute",
  },
});

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems.cartList,
  };
};

export default connect(mapStateToProps, null)(ShoppingCartIcon);
