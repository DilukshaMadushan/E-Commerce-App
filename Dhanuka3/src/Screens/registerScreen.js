import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ScrollView,TextInput,AsyncStorage, ActivityIndicator, StatusBar } from 'react-native';

import Images from '../common/Images';
import { connect } from 'react-redux';
import {signInUser} from "../store/AuthRedux";


class registerScreen extends Component {
  state={
    username:null,
    email:null,
    password:null,
    comfirm_password:null,
    isLoading:false,
  }

  _storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key,value);
      console.log(key,value);
    } catch (error) {
      console.log(error);
    }
  };

  _retrieveToken = async () => {
    try {
        const value = await AsyncStorage.getItem('profileId');
        console.log('1');
        console.log(value);

    } catch (error) {
        console.log(error);
    }
    };


  handleSignUp(){
    if((this.state.username!==null)&&(this.state.email!==null)&&(this.state.password!==null)&&(this.state.comfirm_password!==null)){
      if(this.state.password == this.state.comfirm_password){
          this.setState({isLoading:true});
          fetch('https://www.waytoogo.com/wp-json/wc/v3/customers?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
          {
            method:'POST',
            headers : { 'Content-Type': 'application/json'},
            body: JSON.stringify({
              user_name:this.state.username,
              email:this.state.email,
              password:this.state.password,
              }),
          }).then((response) => response.json())
             .then((responseJson) => {
                
                this._storeData('isSigned','true');
                this._storeData('profileId',responseJson.id.toString());
                 this.handleSignInIdPassing(responseJson);
                 this.setState({isLoading:false});
                 //this._storeData('profilePic',responseJson.avatar_url);
                 //this._storeData('profileName',responseJson.user_name);
                 
                 //global.profileId[0] = responseJson.id;
                 //global.profilePic[0] = responseJson.avatar_url;
                 //global.name[0] = responseJson.user_name;

                 this.props.navigation.navigate('Home');
             })
             .catch((error) => {
               console.error(error);
               alert(error);
             });
      }else{
        alert("password do not match");
      }
    }else{
      alert("something is missing");
    }
  }


  handleSignInIdPassing = (user) => {
    this.props.addSignInId(user);
  }


  render() {
    const { width } = Dimensions.get('window');
    return (
      <ScrollView>
          {(this.state.isLoading==false)?
          <ScrollView style={styles.container}>
            <View style={styles.CardView}>
              <View style={{alignSelf:'center',marginBottom:30}}>
                <Image source={Images.logo}
                      style={styles.Logo}>
                </Image>
              </View>  
                <View style={styles.TextView}>
                  <TextInput  style={styles.TextInput}
                    placeholder="Enter User Name"
                    maxLength={40}
                    onChangeText={text => this.setState({username:text})}
                  />
                </View>
                <View style={styles.TextView}>
                  <TextInput  style={styles.TextInput}
                    placeholder="Enter Email"
                    maxLength={40}
                    onChangeText={text => this.setState({email:text})}
                  />
                </View>
                <View style={styles.TextView}>
                  <TextInput  style={styles.TextInput}
                    placeholder="Enter Password"
                    maxLength={40}
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password:text})}
                  />
                </View>
                <View style={styles.TextView}>
                  <TextInput  style={styles.TextInput}
                    placeholder="Comfirm Password"
                    maxLength={40}
                    secureTextEntry={true}
                    onChangeText={text => this.setState({comfirm_password:text})}
                  />
                </View>
                <TouchableOpacity style={styles.Button}
                                  activeOpacity={0.5}
                                  onPress={() => {this.handleSignUp()}}>
                  <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Sign In</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',paddingTop:10,alignSelf:'center'}}>
                  <Text style={{alignSelf:'center'}}>Already a member??</Text>
                  <TouchableOpacity activeOpacity={0.1}
                                    onPress={()=>this.props.navigation.navigate('Login')} >
                      <Text style={{color:'black',
                                    paddingStart:5,
                                    fontWeight:'bold',
                                    fontSize:20}}
                                    >Login</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </ScrollView> :
          <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:width*0.7}}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
        </View>}
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
    width:0.52*width,
    height:0.2*width,
    alignSelf:'center'
  },
  TextView:{
    flexDirection:'row',
    
    marginHorizontal:5,
    marginVertical:10,
    paddingHorizontal:10,
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  TextInput:{
    height: 50,
    fontSize:18,
    paddingStart:10,
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

const mapDispatchToProps = (dispatch) => {
  return{
    addSignInId:(user) => dispatch(signInUser(user)),
  }
}

export default connect(null,mapDispatchToProps)(registerScreen);