import React, { useState  } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity 
} from 'react-native';
import { connect } from "react-redux";
import Color from '../common/Color';

//import EmptyCart from '../components/EmptyCart'; <EmptyCart/>
import CartItems from '../components/CartItems';

 class mycartScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    const { categories, onViewProductScreen } = this.props;

    return (
        <View style={{flex:1,}}>
          <ScrollView
            style={styles.categoryScreen}>
            <CartItems/>
          </ScrollView>
          <View style={{backgroundColor:'#fff',
                        position:'absolute',
                        flexDirection:'row',
                        bottom:0,
                        width:width,}}>
            <TouchableOpacity style={styles.buttonBack} activeOpacity={0.5}>
              <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNext} activeOpacity={0.5}>
              <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Next</Text>
              </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding:0,
  },
  buttonBack:{
    flex:1,
    backgroundColor:'grey',
    paddingVertical:8
  },
  buttonNext:{
    flex:1,
    backgroundColor:'rgb(102,255,220)',
    paddingVertical:8
  }
});


export default mycartScreen;