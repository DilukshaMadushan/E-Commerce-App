import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  Itemrows: {
    flexDirection: 'row',
    marginVertical: 10,
    width: width,
  },
  TextInputsName: {
    flex: 1,
    paddingStart: 15,
    fontSize: 16,
    alignSelf: 'center',
  },
  TextInputs: {
    flex: 1.7,
    fontSize: 16,
    paddingStart: 10,
    height: 40,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(220,220,220,0.8)',
    backgroundColor: 'rgba(220,220,220,0.5)',
  },
  Picker: {
    flex: 1.7,
    fontSize: 16,
    color: 'rgba(220,220,220,0.8)',
    paddingStart: 10,
    height: 50,
    marginRight: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'rgba(220,220,220,0.8)',
    backgroundColor: 'rgba(220,220,220,0.5)',
  },
  ButtonsScreen: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    height: 0.1 * width,
    width: width,
    backgroundColor: '#FFF',
  },
  Back: {
    flex: 1,
    backgroundColor: 'rgba(250,120,120,0.8)',
    paddingVertical: 5,
    justifyContent: 'center',
  },
  Save: {
    flex: 1,
    backgroundColor: 'rgba(0, 179, 155,0.7)',
    paddingVertical: 5,
    justifyContent: 'center',
  },
});
