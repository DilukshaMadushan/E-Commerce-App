import React, { Component } from 'react';
import { View, FlatList, Image, Text,TouchableOpacity,StyleSheet } from "react-native";

import { Dropdown } from 'react-native-material-dropdown';

class DropDownMenu extends Component {



  render() {
 
    return (
      <Dropdown
        label='Options'
        containerStyle={styles.DropDownView}
        data={this.props.itemOptions.map(item=>{
          return {"value":item}
        })
        }
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