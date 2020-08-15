import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import ItemView from "../components/ItemView";
import { connect } from "react-redux";
import { addcartItem } from "../store/cartItemRedux";

class ItemViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam("item"),
    };
  }

  handleItemPasing = (item) => {
    item.count = 1;
    this.props.addItemToCart(item);
  };

  updateData = (data) => {
    console.log(data);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.categoryScreen} ref='_scrollView'>
          <ItemView
            item={this.state.item}
            updateData={(val) => this.updateData(val)}
            navigation={this.props.navigation}
            Scroll={() => this.refs._scrollView.scrollTo(0)}
          />
        </ScrollView>
        <View style={{ flexDirection: "row", height: 45 }}>
          <TouchableOpacity
            style={styles.buttonAddToCart}
            activeOpacity={0.5}
            onPress={() => this.handleItemPasing(this.state.item)}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Add To Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBuyNow}
            activeOpacity={0.5}
            onPress={() => {
              this.props.navigation.navigate("Delivery");
              this.handleItemPasing(this.state.item);
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
    backgroundColor: "#FFF",
  },
  buttonAddToCart: {
    flex: 1,
    backgroundColor: "rgba(250,120,120,0.8)",
    paddingVertical: 5,
    justifyContent: "center",
  },
  buttonBuyNow: {
    flex: 1,
    backgroundColor: "rgba(0, 179, 155,0.7)",
    paddingVertical: 5,
    justifyContent: "center",
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
  };
};

export default connect(null, mapDispatchToProps)(ItemViewScreen);
