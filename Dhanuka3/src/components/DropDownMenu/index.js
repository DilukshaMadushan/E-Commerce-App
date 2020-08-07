import React, { Component } from "react";
import { StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

class DropDownMenu extends Component {
  render() {
    return (
      <DropDownPicker
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        placeholder='Select an option'
        items={this.props.itemOptions.map((item) => {
          return { value: item, label: item };
        })}
        defaultIndex={0}
        containerStyle={styles.DropDownView}
        labelStyle={{ fontSize: 16, color: "grey" }}
        activeLabelStyle={{ color: "red" }}
        //onChangeItem={item => console.log(item.label, item.value)}
      />
    );
  }
}

const styles = StyleSheet.create({
  DropDownView: {
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
  },
});
export default DropDownMenu;
