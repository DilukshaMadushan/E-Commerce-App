import React,{Component} from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity } from 'react-native';

import DeliveryInfo from '../components/DeliveryInfo';
import DeliveryTextInputs from '../components/DeliveryTextInputs';

 class deliveryScreen extends Component {

  render() {
    return (
        <View>
          <View
            style={styles.ItemsScreen}>
            <DeliveryInfo navigation={this.props.navigation}/>
          </View>
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  ItemsScreen: {
    height:'100%',
    backgroundColor:'#fff',
    paddingBottom:100
  },
});


export default deliveryScreen;