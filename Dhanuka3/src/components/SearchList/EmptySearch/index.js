import React, { Component } from "react";
import { View,Text,} from "react-native";

import styles from "./styles";
import { Icon } from 'react-native-elements';


class  EmptySearch extends Component {
  render(){
      return (
        <View style={styles.container}>
            <View>
            <Icon name='frown-o'
                size={80}
                containerStyle={styles.ShopItemIcon}
                type='font-awesome'
                color={'black'}/>
            </View>
            <Text style={{fontSize:15,alignSelf:'center'}}>Sorry...!!! There is no any item you searched</Text>
            <Text style={{fontSize:15,alignSelf:'center'}}>Try another Search</Text>
        </View>

      );
    }
  }
    
  export default EmptySearch;