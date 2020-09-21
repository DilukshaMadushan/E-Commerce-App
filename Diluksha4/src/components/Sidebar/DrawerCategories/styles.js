import React, {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'rgb(150,150,150)',
    fontFamily: 'Exo-Medium',
    paddingLeft: 15,
    paddingTop: 15,
  },
});
