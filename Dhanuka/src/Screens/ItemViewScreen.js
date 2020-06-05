import React, { useState  } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView, 
} from 'react-native';
import { connect } from "react-redux";
import Color from '../common/Color';

import ItemView from '../components/ItemView';

 class ItemViewScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    const { categories, onViewProductScreen } = this.props;

    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <ItemView/>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
  },
});


export default ItemViewScreen;