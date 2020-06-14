import React, { useState  } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import ProfileItems from '../components/Profile';
import Images from '../common/Images';



 class accountScreen extends React.Component {

 
  render() {
    return (
        <ScrollView style={styles.accountScreen}>
          <View style={styles.Upper}>
            <Image source={Images.default_Item}
                  style={styles.ProfileImage}/>
            <View style={styles.Profileright}>
                <Text style={{fontSize:30}}>Guest</Text>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                  <Text style={{fontSize:20,color:'grey'}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
            <ProfileItems/>
        </ScrollView>
    );
  }
}


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  accountScreen: {
    paddingTop:5,
  },
  Upper:{
    backgroundColor:'#fff',
    width:width,
    height:0.5*width,
    flexDirection:'row',
    alignItems:'center'
},
ProfileImage:{
    marginLeft:30,
    width:0.35*width,
    height:0.35*width,
    borderRadius:10
},
Profileright:{
    paddingLeft:30
},
});

export default accountScreen;