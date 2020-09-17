import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  List: {
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  },
  ListItem: {
    width: width*0.85,
    height: 0.13 * width,
    //marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff0f0',
    borderRadius:25,
    marginTop:10
  },
  ListItemContact: {
    width: width*0.85,
    height: 0.13 * width,
    //marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff0f0',
    borderRadius:25,
    marginBottom: 25,
    marginTop:10
  },
  ItemIcon: {
    paddingStart: 15,
    alignContent: 'center',
  },
  ArrowIcon: {
    justifyContent: 'flex-end',
    paddingRight: 5,
  },
  Text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'grey',
  },
});
