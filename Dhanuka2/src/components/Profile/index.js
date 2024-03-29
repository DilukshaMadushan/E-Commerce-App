import React, { useState  } from 'react';
import {
  FlatList,
  Text, 
  View, 
  Image, 
  Dimensions,
  TouchableOpacity, 
} from 'react-native';

import styles from './styles';
import { Icon } from 'react-native-elements';

  
function ProfileItems(){
    return (
      <View>
        <View style={styles.List}>
          <TouchableOpacity  
            style={styles.ListItem}>
            <Icon name='shopping-cart'
                containerStyle={styles.ItemIcon}
                type='font-awesome'
                color={'black'}/>
            <Text style={{flex:1,textAlign:'center'}}>My Orders</Text>
            <Icon name='chevron-right'
                containerStyle={styles.ArrowIcon}
                type='Entypo'
                color={'black'}/>
          </TouchableOpacity>
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
                containerStyle={styles.ItemIcon,{paddingStart:22}}
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

export default ProfileItems;
