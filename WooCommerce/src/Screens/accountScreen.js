import React, { useState  } from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import ProfileItems from '../components/Profile';



 class accountScreen extends React.Component {

  componentWillMount(){

  }

 
  render() {
    return (
        <ScrollView style={styles.accountScreen}>
            <ProfileItems/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  accountScreen: {
    paddingTop:10,
  },
});

export default accountScreen;