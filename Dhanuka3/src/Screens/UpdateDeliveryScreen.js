import React, { Component  } from 'react';
import {StyleSheet,View,ScrollView,TouchableOpacity,Text } from 'react-native';

import DeliveryTextInputs from '../components/ProfileUpdate';


 class UpdateDeliveryScreen extends Component {

    state={
        Placeholders:[],
    }

    componentWillMount(){
        this.getItemPlaceholders();
      }
    
    getItemPlaceholders(){
      
        fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/73?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
              //'Authorization': ('Bearer '+token)
          }
          
          })
        .then((response) => response.json())
        .then((json) => {
           
           this.setState({Placeholders:json});
           //console.log(this.state.Placeholders)
        })
      }
       
  render() {
    return (
        <View style={{flex:1}}>
          <ScrollView
            style={styles.categoryScreen}>
            <DeliveryTextInputs Placeholders={this.state.Placeholders}/>
          </ScrollView>
          <View style={{flexDirection:'row',height:45}}>
            <TouchableOpacity style={styles.buttonAddToCart} 
                              activeOpacity={0.5}
                              onPress={()=>this.props.navigation.navigate('Account')}>
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBuyNow} activeOpacity={0.5} 
                              onPress={()=>this.props.navigation.navigate('Account')}>
                <Text style={{color:'#fff',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryScreen: {
    padding: 10,
  },
  buttonAddToCart:{
    flex:1,
    backgroundColor:'rgba(250,120,120,0.8)',
    paddingVertical:5,
    justifyContent:'center'
  },
  buttonBuyNow:{
    flex:1,
    backgroundColor:'rgba(0, 179, 155,0.7)',
    paddingVertical:5,
    justifyContent:'center'
  }
});


export default UpdateDeliveryScreen;