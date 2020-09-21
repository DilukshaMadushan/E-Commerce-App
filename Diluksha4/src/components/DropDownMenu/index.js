import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import GetAPI from '../../services/GetApi';

class DropDownMenu extends Component {
  state = {
    id: this.props.id,
    variationList: [],
    isLoading: true,
  };
  componentWillMount() {
    this.getVariationItemList();
  }

  getVariationItemList() {
    GetAPI.getVariationItemsApi(this.state.id)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({variationList: json});
        this.setState({isLoading: false});
      });
  }

  PassDataToParent(id) {
    this.props.updateData(id);
  }
  render() {
    return !this.state.isLoading ? (
      <DropDownPicker
        dropDownStyle={{backgroundColor: '#FFF'}}
        placeholder="Select an option"
        items={this.state.variationList.map((item) => {
          return {
            value: item.id,
            label: item.attributes[0].option,
          };
        })}
        defaultIndex={0}
        containerStyle={styles.DropDownView}
        labelStyle={{
          fontSize: 16,
          color: 'grey',
          fontFamily: 'Exo-Regular',
        }}
        activeLabelStyle={{color: 'red'}}
        onChangeItem={(item) => {
          this.PassDataToParent(item.value);
        }}
      />
    ) : (
      <View />
    );
  }
}

const styles = StyleSheet.create({
  DropDownView: {
    height: 50,
    justifyContent: 'center',
    marginVertical: 15,
  },
});
export default DropDownMenu;
