import React, { Component } from "react";
import { View,Text,ScrollView,TouchableOpacity,Image} from "react-native";

import styles from "./styles";
import { Icon } from 'react-native-elements';
import Images from "../../common/Images";


class PaymentInputs extends Component{

    render(){
      return (
        <View style={styles.container}>
            <ScrollView style={{marginBottom:135}}>
                <View style={{flexDirection:'column'}}>
                    <View style={styles.paymentMethodsrows}>
                        <TouchableOpacity style={styles.paymentMethods}>
                            <Image source={Images.BankTransfer}
                                    style={{height:'100%',width:'100%'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentMethods}>
                            <Image source={Images.Cheque}
                                    style={{height:'90%',width:'70%',borderRadius:10,}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paymentMethodsrows}>
                        <TouchableOpacity style={styles.paymentMethods}>
                            <Image source={Images.CashOnDelivery}
                                    style={{height:'100%',width:'100%',borderRadius:10,}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.paymentMethods}>
                            <Image source={Images.PayPal}
                                    style={{height:'50%',width:'80%'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paymentMethodsrows}>
                        <TouchableOpacity style={styles.paymentMethods}>
                            <Image source={Images.PayHere}
                                    style={{height:'100%',width:'100%',borderRadius:10,}}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flexDirection:'row',width:'100%',paddingTop:20}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Subtotal</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs 1000</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',paddingVertical:20}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Shopping</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs 1000</Text>
                </View>
                <View style={{flexDirection:'row',width:'100%',paddingTop:15,paddingBottom:20,borderTopWidth:1,borderColor:'rgba(200,200,200,1)'}}>
                    <Text style={{flex:1,paddingStart:20,fontSize:17}}>Total</Text>
                    <Text style={{paddingEnd:20,fontSize:17}}>Rs 2000</Text>
                </View>
            </ScrollView>
            <View style={styles.ButtonsScreen}>
                <TouchableOpacity style={styles.buttonBack} activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('Delivery')}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNext} activeOpacity={0.5}
                                  onPress={() => this.props.navigation.navigate('Finish_Order')}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Comfirm Order</Text>
                </TouchableOpacity>
            </View>

        </View>
      );
    }
}
    
  export default PaymentInputs;