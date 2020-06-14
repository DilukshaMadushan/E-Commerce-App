import React from 'react';
import {FlatList,StyleSheet, Text, View, Image, Dimensions,TouchableOpacity ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Images from '../../common/Images';


export default class home extends React.Component {
 
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.Upper}>
            <Image source={Images.default_Item}
                  style={styles.ProfileImage}/>
            <View style={styles.Profileright}>
                <Text style={{fontSize:25}}>Guest</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Text style={styles.Text}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}
                            onPress={()=>this.props.navigation.navigate('Login')}>
                  <Text style={styles.Text}>Login</Text>
          </TouchableOpacity>
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
  Upper:{
    backgroundColor:'rgba(0,0,0,0.04)',
    paddingVertical:50,
    flexDirection:'row',
    alignItems:'center'
},
ProfileImage:{
    marginLeft:30,
    width:0.2*width,
    height:0.2*width,
    borderRadius:40
},
Profileright:{
    paddingLeft:20
},
list:{
  paddingTop:30
},
Text:{
  fontSize:17,
  paddingStart:25,
}
});
