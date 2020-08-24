import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
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
          onPress={() => this.props.navigation.navigate('EmailList')}
          style={styles.ListItem}>
          <Icon
            name="envelope"
            containerStyle={styles.ItemIcon}
            type="font-awesome"
            color={'grey'}
          />
          <Text style={styles.Text}>Email Your Order List</Text>
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
      </View>
    );
  }
}

export default ProfileItems;
