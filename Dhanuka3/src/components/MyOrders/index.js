import React, { Component } from "react";
import { View, FlatList, Image,Text,Dimensions,TouchableOpacity} from "react-native";

import styles from "./styles";
import EmptyMyOrders from './EmptyMyOrders';

function Item({ItemNumber,Date,Status,PaymentMethod,Total}) {
  return (
      <View style={{flexDirection:'column',
                    marginTop:20,
                    borderTopWidth:0.3,
                    borderBottomWidth:1,
                    padding:10,
                    borderColor:'rgba(184,184,184,1)',
                    width:width,
                    backgroundColor:'#fff',}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Order Number:</Text>
          <Text style={{alignSelf:'flex-end'}}>{ItemNumber}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Order Date:</Text>
          <Text style={{alignSelf:'flex-end'}}>{Date}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Status:</Text>
          <Text style={{alignSelf:'flex-end'}}>{Status}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Payment Method:</Text>
          <Text style={{alignSelf:'flex-end'}}>{PaymentMethod}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style={{flex:1}}>Total:</Text>
          <Text style={{alignSelf:'flex-end'}}>Rs {Total}</Text>
        </View>
      </View>
  );
}






const { width, height } = Dimensions.get("window");

class MyOrders extends Component {

  state = {
    OrderedList:[],
  }
  
  componentWillMount(){
      this.getOrderedList();
      console.log('aaa');
      
  }
  
  getOrderedList(){
  
    fetch('https://www.waytoogo.com/wp-json/wc/v3/orders/73?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
      
      })
    .then((response) => response.json())
    .then((responsejson) => {
       this.setState({OrderedList:responsejson});
    })
  }

  render(){
    return (
      <View style={styles.container}>
      {this.state.OrderedList.length > 0 ?
        <FlatList
          data={this.state.OrderedList}
          numColumns={1}
          renderItem={({ item }) => 
          <Item ItemNumber={item.number}
                Date={item.date_created}
                Status={item.status}
                PaymentMethod={item.payment_method_title} 
                Total={item.total}
          />}
          keyExtractor={item => item.id}
          />
          : <EmptyMyOrders navigation={this.props.navigation}/> 
        }
      </View>
      );
    }
}

export default MyOrders;
