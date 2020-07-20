import React, { Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image,FlatList} from "react-native";

import styles from "./styles";
import { Icon } from 'react-native-elements';
import Images from "../../common/Images";

import {connect} from 'react-redux';


class PaymentInputs extends Component{

    state=this.props.navigation.getParam('state');    
     
    postPayments(){

        fetch('https://www.waytoogo.com/wp-json/wc/v3/orders?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
              {
                method:'POST',
                headers : { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    payment_method: "bacs",
                    payment_method_title: "Direct Bank Transfer",
                    set_paid: true,
                    customer_id: this.props.signInId,
                    billing: {
                      first_name: this.state.first_name,
                      last_name: this.state.last_name,
                      address_1: this.state.address_1,
                      address_2: this.state.address_2,
                      city: this.state.city,
                      state: this.state.State,
                      postcode: this.state.postcode,
                      country: this.state.country,
                      email: this.state.email,
                      phone: this.state.phone
                    },
                    shipping: {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        address_1: this.state.address_1,
                        address_2: this.state.address_2,
                        city: this.state.city,
                        state: this.state.State,
                        postcode: this.state.postcode,
                        country: this.state.country,
                    },
                    //To Payment items plus
                    line_items: [
                      {
                        product_id: 93,
                        quantity: 2
                      },
                      {
                        product_id: 22,
                        variation_id: 23,
                        quantity: 1
                      }
                    ],
                    shipping_lines: [
                      {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "10"
                      }
                    ]

                  }),
              }).then((response) => response.json())
                 .then((responseJson) => {
                   try{
                      if (responseJson.role=="customer"){
                          this.props.navigation.navigate('Finish_Order');
                      }else{
                        this.props.navigation.navigate('Finish_Order');
                          //alert("Error");
                      }
                   }catch{
                    alert("Error");
                   }
                   console.log(responseJson);
                 })
                 .catch((error) => {
                   console.error(error);
                   alert(error);
                 });
      }

    render(){
      return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom:135}}>
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={styles.paymentMethods}
                                      onPress={() => {this.postPayments()}}>
                        <Image source={Images.CashOnDelivery}
                            style={{height:'60%',width:'100%'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentMethods}
                                      onPress={() => {this.postPayments()}}>
                        <Image source={Images.PayHere}
                            style={{height:'60%',width:'100%'}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',width:'100%',paddingTop:20}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Subtotal</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs {this.props.TotalPrice}</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',paddingVertical:20}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Delivery Payment</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs 0</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',paddingTop:15,paddingBottom:20,borderTopWidth:1,borderColor:'rgba(200,200,200,1)'}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Total</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs {this.props.TotalPrice}</Text>
                </View>     
            </ScrollView>
            {/* <View style={styles.ButtonsScreen}>
                <TouchableOpacity style={styles.buttonBack} activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('Delivery')}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNext} activeOpacity={0.5}
                                  onPress={() => this.props.navigation.navigate('Finish_Order')}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Comfirm Order</Text>
                </TouchableOpacity>
            </View> */}

        </View>
      );
    }
}

const mapStateToProps = (state) =>{ 
  return{ 
    TotalPrice:state.cartItems.totalPrice,
    signInId:state.signInid.signInId,
  }
}

export default connect(mapStateToProps,null)(PaymentInputs);