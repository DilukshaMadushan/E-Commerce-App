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

import Categories from '../components/ColumnCategories';

 class categoryScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    const { categories, onViewProductScreen } = this.props;

    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
              <Categories/>
              <Text onPress={()=>this.props.navigation.navigate('Items')} style={{fontSize:25}}>Can Go(Screen)</Text>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
    backgroundColor:'#fff'
  },
});


export default categoryScreen;