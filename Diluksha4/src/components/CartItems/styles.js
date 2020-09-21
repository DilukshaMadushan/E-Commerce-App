import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#FFF',
  },
  Upper: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center',
  },
  UpperItems: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  IconView: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(184,184,184,1)',
  },
  Border: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(230,230,230,1)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#f7941d',
  },
  Cross: {
    flexDirection: 'row',
    position: 'absolute',
    top: '63%',
    width: 0.8 * width,
    height: 5,
  },
  TotalPrice: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  SelectedItemsView: {
    paddingTop: 10,
    marginBottom: 29,
    backgroundColor: '#FFF',
  },
});
