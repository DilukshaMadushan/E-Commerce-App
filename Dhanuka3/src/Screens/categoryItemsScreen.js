import React, {Component} from 'react';
import {StyleSheet,ScrollView} from 'react-native';

import CategoryItems from '../components/CategoryItems';

 class ItemsScreen extends Component {

  render() {
    return (
          <ScrollView
            style={styles.categoryScreen}>
            <CategoryItems navigation={this.props.navigation} catId = {this.props.navigation.getParam('id')}/>
          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
  },
});


export default ItemsScreen;