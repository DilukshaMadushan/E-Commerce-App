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

  

class SubSecCategories extends React.Component{

 render(){
    return (
        <View style={styles.List}>
           {this.props.SubSecCategorylist.map((item,index) => (
              <TouchableOpacity 
                key = {item.id}
                style = {styles.ListItem}>
                    <Text style={{flex:1,paddingStart:25,textAlign:'center',fontSize:15,fontWeight:'bold'}}>
                      {item.name}
                    </Text>
                    <Icon name='chevron-right'
                          containerStyle={styles.ArrowIcon}
                          type='Entypo'
                          color={'black'}/>
              </TouchableOpacity>
            ))
          }
        </View>
    );
  }
}

export default SubSecCategories;
