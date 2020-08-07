import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { addwishItem, removewishItem } from "../../store/wishlistRedux";

class Wishlist extends Component {
  setToWishlist() {
    if (!this.props.item.wishlistState) {
      this.props.addItemToWishlist(this.props.item);
    } else {
      this.props.removeItemFromWishlist(this.props.item);
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.setToWishlist()}>
        <Icon
          name={this.props.item.wishlistState ? "heart" : "heart"}
          containerStyle={styles.Wishlist}
          type='font-awesome'
          size={24}
          color={
            this.props.item.wishlistState ? "red" : "rgba(250,250,250,0.8)"
          }
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Wishlist: {
    padding: 6,
  },
});
const mapStateToProps = (state) => {
  return {
    wishlist: state.wishList.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    addItemToWishlist: (item) => dispatch(addwishItem(item)),
    removeItemFromWishlist: (item) => dispatch(removewishItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
