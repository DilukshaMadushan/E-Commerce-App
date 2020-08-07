import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Icon } from "react-native-elements";

class EmptyItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon
            name='shopping-cart'
            size={80}
            containerStyle={styles.ShopItemIcon}
            type='font-awesome'
            color={"black"}
          />
        </View>
        <Text style={{ fontSize: 25, alignSelf: "center" }}>
          Empty Category
        </Text>
        <Text style={{ fontSize: 15, alignSelf: "center" }}>Sorry !!!</Text>
        <TouchableOpacity
          style={styles.ShoppingButton}
          activeOpacity={0.5}
          onPress={() => this.props.navigation.navigate("Category")}
        >
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
            Shop Now
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmptyItems;
