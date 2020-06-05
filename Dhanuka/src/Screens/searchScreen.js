import React, { useState  } from 'react';
import {TextInput,StyleSheet, Text, View, Image, Dimensions,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Images from '../common/Images';

export default class searchScreen extends React.Component {

 
  render() {
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
          <View style={styles.SearchBack}>
            <Image source={Images.logo} style={styles.SearchImage}/>
            <Text>Search item you are looking for...!!!</Text>
          </View>
          <Text style={styles.Search}>Search</Text>
          <View style={styles.SearchView}>
              <Icon name='search'
                    size={25}
                    type='Entypo'
                    color={'black'}/>
              <TextInput  style={styles.SearchInput}
                placeholder=" search for the item"
                maxLength={20}
              />
          </View>
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Search:{
    fontSize:25,
    padding:10,
  },
  SearchView:{
    flexDirection:'row',
    height: 50,
    marginHorizontal:10,
    paddingHorizontal:10,
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  SearchInput:{
    fontSize:16,
    paddingStart:10
  },
  SearchBack:{
    opacity:0.4,
    top:'40%',
    alignSelf:'center',
    position:'absolute',
    alignItems:'center'
  },
  SearchImage:{
    width:0.4*width,
    height:0.4*width,
  },
});
