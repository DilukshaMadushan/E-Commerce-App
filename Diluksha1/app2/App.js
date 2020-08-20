import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import Toast from './src/Modules/ToastModule';
import MainApp from "./src/navigations/MainApp";

export default class App extends Component{

  render(){
    return(
          <MainApp /> 
    )
  }
} 


{/* <Text>Hi this is Our App</Text>
        <Button 
          title="Pay"
          onPress = {()=>{
            //Toast.show('Diluksha', 10);
            // Toast.payOnce(120, 
            //   (msg)=>{
            //     alert(msg);
            //   })
            alert("Clicked");
          }}
        /> */}