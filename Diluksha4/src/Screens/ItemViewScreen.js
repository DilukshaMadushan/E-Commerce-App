import React, {Component} from 'react';
import {View} from 'react-native';
import ItemView from '../components/ItemView';

class ItemViewScreen extends Component {
  state = {
    item: this.props.navigation.getParam('item'),
  };

  render() {
    return (
      <View>
        <ItemView item={this.state.item} navigation={this.props.navigation} />
      </View>
    );
  }
}

export default ItemViewScreen;
