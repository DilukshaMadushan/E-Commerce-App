import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

class FinishOrderInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Upper}>
          <View style={styles.Cross}>
            <View style={{flex: 1, backgroundColor: '#f7941d'}}></View>
            <View style={{flex: 1, backgroundColor: '#f7941d'}}></View>
            <View style={{flex: 1, backgroundColor: '#f7941d'}}></View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Medium', color: '#162539'}}>
              cart
            </Text>
            <View style={(styles.IconView, styles.Border)}>
              <Icon
                name="shopping-cart"
                size={15}
                type="font-awesome"
                color={'#f7941d'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Medium', color: '#162539'}}>
              Delivery
            </Text>
            <View style={(styles.IconView, styles.Border)}>
              <Icon
                name="paper-plane"
                size={15}
                type="font-awesome"
                color={'#f7941d'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Medium', color: '#162539'}}>
              Payment
            </Text>
            <View style={(styles.IconView, styles.Border)}>
              <Icon
                name="paypal"
                size={15}
                type="font-awesome"
                color={'#f7941d'}
              />
            </View>
          </View>
          <View style={styles.UpperItems}>
            <Text style={{fontFamily: 'Exo-Medium', color: '#162539'}}>
              Order
            </Text>
            <View style={(styles.IconView, styles.Border)}>
              <Icon name="flag" size={20} type="Entypo" color={'#f7941d'} />
            </View>
          </View>
        </View>
        <View style={styles.ThankYouScreen}>
          <View style={styles.ThankIconView}>
            <Icon name="check" size={50} type="Entypo" color={'#FFF'} />
          </View>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'Exo-Bold',
              color: '#162539',
              paddingTop: 20,
            }}>
            Thank You
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingTop: 20,
              fontFamily: 'Exo-Medium',
              color: '#162539',
              textAlign: 'center',
            }}>
            Thank you so much for your purchased,to check your delivery status
            please go to My Order
          </Text>
          <TouchableOpacity
            style={styles.buttonViewOrader}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('MyOrders')}>
            <Text style={{color: '#fff', fontFamily: 'Exo-Bold', fontSize: 20}}>
              View My Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonGoHome}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={{color: '#fff', fontFamily: 'Exo-Bold', fontSize: 20}}>
              Go to Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FinishOrderInfo;
