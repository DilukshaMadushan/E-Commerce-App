import React, {Component} from 'react';
import {StyleSheet,View,Dimensions,Text,TouchableOpacity } from 'react-native';

//import EmptyCart from '../components/EmptyCart'; <EmptyCart/>
import CartItems from '../components/CartItems';

 class mycartScreen extends Component {

  render() {
    return (
        <View>
          <View
            style={styles.ItemsScreen}>
            <CartItems/>
          </View>
          <View style={styles.ButtonsScreen}>
            <TouchableOpacity style={styles.buttonBack} activeOpacity={0.5}
                              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} activeOpacity={0.5}
                              onPress={() => this.props.navigation.navigate('Delivery')}>
              <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Next</Text>
              </TouchableOpacity>
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
    paddingBottom:110
  },
  ButtonsScreen:{
    backgroundColor:'#fff',
    position:'absolute',
    flexDirection:'row',
    bottom:0,
    width:width,
  },
  buttonBack:{
    flex:1,
    backgroundColor:'rgba(220,220,220,0.8)',
    paddingVertical:5,
  },
  buttonNext:{
    flex:1,
    backgroundColor:'rgba(0, 179, 155,0.7)',
    paddingVertical:5
  }
});


export default mycartScreen;