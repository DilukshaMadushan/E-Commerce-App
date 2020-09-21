import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

class AboutUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontFamily: 'Exo-Bold',
            color: '#162539',
            marginVertical: 20,
          }}>
          About Us
        </Text>
        <Text
          style={{
            color: 'grey',
            fontFamily: 'Exo-Light',
            fontSize: 15,
            marginVertical: 20,
            paddingBottom: '25%',
            paddingHorizontal: 20,
            textAlign: 'center',
          }}>
          Waytoogo is currently based bandarawela. implemented on 2019, Our
          Brands are Online shopping, Printing, wholesale. our main goal is to
          deliver more then expected with ease.
        </Text>
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
});

export default AboutUs;
