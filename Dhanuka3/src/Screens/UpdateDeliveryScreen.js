import React, { Component  } from 'react';
import {StyleSheet,View,ScrollView,TouchableOpacity,Text } from 'react-native';

import DeliveryTextInputs from '../components/ProfileUpdate';


 class UpdateDeliveryScreen extends Component {   
       
  render() {
    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <DeliveryTextInputs navigation={this.props.navigation}/>
          </ScrollView>
          
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
  },
  
});


export default UpdateDeliveryScreen;