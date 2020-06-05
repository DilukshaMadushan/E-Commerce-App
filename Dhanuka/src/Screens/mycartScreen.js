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
        <View>
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
    backgroundColor:'#fff'
  },
  buttonBack:{
    flex:1,
    backgroundColor:'rgba(220,220,220,0.8)',
    paddingVertical:5
  },
  buttonNext:{
    flex:1,
    backgroundColor:'rgba(0, 179, 155,0.7)',
    paddingVertical:5
  }
});


export default mycartScreen;