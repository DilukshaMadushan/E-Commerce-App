import React,{Component} from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity } from 'react-native';
import PaymentInfo from '../components/PaymentInfo';

 class paymentScreen extends Component {

  render() {
    return (
        <View>
          <View
            style={styles.ItemsScreen}>
            <PaymentInfo navigation={this.props.navigation} state={this.props.navigation.getParam('state')}/>
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


export default paymentScreen;