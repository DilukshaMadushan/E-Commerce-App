import React, {Component} from 'react';
import {StyleSheet, Text, View,Dimensions, ScrollView, ImageBackground } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

<<<<<<< HEAD
import HomeIconRow from "../components/HomeIconRow"
import HomeImageRow from "../components/HomeImageRow"
import HomeImageRow2 from "../components/HomeImageRow2"
=======
import HomeIconRow from "../components/HomeIconRow";
import HomeImageRow from "../components/HomeImageRow";
>>>>>>> 11d3cfb5a7a6011d6ff6e497c0bd37b24c51eca1

export default class homeScreen extends Component {

  state = {
    images : [
      require('../images/home/girl11.jpg'),
      require("../images/home/boy11.jpg"),
      require('../images/home/girl11.jpg'),
      require("../images/home/boy11.jpg"),
    ]
  }

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <ScrollView>
          <View >
=======

          <View style={{marginBottom:25}}>
>>>>>>> 11d3cfb5a7a6011d6ff6e497c0bd37b24c51eca1
            <HomeIconRow/>
          </View>

          {/* <View style={{alignItems:"center",marginTop:25}}>
            
                <ImageBackground source={require("../images/home/girl11.jpg")}
                                  style={{width:width*0.95, height:width*0.4, borderRadius:3}}>

                    <Text style={{color:"gray",fontSize:10,paddingTop:5,paddingLeft:30}}>SUMMER COLLECTION 2020</Text>
                    <Text style={{paddingTop:22,paddingLeft:30}}>BLUE SUMMERS</Text>
                    <Text style={{paddingLeft:30}}>ARE ALREADY IN</Text>
                    <Text style={{paddingLeft:30}}>STORE</Text>       
                </ImageBackground>  
          </View> */}

          
          <SliderBox 
              autoplay={true}
              images={this.state.images}
              resizeMode="contain"
              ImageComponentStyle = {{width:width*0.95, height:width*0.4}}
          />

          <View style={{alignItems:"center",marginTop:18}}>
                <ImageBackground source={require("../images/home/boy11.jpg")}
                                 style={{width:width*0.95, height:width*0.4, borderRadius:3}}>
                    <Text style={{color:"gray",fontSize:10,paddingTop:25,paddingLeft:30}}>FOR GEN</Text>
                    <Text style={{paddingLeft:30}}>HANG OUT & PARTY </Text>    
                </ImageBackground>
          </View>
          <View>
            <HomeImageRow navigation={this.props.navigation}/>
          </View>
          <View>
            <HomeImageRow2 navigation={this.props.navigation}/>
          </View>
        </ScrollView>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

});
