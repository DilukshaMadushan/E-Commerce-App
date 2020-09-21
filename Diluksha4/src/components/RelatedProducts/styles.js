import React, {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  item: {
    width: 175,
    paddingRight: 10,
    marginBottom: 10,
  },
  itemView: {
    height: 200,
    justifyContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: '95%',
    borderRadius: 5,
  },
  ItemName: {
    fontSize: 15,
    fontFamily: 'Exo-Bold',
    color: '#162539',
    alignSelf: 'center',
  },
  ItemPrice: {
    alignSelf: 'flex-start',
    fontFamily: 'Exo-Medium',
    fontSize: 14,
    color: 'grey',
    paddingTop: 5,
  },
  ItemDiscount: {
    alignSelf: 'flex-start',
    fontSize: 13,
    fontFamily: 'Exo-Medium',
    color: 'rgba(0, 179, 155,0.7)',
    paddingTop: 5,
    marginRight: 5,
  },
  ItemPriceRegular: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontFamily: 'Exo-Medium',
    color: 'grey',
    paddingTop: 5,
    marginRight: 5,
    textDecorationLine: 'line-through',
  },
  wishlist: {
    height: 10,
    width: 10,
  },
  ShopItemIcon: {
    alignSelf: 'flex-end',
    paddingEnd: 5,
  },
});
