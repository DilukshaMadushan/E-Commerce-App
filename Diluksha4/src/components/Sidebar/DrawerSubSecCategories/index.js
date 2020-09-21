import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

class SubSecCategories extends Component {
  state = {
    SubSecCategorylist: [],
  };

  componentWillMount() {
    this.setState({SubSecCategorylist: this.props.SubSecCategorylist});
    console.log(this.props.name);
  }

  render() {
    return (
      <View style={styles.List}>
        {this.props.SubSecCategorylist.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Items', {curentCategory:{
                id: item.id, name: item.name
              }});
            }}
            key={item.id}
            style={{
              flexDirection: 'row',
              paddingLeft: 80,
              paddingVertical: 6,
            }}>
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

export default withNavigation(SubSecCategories);
