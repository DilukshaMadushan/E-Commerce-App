import React, { Component } from "react";
import { View,Text,TouchableOpacity} from "react-native";
import styles from "./styles";
import { Icon } from 'react-native-elements';

class FinishOrderInfo extends Component{
    render(){
      return (
        <View style={styles.container}>
            <View style={styles.Upper}>
                <View style={styles.Cross}>
                    <View style={{flex:1,backgroundColor:'rgba(0, 179, 155,1)'}}></View>
                    <View style={{flex:1,backgroundColor:'rgba(0, 179, 155,1)'}}></View>
                    <View style={{flex:1,backgroundColor:'rgba(0, 179, 155,1)'}}></View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>cart</Text>
                    <View style={styles.IconView,styles.Border}>
                        <Icon name='shopping-cart'
                              size={15}
                              type='font-awesome'
                              color={'rgba(0, 179, 155,1)'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Delivery</Text>
                    <View style={styles.IconView,styles.Border}>
                        <Icon name='paper-plane'
                            size={15}
                            type='font-awesome'
                            color={'rgba(0, 179, 155,1)'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Payment</Text>
                    <View style={styles.IconView,styles.Border}>
                        <Icon name='paypal'
                            size={15}
                            type='font-awesome'
                            color={'rgba(0, 179, 155,1)'}/>
                    </View>
                </View>
                <View style={styles.UpperItems}>
                    <Text>Order</Text>
                    <View style={styles.IconView,styles.Border}>
                        <Icon name='flag'
                            size={20}
                            type='Entypo'
                            color={'rgba(0, 179, 155,1)'}/>
                    </View>
                </View>
            </View>
            <View style={styles.ThankYouScreen}>
                <View style={styles.ThankIconView}>
                    <Icon name='check'
                          size={50}
                          type='Entypo'
                          color={'#FFF'}/>
                </View>
                <Text style={{fontSize:30,fontWeight:'bold',paddingTop:20}}>Thank You</Text>
                <Text style={{fontSize:15,paddingTop:20,textAlign:'center'}}>Thank you so much for your purchased,to check your delivery status please go to My Order</Text>
                <TouchableOpacity style={styles.buttonViewOrader} activeOpacity={0.5} 
                                  onPress={() => this.props.navigation.navigate('MyOrders')}>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>View My Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonViewOrader} activeOpacity={0.5} 
                                  onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
}
    
  export default FinishOrderInfo ;