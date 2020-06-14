import React from "react";
import { View, FlatList, Image, Text,TouchableOpacity} from "react-native";
import { connect } from "react-redux";

import styles from './styles';
import Images from "../../common/Images";


const DATA = [
  {
    id: '1',
    title: 'First Category',
    product:'14 Products',
    uri:Images.default_Category_1,
  },
  {
    id: '2',
    title: 'Second Category',
    product:'24 Products',
    uri:Images.default_Category_2,
  },
  {
    id: '3',
    title: 'Third Category',
    product:'34 Products',
    uri:Images.default_Category_3,
  },
  {
    id: '4',
    title: 'Fourth Category',
    product:'44 Products',
    uri:Images.default_Category_4,
  },
];


function Item({title,uri,id,product,}) {

  return (
    <View style={styles.item}
                      activeOpacity={0.7}
                      >
      <Image style={styles.imagecategories} source={uri}></Image>
      <View style={styles.dark}></View>
      <View style={[id % 2 == 0 && { alignItems: "flex-end",paddingEnd:20},
                    id % 2 != 0 && { alignItems: "flex-start",paddingStart:20},
                    ]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.product}>{product}</Text>
      </View>
    </View>
  );
}


function Categories({navigation}){
    return (
      <View style={{alignItems:'center'}}>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>
          <TouchableOpacity onPress={()=>navigation.navigate('Items')}>
            <Item title={item.title} 
                  uri={item.uri} id={item.id}
                  product={item.product}
                  />
          </TouchableOpacity> 
              }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
  
export default Categories;

