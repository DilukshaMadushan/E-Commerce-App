import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import ProfileItems from '../components/Profile';
import Images from '../common/Images';
import {connect} from 'react-redux';
import {signOutUser} from '../store/authRedux';
import DeleteAPI from '../services/DeleteApi';
import Spinner from 'react-native-loading-spinner-overlay';

class accountScreen extends Component {

  state = {
    isLoading:false,
  }

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  handleSignOutUser = () => {
    Alert.alert("","Are You Sure, You Want to Reset This Account?",[
      {
        text: 'Yes',
        onPress: () => this.deleteUser(),
        
      },
      {
        text: 'No',
        onPress: () => console.log('cancel'),
        style: 'cancel'
      },
    ],null);
    //this.deleteUser();
  };

  deleteUser(){
    this.setState({isLoading:true});
    DeleteAPI.deleteCustomer(this.props.signInId)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({isLoading:false});
      if (responseJson.id===this.props.signInId){
        this._storeData('isSigned', 'false');
        this._storeData('profileId', '-5');
        this.props.signOutUser();
        Alert.alert("","Successfully Signed Out!",null,null);
        this.props.navigation.navigate('Auth');
        
      }else{
        Alert.alert("","Please Try Again!",null,null);
      }
    })
    .catch((error) => {
      this.setState({isLoading:false});
      Alert.alert("","Please Try Again!",null,null);
    });
  }

  

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        <View style={styles.Upper}>
          {this.props.isSigned ? (
            <Image
              source={{uri: this.props.profile_pic}}
              style={styles.ProfileImage}
            />
          ) : (
            <Image source={Images.default_Item} style={styles.ProfileImage} />
          )}
          <View style={styles.Profileright}>
            {this.props.isSigned ? (
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                {this.props.profile_name}
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                Guest
              </Text>
            )}

            {!this.props.isSigned ? (
              <TouchableOpacity
                activeOpacity={0.6}
                delayPressIn={0}
                onPress={() => this.props.navigation.navigate('Auth')}>
                <Text style={styles.Text}>Register</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                activeOpacity={0.6}
                delayPressIn={0}
                onPress={() => this.handleSignOutUser()}>
                <Text style={styles.Text}>Reset Account</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        {(this.state.isLoading)?
        <Spinner
                visible={true}
                //textContent={'Loading...'}
              />:
        <ProfileItems navigation={this.props.navigation} />}
      </ScrollView>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  Upper: {
    backgroundColor: '#FFF',
    width: width,
    //height: 0.388 * width,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  ProfileImage: {
    //marginLeft: 30,
    marginTop:10,
    width: 0.3 * width,
    height: 0.3 * width,
    borderRadius: width/2*0.3,
  },
  Profileright: {
    //width: '60%',
    marginTop:5,
    marginBottom:10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(200,200,200,1)',
  },
});

const mapStateToProps = (state) => {
  return {
    isSigned: state.auth.isSigned,
    profile_pic: state.auth.profile_pic,
    profile_name: state.auth.profile_name,
    signInId: state.auth.signInId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(accountScreen);
