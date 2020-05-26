// Home screen
import React, { useState  } from 'react';
//import react in our code.
import {FlatList,StyleSheet, Text, View, Image, Dimensions,TouchableOpacity } from 'react-native';
//import all the components we are going to use.
import Icon from 'react-native-vector-icons/FontAwesome';

export default class register extends React.Component {

  
  componentWillMount(){

  }


 
  render() {
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
              <Text>This is Home Screen</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
