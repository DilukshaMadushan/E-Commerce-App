import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 70,
    backgroundColor: '#FFF',
  },
  ShoppingButton: {
    height: 50,
    width: 200,
    marginHorizontal: 30,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(0, 179, 155,0.7)',
  },
});
