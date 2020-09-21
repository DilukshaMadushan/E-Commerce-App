import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import GetAPI from '../../services/GetApi';

class Filters extends Component {
  state = {
    SelectedTag: null,
    TagsList: [],
  };

  componentWillMount() {
    this.setState({isLoading: true});
    this.getItemTags();
  }

  getItemTags() {
    GetAPI.ItemTagsApi()
      .then((response) => response.json())
      .then((json) => {
        this.setState({TagsList: json});
      });
  }

  toggleModal = () => {
    this.props.toggleModal(this.state.SelectedTag);
  };

  render() {
    return (
      <View style={styles.Modal}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.FilterText}>Filters</Text>
          <Text style={styles.Catalog}>Product Tags</Text>
        </View>

        <View style={{height: '64%'}}>
          <DropDownPicker
            dropDownStyle={{
              backgroundColor: 'rgba(240,240,240,1)',
              height: 150,
            }}
            placeholder="Select a Tag"
            items={this.state.TagsList.map((item) => {
              return {value: item.id, label: item.name};
            })}
            defaultIndex={0}
            containerStyle={styles.DropDownView}
            labelStyle={{
              fontSize: 17,
              color: 'grey',
              fontFamily: 'Exo-Regular',
            }}
            activeLabelStyle={{color: 'red', fontWeight: 'bold'}}
            onChangeItem={(item) => {
              this.setState({SelectedTag: item.value});
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => this.toggleModal()}
          style={styles.SearchFilter}>
          <Text style={{fontSize: 20, color: '#FFF', fontFamily: 'Exo-Bold'}}>
            Search By Filter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toggleModal()}>
          <Text style={styles.ClearFilter}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  Modal: {
    height: '65%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
  },
  FilterText: {
    flex: 1,
    fontFamily: 'Exo-Bold',
    color: '#162539',
    fontSize: 30,
  },
  Catalog: {
    color: 'grey',
    fontFamily: 'Exo-Bold',
    fontSize: 20,
  },
  SearchFilter: {
    width: '100%',
    marginTop: 10,
    height: 40,
    backgroundColor: '#f7941d',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ClearFilter: {
    paddingTop: 15,
    fontFamily: 'Exo-Bold',
    fontSize: 20,
    color: '#f7941d',
    alignSelf: 'center',
  },
  DropDownView: {
    height: 50,
    justifyContent: 'center',
    marginVertical: 15,
  },
});

export default Filters;
