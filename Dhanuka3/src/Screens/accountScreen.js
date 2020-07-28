import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,Image,Text,TouchableOpacity,Dimensions} from 'react-native';
import ProfileItems from '../components/Profile';
import Images from '../common/Images';
import { connect } from 'react-redux';
import {signOutUser} from "../store/AuthRedux";


 class accountScreen extends Component {

  handleSignOutUser = () => {
    this.props.signOutUser();
  }
 
  render() {
    return (
        <ScrollView style={styles.accountScreen}>
          <View style={styles.Upper}>
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
        </View>
          <ProfileItems navigation={this.props.navigation}/>
        </ScrollView>
    );
  }
}


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  accountScreen: {
    paddingTop:5,
  },
  Upper:{
    backgroundColor:'#fff',
    width:width,
    height:0.5*width,
    flexDirection:'row',
    alignItems:'center'
  },
  ProfileImage:{
    marginLeft:30,
    width:0.35*width,
    height:0.35*width,
    borderRadius:10
  },
  Profileright:{
    paddingLeft:30
  },
  Text:{
    fontSize:20,
    paddingStart:5,
    fontWeight:'bold',
    color:'rgba(200,200,200,1)'
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

export default connect(mapStateToProps,mapDispatchToProps)(accountScreen);