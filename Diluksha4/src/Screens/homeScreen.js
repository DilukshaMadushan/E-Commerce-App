import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';
import Images from '../common/Images';
import HomeIconRow from '../components/HomeIconRow';
import HomeImageRow from '../components/HomeImageRow';
import HomeImageRow2 from '../components/HomeImageRow2';
import GetAPI from '../services/GetApi';
import Spinner from 'react-native-loading-spinner-overlay';

export default class homeScreen extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  componentWillMount() {
    this.getSliderImage();
  }

  getSliderImage() {
    this.setState({isLoading: true});
    GetAPI.getSliderImages()
      .then((response) => response.json())
      .then((json) => {
        const Images = json.images.map((image) => image.src);
        this.setState({images: Images});
        this.setState({isLoading: false});
      });
  }

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        {this.state.isLoading ? (
          <View style={{flex: 1, marginTop: width * 0.8}}>
            <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
              visible={this.state.isLoading}
              //textContent={'Loading...'}
              //textStyle={styles.spinnerTextStyle}
            /> */}
          </View>
        ) : (
          <ScrollView>
            {/* <View style={{ marginBottom: 15 }}>
              <HomeIconRow />
            </View> */}

            {/* <View style={{alignItems:"center",marginTop:25}}>
              
                  <ImageBackground source={require("../images/home/girl11.jpg")}
                                    style={{width:width*0.95, height:width*0.4, borderRadius:3}}>

                      <Text style={{color:"gray",fontSize:10,paddingTop:5,paddingLeft:30}}>SUMMER COLLECTION 2020</Text>
                      <Text style={{paddingTop:22,paddingLeft:30}}>BLUE SUMMERS</Text>
                      <Text style={{paddingLeft:30}}>ARE ALREADY IN</Text>
                      <Text style={{paddingLeft:30}}>STORE</Text>       
                  </ImageBackground>  
            </View> */}

            <SliderBox
              autoplay={true}
              circleLoop={true}
              images={this.state.images}
              resizeMode="contain"
              ImageComponentStyle={{
                width: width * 0.95,
                height: width * 0.45,
                resizeMode: 'contain',
                borderRadius: 7,
                alignSelf: 'center',
              }}
            />

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 18,
              }}>
              {/* <ImageBackground
                source={require("../images/home/boy11.jpg")}
                style={{
                  width: width * 0.95,
                  height: width * 0.4,
                  borderRadius: 3,
                }}
              >
                <Text
                  style={{
                    color: "gray",
                    fontSize: 10,
                    paddingTop: 25,
                    paddingLeft: 30,
                  }}
                >
                  FOR GEN
                </Text>
                <Text style={{ paddingLeft: 30 }}>HANG OUT & PARTY </Text>
              </ImageBackground> */}

              <TouchableOpacity
                //style={{}}
                activeOpacity={0.6}
                delayPressIn={0}
                onPress={() => this.props.navigation.navigate('EmailList')}>
                <Image
                  source={require('../images/banner/grocery.jpg')}
                  style={{
                    width: width * 0.95,
                    height: width * 0.4,
                    resizeMode: 'contain',
                    borderRadius: 7,
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Exo-Bold',
                color: '#162539',
                paddingTop: 15,
                paddingLeft: 15,
              }}>
              Recent Items
            </Text>
            <View>
              <HomeImageRow navigation={this.props.navigation} />
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Exo-Bold',
                color: '#162539',
                paddingTop: 15,
                paddingLeft: 15,
              }}>
              Biscuits
            </Text>
            <View>
              <HomeImageRow2 navigation={this.props.navigation} />
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
