import React, { Component } from 'react';
import { View, FlatList, Image, Text,TouchableOpacity,StyleSheet } from "react-native";

import { Dropdown } from 'react-native-material-dropdown';

class DropDownMenu extends Component {

  render() {
    let data = [
    {
      value: 'Banana',
    }, 
    {
      value: 'Mango',
    }, 
    {
      value: 'Pear',
    },
    {
      value: 'Banana',
    }, 
    {
      value: 'Mango',
    }, 
    {
      value: 'Pear',
    }
    
  ];
 
    return (
      <Dropdown
        label='Favorite Fruit'
        containerStyle={styles.DropDownView}
        data={data}
        shadeOpacity={0.2}
      />
    );
  }
}

const styles = StyleSheet.create({
  DropDownView: {
    height:50,
    justifyContent:'center',
    padding:10,
    marginVertical:15
  },
});
export default DropDownMenu;