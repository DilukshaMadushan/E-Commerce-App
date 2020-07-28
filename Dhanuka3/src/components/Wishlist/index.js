import React, { Component } from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

class Wishlist extends Component {

  state={
    wishListState:this.props.item.wishListState
  }

  onWishlistPress() {
    this.props.addItemToWishlist(this.props.item);
    this.setState({wishListState:true});
  }

  onWishlistPressAgain() {
    this.props.addItemToWishlist(this.props.item);
    this.setState({wishListState:false});
  }
  render() {
    return (
      <TouchableOpacity
        onPressIn={() =>{ if(this.state.wishListState==false){
                                this.onWishlistPress()}
                        else{this.onWishlistPressAgain()}}}>
        <Icon name={this.state.wishListState ? 'heart' : 'heart-o'}
              containerStyle={styles.Wishlist}
              type='font-awesome'
              size={24}
              color={this.state.wishListState ? 'red' : 'grey'}/>
      </TouchableOpacity>
    );
  }
}




const styles = StyleSheet.create({
  Wishlist: {
    padding:6,
  },
});

export default Wishlist;