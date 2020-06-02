import React, { useState  } from 'react';
import {
  FlatList,
  Text, 
  View, 
  Image, 
  Dimensions,
  TouchableOpacity, 
  ImageStore
} from 'react-native';

import styles from './styles';
import Images from '../../common/Images';
import { Icon } from 'react-native-elements';

class ProfileItems extends React.Component {

  
  render() {
    const { width } = Dimensions.get('window');
    return (
      <View>
        <View style={styles.Upper}>
          <Image source={Images.default_Item}
                 style={styles.ProfileImage}/>
          <View style={styles.Profileright}>
              <Text style={{fontSize:30}}>Name</Text>
              <TouchableOpacity>
                 <Text style={{fontSize:20,color:'grey'}}>Login</Text>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.List}>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='heart'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>My Wishlists</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='bell'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>Get notification</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='credit-card'
                containerStyle={styles.ItemIcon}
                type='Entypo'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>Currency</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='star'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>Rate the App</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='grav'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>Privacy and Term</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.ListItem}>
            <Icon name='info'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>About Us</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ProfileItems;
