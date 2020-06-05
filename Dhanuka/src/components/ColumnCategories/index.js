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


function Item({ title,uri,id,product,}) {


  return (
    <TouchableOpacity style={styles.item}
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
    </TouchableOpacity>
  );
}

class Categories extends React.Component {

  render() {
    return (
      <View style={{alignItems:'center'}}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => 
            <Item title={item.title} 
                  uri={item.uri} id={item.id}
                  product={item.product}/>
              }
          keyExtractor={item => item.id}
        />
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
          <Text style={{fontSize:25}}>Can't Go(Component)</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
  
export default Categories;

