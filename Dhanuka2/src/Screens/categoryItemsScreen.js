import React, { useState  } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text 
} from 'react-native';
import { connect } from "react-redux";
import Color from '../common/Color';

import CategoryItems from '../components/CategoryItems';

 class ItemsScreen extends React.Component {

  componentWillMount(){
    
  }




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