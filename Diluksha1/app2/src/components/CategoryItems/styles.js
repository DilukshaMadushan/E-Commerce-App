import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  item: {
    width: '50%',
    height: 0.9 * width,
    paddingHorizontal: 10,
    paddingBottom: 80,
    marginBottom: 10,
  },
  itemView: {
    justifyContent: 'center',
    borderRadius: 0,
  },
  itemImage: {
    width: '100%',
    height: '95%',
    borderRadius: 5,
  },
  ItemName: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
  },
  ItemPrice: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: 'grey',
    paddingTop: 5,
  },
  wishlist: {
    height: 10,
    width: 10,
  },
  ShopItemIcon: {
    alignSelf: 'flex-end',
    paddingEnd: 5,
  },
  pageButton: {
    borderRadius: 10,
    backgroundColor: 'rgba(150,150,150,0.6)',
    padding: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageButtonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});
