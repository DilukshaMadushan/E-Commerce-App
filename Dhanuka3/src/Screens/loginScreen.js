import React, { Component  } from 'react';
import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ScrollView,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../common/Images';

class loginScreen extends Component {
 
  constructor() {
    super();

    this.state = { hidePassword: true }
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  loginHadler = () => {
    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.CardView}>
          <View style={{alignSelf:'center',marginBottom:60}}>
            <Image source={Images.logo}
                   style={styles.Logo}>
            </Image>
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
                secureTextEntry={this.state.hidePassword}
              />
              <TouchableOpacity 
                                activeOpacity={0.5}
                                onPress={this.setPasswordVisibility}>
                  <Icon name={(this.state.hidePassword) ?'eye-slash':'eye'}
                        size={25}
                        type='materialIcons'
                        color={'grey'}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.Button}
                              activeOpacity={0.5}
                              onPress={this.loginHadler}>
              <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Log In</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',paddingTop:10,alignSelf:'center'}}>
              <Text style={{alignSelf:'center'}}>Don't have an account?</Text>
              <TouchableOpacity activeOpacity={0.5}
                                onPress={()=>this.props.navigation.navigate('Register')}>
                  <Text style={{color:'black',
                                paddingStart:5,
                                fontWeight:'bold',
                                fontSize:20}}       
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
    width:0.52*width,
    height:0.2*width,
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
    flex:1,
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
    backgroundColor:'rgba(0, 179, 155,0.7)'
  },
});


export default loginScreen;