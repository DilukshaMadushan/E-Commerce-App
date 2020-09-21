import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import RateApp from '../RateApp';

class ProfileItems extends Component {
  state = {
    isModalVisible: false,
  };

  render() {
    return (
      <View style={styles.List}>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          onPress={() => this.props.navigation.navigate('UpdateProfile')}
          style={styles.ListItem}>
          <Icon
            name="pencil-square"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Update Your Informations</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          onPress={() => this.props.navigation.navigate('MyOrders')}
          style={styles.ListItem}>
          <Icon
            name="shopping-cart"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>My Orders</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          onPress={() => this.props.navigation.navigate('MyWishlist')}
          style={styles.ListItem}>
          <Icon
            name="heart"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>My Wishlists</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          onPress={() => this.props.navigation.navigate('EmailList')}
          style={styles.ListItem}>
          <Icon
            name="envelope"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Upload your Grocery list</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.ListItem}>
            <Icon
              name='bell'
              containerStyle={styles.ItemIcon}
              type='font-awesome'
              color={"black"}
            />
            <Text style={styles.Text}>
              Get notification
            </Text>
            <Icon
              name='chevron-right'
              containerStyle={styles.ArrowIcon}
              type='Entypo'
              color={"black"}
            />
          </TouchableOpacity>/ */}
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          style={styles.ListItem}
          onPress={() => this.setState({isModalVisible: true})}>
          <Icon
            name="star"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Rate the App</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <RateApp toggleModal={() => this.setState({isModalVisible: false})} />
        </Modal>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          style={styles.ListItem}
          onPress={() => this.props.navigation.navigate('PrivacyAndPolicy')}>
          <Icon
            name="grav"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Privacy Policy and Term</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          style={styles.ListItem}
          onPress={() => this.props.navigation.navigate('AboutUs')}>
          <Icon
            name="info"
            containerStyle={(styles.ItemIcon, {paddingStart: 22})}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>About Us</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          delayPressIn={0}
          style={styles.ListItemContact}
          onPress={() => this.props.navigation.navigate('ContactUs')}>
          <Icon
            name="phone"
            containerStyle={(styles.ItemIcon, {paddingStart: 22})}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Contact Us</Text>
          <Icon
            name="chevron-right"
            containerStyle={styles.ArrowIcon}
            type="Entypo"
            color={'grey'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileItems;
