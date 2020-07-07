import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions} from "react-native";

import Images from "../../common/Images";
import styles from "./styles";
import { Icon } from 'react-native-elements';



function Item({id,ItemName,ItemPrice,uri}) {
  return (
      <View style={{flexDirection:'row',
                    marginTop:7,
                    borderTopWidth:0.3,
                    borderBottomWidth:1,
                    paddingVertical:10,
                    borderColor:'rgba(184,184,184,1)',
                    width:width,
                    backgroundColor:'#fff',}}>
        <Image style={styles.ItemImage} source={uri}></Image>
        <View style={styles.ItemName}>
          <Text style={{fontSize:16,}}>{ItemName}</Text>
          <Text style={{fontSize:16,color:'rgba(184,184,184,1)'}}>{ItemPrice}</Text>
        </View>
        <TouchableOpacity style={styles.Delete}>
          <Icon name='trash'
                  type='font-awesome'
                  color={'rgba(184,184,184,1)'}/>
        </TouchableOpacity>
        <View style={styles.ItemCount}>
          <TouchableOpacity>
            <Icon name='caret-up'
                    containerStyle={styles.IconMathPlus}
                    size={25}
                    type='font-awesome'
                    color={'black'}/>
          </TouchableOpacity>
          <View style={{backgroundColor:'rgba(230,230,230,1)',
                        borderLeftWidth:1,
                        borderRightWidth:1,
                        borderColor:'rgba(184,184,184,1)'}}>
            <Text style={{alignSelf:'center',fontSize:20}}>1</Text>
          </View>
          <TouchableOpacity>
            <Icon name='caret-down'
                    containerStyle={styles.IconMathMinus}
                    size={25}
                    type='font-awesome'
                    color={'black'}/>
          </TouchableOpacity>
        </View>
      </View>
  );
}



const { width, height } = Dimensions.get("window");

class SelectedItem extends Component{
  data = [
    {
      id: '1',
      ItemName: 'First Item',
      ItemPrice:'10$',
      uri:Images.default_Item,
    },
  ];

  render(){
      return (
        <View style={styles.container}>
          <FlatList
            data={this.data}
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