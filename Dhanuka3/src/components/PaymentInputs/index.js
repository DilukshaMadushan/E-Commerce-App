import React, { Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image,ActivityIndicator, StatusBar, Dimensions} from "react-native";
import styles from "./styles";
import Images from "../../common/Images";
import {connect} from 'react-redux';
import {emptyCart} from "../../store/cartItemRedux";
import PostAPI from "../../services/PostAPI";


class PaymentInputs extends Component{

    state=this.props.navigation.getParam('state');  
    
    componentWillMount(){
      this.setState({isLoading:false});
    }
     
    postPayments(){
      this.setState({isLoading:true});
      const cart_item = this.props.cartItemList;
      let lineItems = [];
      for (let i=0;i<cart_item.length;i++){
        const item_1 = {
          product_id : cart_item[i].id,
          quantity: cart_item[i].count,
          total : (cart_item[i].count * parseFloat(cart_item[i].price)).toString()
        }

        lineItems.push(item_1);

      } 
        PostAPI.paymentInputsApi(
                JSON.stringify({
                    payment_method: "bacs",
                    payment_method_title: "Cache on Delivery",
                    set_paid: false,
                    customer_id: this.props.signInId,
                    total: this.props.TotalPrice.toString(),
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
                    line_items: lineItems,
                    shipping_lines: [
                      {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "10"
                      }
                    ]

                  }),)
                 .then((response) => response.json())
                 .then((responseJson) => {
                  this.setState({isLoading:false});
                   try{
                      if (responseJson.role=="customer"){
                          this.props.emptyCart();
                          this.props.navigation.navigate('Finish_Order');
                      }else{
                        this.props.emptyCart();
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
      const { width } = Dimensions.get('window');
      return (
        <View>
        {(this.state.isLoading==false)?
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

        </View>:
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:width*0.7}}>
          <ActivityIndicator/>
          <StatusBar barStyle="default"/>
      </View>}
        </View>
      );
    }
}

const mapStateToProps = (state) =>{ 
  return{ 
    TotalPrice:state.cartItems.totalPrice,
    signInId:state.Authid.signInId,
    cartItemList:state.cartItems.cartList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    emptyCart:() => dispatch(emptyCart()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentInputs);