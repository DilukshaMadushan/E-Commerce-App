import React, { useState  } from 'react';
import {FlatList,StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, ScrollView, Linking , Button  } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { WebView } from 'react-native-webview';


export default class payhereScreen extends React.Component {

    state = {
        htmlCode: ''
    }

    componentWillMount(){
        this.getPaymentsGateway();
    }

    getPaymentsGateway(){
  
        fetch('https://sandbox.payhere.lk/pay/checkout?merchant_id=1215003&return_url=https://www.waytoogo.com/&first_name=Diluksha&last_name=Madushan&email=diluksha.diluksha.madushan@gmail.com&phone=0702988964&address=No:8,Napana, Kandy&city=Kandy&country=Sri Lanka&order_id=1&items=1265&currency=LKR&amount=120&cancel_url=https://www.waytoogo.com&notify_url=https://www.waytoogo.com',{
          method: 'POST',
          headers: {
              'Content-Type': 'text/html; charset=UTF-8',
              //"Accept": 'text/html; charset=UTF-8'
              //'Authorization': ('Bearer '+token)
          }
          
          })
        .then((response) => {
            return response.text();
        }).then((text)=>{ 
            console.log(text);
            this.setState({htmlCode:text}); 
        })
        
      }

    render() {
        const { width } = Dimensions.get('window');
        return (
        
            <WebView
                originWhitelist={['*']}
                source={{ html: this.state.htmlCode }}
            />
        
        
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
