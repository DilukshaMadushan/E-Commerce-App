import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions,SafeAreaView } from "react-native";
import { connect } from "react-redux";


import Images from "../../common/Images";
import styles from "./styles";
import { Icon } from 'react-native-elements';


const DATA = [
  {
    id: '1',
    ItemName: 'First Item',
    ItemPrice:'10$',
    uri:Images.default_Item,
  },
  {
    id: '2',
    ItemName: 'Second Item',
    ItemPrice:'20$',
    uri:Images.default_Item_2,
  },
  {
    id: '3',
    ItemName: 'Third Item',
    ItemPrice:'30$',
    uri:Images.default_Item_3,
  },
  {
    id: '4',
    ItemName: 'Fourth Item',
    ItemPrice:'40$',
    uri:Images.default_Item_4,
  },
  
];


function Item({id,ItemName,ItemPrice,uri}) {
  return (
      <View style={{flexDirection:'row',
                    marginTop:10,
                    paddingVertical:10,
                    width:width,
                    backgroundColor:'#fff',
                    justifyContent:'center'}}>
        <Image style={styles.ItemImage} source={uri}></Image>
        <Text style={styles.ItemName}>{ItemName}</Text>
        <TouchableOpacity style={styles.Delete}>
          <Icon name='trash'
                  containerStyle={styles.Delete}
                  type='font-awesome'
                  color={'black'}/>
        </TouchableOpacity>
        <View style={styles.ItemCount}>
          <TouchableOpacity>
            <Icon name='plus'
                    containerStyle={styles.IconMathPlus}
                    type='font-awesome'
                    color={'black'}/>
          </TouchableOpacity>
          <View style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
            <Text style={{alignSelf:'center',fontSize:20}}>1</Text>
          </View>
          <TouchableOpacity>
            <Icon name='minus'
                    containerStyle={styles.IconMathMinus}
                    type='font-awesome'
                    color={'black'}/>
          </TouchableOpacity>
        </View>
      </View>
  );
}



const { width, height } = Dimensions.get("window");

class SelectedItem extends Component {

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.TotalPrice}>Total Price</Text>
          <FlatList
          data={DATA}
          numColumns={1}
          renderItem={({ item }) => 
          <Item ItemName={item.ItemName} 
                uri={item.uri} 
                id={item.id}
                ItemPrice={item.ItemPrice}/>}
          keyExtractor={item => item.id}
          />
        </View>

      );
    }
  }
    
  export default SelectedItem;