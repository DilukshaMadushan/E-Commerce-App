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
} from 'react-native';
import ProfileItems from '../components/Profile';
import Images from '../common/Images';
import {connect} from 'react-redux';
import {signOutUser} from '../store/authRedux';

class accountScreen extends Component {
  _storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  handleSignOutUser = () => {
    this._storeData('isSigned', 'false');
    this._storeData('profileId', '-5');
    this.props.signOutUser();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View>
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
                onPress={() => this.props.navigation.navigate('Auth')}>
                <Text style={styles.Text}>Register</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => this.handleSignOutUser()}>
                <Text style={styles.Text}>Reset Account</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <ProfileItems navigation={this.props.navigation} />
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  Upper: {
    backgroundColor: '#FFF',
    width: width,
    height: 0.388 * width,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileImage: {
    marginLeft: 30,
    width: 0.3 * width,
    height: 0.3 * width,
    borderRadius: 10,
  },
  Profileright: {
    width: '60%',
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(accountScreen);
