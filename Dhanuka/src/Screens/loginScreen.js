import React, { useState  } from 'react';
import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ScrollView,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../common/Images';


export default class loginScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
      <ScrollView style={styles.container}>
        <View style={styles.CardView}>
          <View style={{flexDirection:'row',alignSelf:'center',marginBottom:60}}>
            <Image source={Images.logo}
                   style={styles.Logo}>
            </Image>
            <Text style={{textAlign:'center',
                          alignSelf:'center',
                          fontSize:25,
                          paddingStart:10,
                          fontWeight:"500"}}>Login In</Text>
          </View>  
            <View style={styles.TextView}>
              <Icon name='user'
                    size={25}
                    type='Entypo'
                    color={'black'}/>
              <TextInput  style={styles.TextInput}
                placeholder="user name"
                maxLength={20}
              />
            </View>
            <View style={styles.TextView}>
              <Icon name='key'
                    size={25}
                    type='Entypo'
                    color={'black'}/>
              <TextInput  style={styles.TextInput}
                placeholder="Password"
                maxLength={20}
              />
            </View>
            <TouchableOpacity style={styles.Button}
                              activeOpacity={0.5}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',paddingTop:10,alignSelf:'center'}}>
              <Text style={{alignSelf:'center'}}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={0.5}>
                  <Text style={{color:'black',
                                paddingStart:5,
                                fontWeight:'bold',
                                fontSize:20}}
                        onPress={()=>this.props.navigation.navigate('Register')}        
                                >Register</Text>
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
    padding:20,
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
    marginVertical:15,
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
