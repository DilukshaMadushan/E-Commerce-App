import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  AsyncStorage,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Images from '../../common/Images';
import {connect} from 'react-redux';
import {signOutUser} from '../../store/authRedux';
import DrawerCategories from './DrawerCategories';
import {ScrollView} from 'react-native-gesture-handler';
import DeleteAPI from '../../services/DeleteApi';
import Spinner from 'react-native-loading-spinner-overlay';

class SideBar extends Component {
  state = {
    isLoading: false,
  };

  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('this is ', key, value);
    } catch (error) {
      console.log(error);
    }
  };

  handleSignOutUser = () => {
    Alert.alert(
      '',
      'Are You Sure, You Want to Reset This Account?',
      [
        {
          text: 'Yes',
          onPress: () => this.deleteUser(),
        },
        {
          text: 'No',
          onPress: () => console.log('cancel'),
          style: 'cancel',
        },
      ],
      null,
    );
    //this.deleteUser();
  };

  deleteUser() {
    this.setState({isLoading: true});
    DeleteAPI.deleteCustomer(this.props.signInId)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        this.setState({isLoading: false});
        if (responseJson.id === this.props.signInId) {
          this._storeData('isSigned', 'false');
          this._storeData('profileId', '-5');
          this.props.signOutUser();
          Alert.alert('', 'Successfully Signed Out!', null, null);
          this.props.navigation.navigate('Auth');
        } else {
          Alert.alert('', 'Please Try Again!', null, null);
        }
      })
      .catch((error) => {
        this.setState({isLoading: false});
        Alert.alert('', 'Please Try Again!', null, null);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.Upper}
          onPress={() => this.props.navigation.navigate('Account')}>
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
              <Text
                style={{
                  color: '#162539',
                  fontSize: 25,
                  fontFamily: 'Exo-ExtraBold',
                }}>
                {this.props.profile_name}
              </Text>
            ) : (
              <Text
                style={{
                  color: '#162539',
                  fontSize: 25,
                  fontFamily: 'Exo-ExtraBold',
                }}>
                Guest
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <ScrollView>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate('Category')}>
            <Text style={styles.Text}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Text style={styles.Text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => this.props.navigation.navigate('AboutUs')}>
            <Text style={styles.Text}>About Us</Text>
          </TouchableOpacity>
          {!this.props.isSigned ? (
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.props.navigation.navigate('Auth')}>
              <Text style={styles.Text}>Register</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.handleSignOutUser()}>
              <Text style={styles.Text}>Reset Account</Text>
            </TouchableOpacity>
          )}

          <View>
            <Text
              style={{
                paddingTop: 15,
                paddingStart: 25,
                color: '#162539',
                fontFamily: 'Exo-ExtraBold',
                fontSize: 25,
              }}>
              Categories
            </Text>
            {this.state.isLoading ? (
              <Spinner visible={true} />
            ) : (
              <DrawerCategories />
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "rgba(0,0,0,0.04)",
  },
  Upper: {
    paddingVertical: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(150,150,150,0.1)',
  },
  ProfileImage: {
    marginLeft: 30,
    width: 0.2 * width,
    height: 0.2 * width,
    borderRadius: 40,
  },
  Profileright: {
    paddingLeft: 20,
    width: 180,
  },
  list: {
    borderBottomWidth: 1,
    borderColor: 'rgba(150,150,150,0.1)',
    paddingVertical: 10,
  },
  Text: {
    fontSize: 17,
    paddingStart: 25,
    color: '#162539',
    fontFamily: 'Exo-ExtraBold',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    isSigned: state.auth.isSigned,
    profile_pic: state.auth.profile_pic,
    profile_name: state.auth.profile_name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
