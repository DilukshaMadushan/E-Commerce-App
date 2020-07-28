import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
import Images from '../../common/Images';
import { connect } from 'react-redux';
import {signOutUser} from "../../store/AuthRedux";


class SideBar extends Component {

  handleSignOutUser = () => {
    this.props.signOutUser();
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.Upper} onPress={()=>this.props.navigation.navigate('Account')}>
            {(this.props.isSigned)?
              <Image source={{uri:this.props.profile_pic}}
                    style={styles.ProfileImage}/>
            :
              <Image source={Images.default_Item}
                    style={styles.ProfileImage}/>
            }
            <View style={styles.Profileright}>
              {(this.props.isSigned)?
                  <Text style={{fontSize:30}}>{this.props.profile_name}</Text>
              :
                  <Text style={{fontSize:30}}>Guest</Text>
              } 
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list} onPress={()=>this.props.navigation.navigate('Category')}>
            <Text style={styles.Text}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>About Us</Text>
          </TouchableOpacity>
          {(!this.props.isSigned)?
            <TouchableOpacity style={styles.list}
                              onPress={()=>this.props.navigation.navigate('Login')}>
                    <Text style={styles.Text}>Login</Text>
            </TouchableOpacity>
          :
          <TouchableOpacity style={styles.list}
                              onPress={()=>this.handleSignOutUser()}>
                    <Text style={styles.Text}>Logout</Text>
          </TouchableOpacity>
          }
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Upper:{
    backgroundColor:'rgba(0,0,0,0.04)',
    paddingVertical:50,
    flexDirection:'row',
    alignItems:'center'
},
ProfileImage:{
    marginLeft:30,
    width:0.2*width,
    height:0.2*width,
    borderRadius:40
},
Profileright:{
    paddingLeft:20
},
list:{
  paddingTop:30
},
Text:{
  fontSize:17,
  paddingStart:25,
}
});

const mapStateToProps = (state) =>{ 
  return{ 
    isSigned:state.Auth.isSigned,
    profile_pic:state.Auth.profile_pic,
    profile_name:state.Auth.profile_name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signOutUser:() => dispatch(signOutUser()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
