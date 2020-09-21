import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import Images from '../../common/Images';
import styles from './styles';

class HomeIconRow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[
              {name: 'Bags', url: Images.bag1, color: '#d0def1'},
              {name: 'Shorts', url: Images.short1, color: '#cafcc1'},
              {name: 'Frocks', url: Images.ic_dress, color: '#fee7f7'},
              {name: 'Shoes', url: Images.ic_shoes, color: '#ffdcd2'},
              {name: 'T-shirt', url: Images.ic_tshirt, color: '#d0def1'},
              {name: 'Caps', url: Images.ic_tie, color: '#e6fffd'},
            ]}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.Petaccount}>
                <View
                  style={[{backgroundColor: item.color}, styles.ImageIcons]}>
                  <Image
                    source={item.url}
                    style={styles.ProfileImagePet}
                    resizeMode="contain"></Image>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontFamily: 'Exo-Medium',
                      alignSelf: 'center',
                      color: 'gray',
                    }}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default HomeIconRow;
