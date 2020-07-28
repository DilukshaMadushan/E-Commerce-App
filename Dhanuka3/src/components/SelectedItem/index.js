import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions,} from "react-native";
import styles from "./styles";
import { Icon } from 'react-native-elements';
import EmptyCart from './EmptyCart';
import {connect} from 'react-redux';
import {removecartItem,incrementCount,decrementCount} from "../../store/cartItemRedux";

function Item({ItemName,ItemPrice,uri,count,counterIncrease,counterDecrease,removeItem,item}) {
  return (
      <View style={{flexDirection:'row',
                    marginTop:7,
                    borderTopWidth:0.3,
                    borderBottomWidth:1,
                    paddingVertical:10,
                    borderColor:'rgba(184,184,184,1)',
                    width:width,
                    backgroundColor:'#fff',}}>
        <Image style={styles.ItemImage} source={{uri:uri}}></Image>
        <View style={styles.ItemName}>
          <Text style={{fontSize:16,}}>{ItemName}</Text>
          <Text style={{fontSize:16,color:'rgba(184,184,184,1)'}}>Rs {ItemPrice}</Text>
        </View>
        <TouchableOpacity style={styles.Delete} onPress={()=>removeItem(item)}>
          <Icon name='trash'
                  type='font-awesome'
                  color={'rgba(184,184,184,1)'}/>
        </TouchableOpacity>
        <View style={styles.ItemCount}>
          <TouchableOpacity onPress={()=>counterIncrease(item)}>
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
            <Text style={{alignSelf:'center',fontSize:20}}>{count}</Text>
          </View>
          <TouchableOpacity onPress={()=>counterDecrease(item)}>
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


  handle = () => {
    console.log(this.props.cartItems);
  }


  render(){

      return (
        <View style={styles.container}>
        {this.props.cartItems.length > 0 ? 
          <FlatList
            data={this.props.cartItems}
            numColumns={1}
            renderItem={({ item }) => 
            <Item ItemName={item.name} 
                  item={item}
                  uri={item.images[0].src} 
                  count={item.count}
                  counterIncrease={this.props.onincreaseCount}
                  counterDecrease={this.props.ondecreaseCount}
                  ItemPrice={item.price}
                  removeItem={this.props.removeItem}
            />}
            keyExtractor={item => item.id}
            />
            : <EmptyCart navigation={this.props.navigation}/> 
          }
        </View>
      );
    }
  }
  const mapStateToProps = (state) =>{ 
    return{ 
      cartItems:state.cartItems.cartList,
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      onincreaseCount: (product) => {dispatch(incrementCount(product))},
      ondecreaseCount: (product) => {dispatch(decrementCount(product))},
        removeItem:(product) => dispatch(removecartItem(product)),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SelectedItem);
  