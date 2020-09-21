import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import EmptySearch from './EmptySearch';

function Item({ItemName, ItemPrice, uri, item, navigation}) {
  const {width} = Dimensions.get('window');
  return (
    <View
      style={{
        borderTopWidth: 4,
        paddingVertical: 10,
        borderColor: 'rgba(150,150,150,0.2)',
        width: width,
        backgroundColor: '#fff',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemView', {item: item})}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.ItemImage} source={{uri: uri}}></Image>
          <View style={styles.ItemName}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Exo-Medium',
                color: '#162539',
              }}>
              {ItemName}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: 'rgba(184,184,184,1)',
                fontFamily: 'Exo-Medium',
              }}>
              Rs {ItemPrice}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

class SearchList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.searchList.length > 0 ? (
          <ScrollView>
            <FlatList
              data={this.props.searchList}
              numColumns={1}
              renderItem={({item}) => (
                <Item
                  ItemName={item.name}
                  item={item}
                  uri={item.images[0].src}
                  ItemPrice={item.price}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        ) : (
          <EmptySearch />
        )}
      </View>
    );
  }
}

export default SearchList;
