import React, {Component} from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';

import MyOrders from '../components/MyOrders';

class myOrdersScreen extends Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
          <MyOrders navigation={this.props.navigation}/>
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default myOrdersScreen;