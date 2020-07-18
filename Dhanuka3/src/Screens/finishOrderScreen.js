import React,{Component} from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity } from 'react-native';

import FinishOrderInfo from '../components/FinishOrderInfo';

 class finishOrderScreen extends Component {

  render() {
    return (
        <View>
          <View
            style={styles.ItemsScreen}>
            <FinishOrderInfo navigation={this.props.navigation}/>
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


export default finishOrderScreen;