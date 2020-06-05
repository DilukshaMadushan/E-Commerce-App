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

  render() {
    const { width } = Dimensions.get('window');
    const { categories, onViewProductScreen } = this.props;

    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <CategoryItems/>
            <Text onPress={()=>this.props.navigation.navigate('ItemView')} style={{fontSize:25}}>Can Go(Screen)</Text>
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


export default ItemsScreen;