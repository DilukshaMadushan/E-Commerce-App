import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: '30%',
    backgroundColor: '#FFF',
    height: height,
  },
});
