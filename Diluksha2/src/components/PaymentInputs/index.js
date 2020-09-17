import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  Alert
} from 'react-native';

import styles from './styles';
import Images from '../../common/Images';
import {connect} from 'react-redux';
import {emptyCart} from '../../store/cartItemRedux';
import PostAPI from '../../services/PostAPI';
import GetAPI from '../../services/GetApi';
import Toast from '../../Modules/ToastModule';
import Spinner from 'react-native-loading-spinner-overlay';


class PaymentInputs extends Component {

  state = Object.assign(this.props.navigation.getParam('state'), {ShippingCost: 0, finalCost:this.props.TotalPrice});

  componentWillMount() {
    this.setState({isLoading: false});
    let finalCost=0;
    if (this.state.itemData.isBuyItem){
      finalCost = (Number(this.state.itemData.buyItem[0].price)*Number(this.state.itemData.buyItem[0].count)) + Number(this.state.deliveryCost);
    }else{
      finalCost = Number(this.props.TotalPrice) + Number(this.state.deliveryCost);
    }
    
    this.setState({finalCost:finalCost});

  }

  postPayments(paymentMethodId, paymentMethod, set_paid) {
    this.setState({isLoading: true});
    let cart_item=[];
    let FinalTotal=0;
    if (this.state.itemData.isBuyItem){
      cart_item = this.state.itemData.buyItem;
      FinalTotal = (Number(this.state.itemData.buyItem[0].price)*Number(this.state.itemData.buyItem[0].count)) + Number(this.state.deliveryCost);
    }else{
      cart_item = this.props.cartItemList;
      FinalTotal = Number(this.props.TotalPrice) + Number(this.state.deliveryCost);
    }
    
    let lineItems = [];
    for (let i = 0; i < cart_item.length; i++) {
      const item_1 = {
        product_id: cart_item[i].id,
        quantity: cart_item[i].count,
        total: (cart_item[i].count * parseFloat(cart_item[i].price)).toString(),
      };

      lineItems.push(item_1);
    }
    //console.log(this.state);
    
    PostAPI.paymentInputsApi(
      JSON.stringify({
        payment_method: paymentMethodId,
        payment_method_title: paymentMethod,
        set_paid: false,
        customer_id: this.props.signInId,
        total: FinalTotal.toString(),
        set_paid:set_paid,
        billing: {
          first_name: this.state.customerDetails.billing.first_name,
          last_name: this.state.customerDetails.billing.last_name,
          address_1: this.state.customerDetails.billing.address_1,
          address_2: this.state.customerDetails.billing.address_2,
          city: this.state.customerDetails.billing.city,
          state: this.state.customerDetails.billing.State,
          postcode: this.state.customerDetails.billing.postcode,
          country: this.state.customerDetails.billing.country,
          email: this.state.customerDetails.billing.email,
          phone: this.state.customerDetails.billing.phone,
        },
        shipping: {
          first_name: this.state.customerDetails.billing.first_name,
          last_name: this.state.customerDetails.billing.last_name,
          address_1: this.state.customerDetails.billing.address_1,
          address_2: this.state.customerDetails.billing.address_2+', '+this.state.area,
          city: this.state.customerDetails.billing.city,
          state: this.state.customerDetails.billing.State,
          postcode: this.state.customerDetails.billing.postcode,
          country: "Sri Lanka",
        },
        //To Payment items plus
        line_items: lineItems,
        shipping_lines: [
          {
            method_id: 'flat_rate',
            method_title: 'Flat Rate',
            total: this.state.deliveryCost.toString(),
          },
        ],
      }),
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({isLoading: false});
        try {
          console.log(responseJson.role);
          if (responseJson.role == 'customer') {
            if (!this.state.itemData.isBuyItem){
              this.props.emptyCart();
            }
            this.props.navigation.navigate('Finish_Order');
            
          } else {
            if (!this.state.itemData.isBuyItem){
              this.props.emptyCart();
            }
            this.props.navigation.navigate('Finish_Order');
            //alert("Error");
          }
        } catch {
          alert('Error');
        }
        //console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }

  // getShippingCost() {
  //   GetAPI.getShippingCostApi()
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({ShippingCost: json[0].settings.cost.value});
  //       const finalCost = Number(this.props.TotalPrice) + Number(json[0].settings.cost.value);
  //       this.setState({finalCost:finalCost});
  //       console.log(json[0].settings.cost.value);
  //     }).catch((error) => {
  //       console.error(error);
  //       alert(error);
  //     });
      
  //     //console.log(json[0].settings.cost.value);
  // }

  payFromPayhere = async () => {
      const response= await Toast.payOnce(this.state.finalCost,
                                          "Payment from "+this.state.customerDetails.billing.first_name,
                                          this.state.customerDetails.billing.first_name,
                                          this.state.customerDetails.billing.last_name,
                                          this.state.customerDetails.billing.email,
                                          this.state.customerDetails.billing.phone,
                                          this.state.customerDetails.billing.address_1,
                                          this.state.customerDetails.billing.city);
      //console.log(response);
      //alert(response);
      if (response=="2"){
        this.postPayments('payhere','payhere',true);
      }else{
        Alert.alert("Warning!", "Payment not completed", null, null);
      }
  }

  render() {
    const {width} = Dimensions.get('window');
    const FinalTotal =
      Number(this.props.TotalPrice) + Number(this.state.deliveryCost);
    return (
      <View>
        {this.state.isLoading == false ? (
          <View style={styles.container}>
            <ScrollView style={{marginBottom: 135}}>
              <View style={{flexDirection: 'row', alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  delayPressIn={0}
                  style={styles.paymentMethods}
                  onPress={() => {
                    this.postPayments('cod','Cash on delivery', false);
                  }}>
                  <Image
                    source={Images.CashOnDelivery}
                    style={{height: '60%', width: '100%'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  delayPressIn={0}
                  style={styles.paymentMethods}
                  onPress={() => {
                    //this.postPayments();
                    this.payFromPayhere();
                  }}>
                  <Image
                    source={Images.PayHere}
                    style={{height: '60%', width: '100%'}}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{flexDirection: 'row', width: '100%', paddingTop: 20}}>
                <Text style={{flex: 1, paddingStart: 20, fontSize: 17}}>
                  Subtotal
                </Text>
                <Text style={{paddingEnd: 20, fontSize: 17}}>
                  Rs {(this.state.itemData.isBuyItem)?(Number(this.state.itemData.buyItem[0].price)*Number(this.state.itemData.buyItem[0].count)):this.props.TotalPrice}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingVertical: 20,
                }}>
                <Text style={{flex: 1, paddingStart: 20, fontSize: 17}}>
                  Delivery Payment
                </Text>
                <Text style={{paddingEnd: 20, fontSize: 17}}>
                  Rs {this.state.deliveryCost}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingTop: 15,
                  paddingBottom: 20,
                  borderTopWidth: 1,
                  borderColor: 'rgba(200,200,200,1)',
                }}>
                <Text style={{flex: 1, paddingStart: 20, fontSize: 17}}>
                  Total
                </Text>
                <Text style={{paddingEnd: 20, fontSize: 17}}>
                  Rs {this.state.finalCost}
                </Text>
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
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: width * 0.7,
            }}>
              <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
              visible={true}
              textContent={'Loading...'}
              //textStyle={styles.spinnerTextStyle}
            /> */}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TotalPrice: state.cartItems.totalPrice,
    signInId: state.auth.signInId,
    cartItemList: state.cartItems.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => dispatch(emptyCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentInputs);
