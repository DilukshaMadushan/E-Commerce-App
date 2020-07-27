import React, {Component} from 'react';
import {View,ActivityIndicator,StatusBar,AsyncStorage } from 'react-native';

import {connect} from 'react-redux';
import {signInUser} from "../store/AuthRedux";

class AuthLoadingScreen extends Component{
    constructor(props){
      super(props);
      this._loadData();
    }
    state={
      isLoading:true
    }

    getStoreData = async (key) => {
      try {
          const val=await AsyncStorage.getItem(key);
          if (val!==null){
            return true;
          }
          else{
            return false;
          }
          
      } catch (error) {
          console.log(error);
          return false;
      }
      };
  
    _loadData = async() =>{
  
        if (!this.getStoreData('isSigned')){
          this.props.navigation.navigate('Auth');   // Balanna aulak thyenawada kiyala passe
        }else{
          const isLoggedIn = await AsyncStorage.getItem('isSigned');
          console.log(isLoggedIn);
          if (isLoggedIn!='true'){
            this.props.navigation.navigate('Drawer');
          }else{
            //const token = await AsyncStorage.getItem('token');
            //const profilePic = await AsyncStorage.getItem('profilePic');
            //const profileName = await AsyncStorage.getItem('profileName');
            this.props.navigation.navigate('Drawer');
            var profileId = parseInt(await AsyncStorage.getItem('profileId'));
            this.handleSignInIdPassing(profileId);
          }
        }
    }

    handleSignInIdPassing = (id) => {
        fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/'+id+'?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
              //'Authorization': ('Bearer '+token)
          }
          
          })
        .then((response) => response.json())
        .then((json) => {
          try {
            if (json.role=="customer"){
              
              this.setState({isLoading:false});
              this.props.addSignInId(json);
              console.log(json);
             
            }else{
              this.setState({isLoading:false});
              this.props.navigation.navigate('Auth');
              alert('Please Login before Shop !');
              
            }

         }catch{
            alert('error');
         }
           
        });
      }

    render(){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
        </View>
      );
     }
    }

const mapDispatchToProps = (dispatch) => {
  return{
      addSignInId:(user) => dispatch(signInUser(user)),
    }
}
    
export default connect(null,mapDispatchToProps)(AuthLoadingScreen);
