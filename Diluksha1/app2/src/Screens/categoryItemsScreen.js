import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import CategoryItems from '../components/CategoryItems';

class ItemsScreen extends Component {
  componentDidMount() {
    console.log(this.props.navigation.getParam('id'));
  }
  render() {
    return (
      <View style={styles.categoryScreen}>
        <CategoryItems
          navigation={this.props.navigation}
          catId={this.props.navigation.getParam('id')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    backgroundColor: '#FFF',
  },
});

export default ItemsScreen;
