import React, { Component } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";
import EmptyWishlist from "./EmptyWishlist";
import { connect } from "react-redux";
import { addcartItem } from "../../store/cartItemRedux";
import { removewishItem } from "../../store/wishlistRedux";

function Item({
  ItemName,
  ItemPrice,
  uri,
  removeItemFromWishlist,
  item,
  addItemToCart,
  navigation,
}) {
  return (
    <View
      style={{
        borderTopWidth: 5,
        paddingTop: 10,
        borderColor: "rgba(184,184,184,0.1)",
        width: width,
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemView", { item: item })}
      >
        <View style={{ flexDirection: "row" }}>
          <Image style={styles.ItemImage} source={{ uri: uri }}></Image>
          <View style={styles.ItemName}>
            <Text style={{ fontSize: 16 }}>{ItemName}</Text>
            <Text style={{ fontSize: 16, color: "rgba(184,184,184,1)" }}>
              Rs {ItemPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginTop: 10, height: 40 }}>
        <TouchableOpacity
          style={styles.IconDelete}
          activeOpacity={0.5}
          onPress={() => {
            removeItemFromWishlist(item);
          }}
        >
          <Icon name='trash' type='font-awesome' color={"#FFF"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.IconAddCart}
          activeOpacity={0.5}
          onPress={() => addItemToCart(item)}
        >
          <Icon name='shopping-cart' type='font-awesome' color={"#FFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

class MyWishlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.wishList.length > 0 ? (
          <FlatList
            data={this.props.wishList}
            numColumns={1}
            renderItem={({ item }) => (
              <Item
                ItemName={item.name}
                item={item}
                uri={item.images[0].src}
                ItemPrice={item.price}
                addItemToCart={this.props.addItemToCart}
                removeItemFromWishlist={this.props.removeItemFromWishlist}
                navigation={this.props.navigation}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <EmptyWishlist navigation={this.props.navigation} />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) => dispatch(addcartItem(product)),
    removeItemFromWishlist: (item) => dispatch(removewishItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWishlist);
