import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  categoryScreen: {height: '100%', backgroundColor: '#FFF'},
  ItemImage: {
    width: 0.8 * width,
    height: width,
    alignSelf: 'center',
  },
  ItemName: {
    fontSize: 20,
    fontFamily: 'Exo-Bold',
    color: '#162539',
    paddingTop: 10,
    alignSelf: 'center',
  },
  ItemPrice: {
    fontSize: 17,
    fontFamily: 'Exo-Medium',
    paddingTop: 10,
    alignSelf: 'center',
    color: 'grey',
    marginRight: 5,
  },
  ItemDiscount: {
    fontSize: 15,
    fontFamily: 'Exo-Medium',
    paddingTop: 10,
    alignSelf: 'center',
    color: 'rgba(0, 179, 155,0.7)',
    //marginRight:5,
  },
  ItemPriceRegular: {
    fontSize: 17,
    fontFamily: 'Exo-Medium',
    paddingTop: 10,
    alignSelf: 'center',
    color: 'grey',
    marginRight: 10,
    textDecorationLine: 'line-through',
  },
  ItemReviews: {
    flexDirection: 'row',
    paddingTop: 5,
    alignSelf: 'center',
    alignItems: 'flex-end',
  },
  Review: {
    fontSize: 17,
    paddingTop: 5,
  },
  ReviewNumber: {
    fontSize: 17,
    color: '#162539',
    fontFamily: 'Exo-Medium',
  },
  ItemTab: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Tabs
  button: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#f36523',
  },
  buttonPressed: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 20, 20, 0.2)',
    padding: 10,
  },

  DescriptionView: {
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
    marginBottom: 5,
    paddingBottom: 40,
  },
  Description: {
    fontFamily: 'Exo-Medium',
    color: '#162539',
    paddingVertical: 5,
    fontSize: 15,
  },
  buttonAddToCart: {
    flex: 1,
    backgroundColor: '#ed1b24',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBuyNow: {
    flex: 1,
    backgroundColor: '#f7941d',
    paddingVertical: 5,
    justifyContent: 'center',
  },
});
