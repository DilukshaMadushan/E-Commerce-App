import React, { useState  } from 'react';
import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ScrollView,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../common/Images';


export default class registerScreen extends React.Component {
 
  render() {
    const { width } = Dimensions.get('window');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.CardView}>
          <View style={{flexDirection:'row',alignSelf:'center',marginBottom:30}}>
            <Image source={Images.logo}
                   style={styles.Logo}>
            </Image>
            <Text style={{textAlign:'center',alignSelf:'center',fontSize:25,paddingStart:10,fontWeight:"500"}}>Sign In</Text>
          </View>  
            <View style={styles.TextView}>
              <TextInput  style={styles.TextInput}
                placeholder="Enter User Name"
                maxLength={20}
              />
            </View>
            <View style={styles.TextView}>
              <TextInput  style={styles.TextInput}
                placeholder="Enter Email"
                maxLength={20}
              />
            </View>
            <View style={styles.TextView}>
              <TextInput  style={styles.TextInput}
                placeholder="Enter Password"
                maxLength={20}
              />
            </View>
            <View style={styles.TextView}>
              <TextInput  style={styles.TextInput}
                placeholder="Comfirm Password"
                maxLength={20}
              />
            </View>
            <TouchableOpacity style={styles.Button}
                              activeOpacity={0.5}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',paddingTop:10,alignSelf:'center'}}>
              <Text style={{alignSelf:'center'}}>Already a member??</Text>
              <TouchableOpacity activeOpacity={0.1}>
                  <Text style={{color:'black',
                                paddingStart:5,
                                fontWeight:'bold',
                                fontSize:20}}
                        onPress={()=>this.props.navigation.navigate('Login')} 
                                >Login</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  CardView:{
    padding:15,
    marginVertical:50,
  },
  Logo:{
    width:0.12*width,
    height:0.12*width,
    alignSelf:'center'
  },
  TextView:{
    flexDirection:'row',
    height: 50,
    marginHorizontal:5,
    marginVertical:10,
    paddingHorizontal:10,
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  TextInput:{
    fontSize:16,
    paddingStart:15,
  },
  Button:{
    marginTop:30,
    height:50,
    marginVertical:5,
    marginHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:'#191970'
  },
});
