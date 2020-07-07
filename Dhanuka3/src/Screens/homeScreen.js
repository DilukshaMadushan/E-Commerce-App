import React, { useState  } from 'react';
import {FlatList,StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import Images from '../common/Images';

export default class homeScreen extends React.Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{backgroundColor:"white",marginTop:13}}>
            <ScrollView>
              <FlatList 
                //numColumns={3}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[{"name" : "Bags", "url": Images.bag1, "color":"#d0def1" },
                       {"name" : "Shorts", "url": Images.short1, "color": "#cafcc1" },
                       {"name" : "Frocks", "url": Images.ic_dress, "color":"#fee7f7" },
                       {"name" : "Shoes", "url": Images.ic_shoes, "color":"#ffdcd2" },
                       {"name" : "T-shirt", "url": Images.ic_tshirt, "color":"#d0def1" },
                       {"name" : "Caps", "url": Images.ic_tie, "color":"#e6fffd" },]}
                renderItem={({item}) =>
                <TouchableOpacity style={styles.Petaccount}
                                  onPress={()=>{ // this.props.navigation.navigate('Mypet',{'id':item._id,
                                        //                                         'name':item.name,
                                        //                                          'description':item.description,
                                        //                                          'URL':item.URL});
                                  }}>
                                  <View style={{marginRight:12,
                                                marginLeft:12,
                                                backgroundColor:item.color,
                                                width:47,
                                                height : 47,
                                                borderRadius:47,
                                                justifyContent : "center",
                                                alignItems:"center"}}>
                                    <Image source= {item.url}
                                           style={styles.ProfileImagePet}
                                           resizeMode="contain">  
                                    </Image>
                                  </View>
                                  <View>
                                    <Text style={{fontSize: 11,
                                                //fontWeight: 'bold',
                                                  alignSelf:'center',
                                                  color : 'gray'}}>{item.name}</Text>
                                  </View>
                </TouchableOpacity>    
              }/>
            </ScrollView>
          </View>
          <View style={{alignItems:"center",marginTop:25}}>
            {/* <Image source= {require('../Images/home/girl1.jpg')}
                       style={styles.ProfileImagePet}
                       resizeMode="contain">     
                </Image> */}
                <ImageBackground source={require("../images/home/girl11.jpg")}
                                  style={{width:width*0.95, height:width*0.4, borderRadius:3}}>

                    <Text style={{color:"gray",fontSize:10,paddingTop:5,paddingLeft:30}}>SUMMER COLLECTION 2020</Text>
                    <Text style={{paddingTop:22,paddingLeft:30}}>BLUE SUMMERS</Text>
                    <Text style={{paddingLeft:30}}>ARE ALREADY IN</Text>
                    <Text style={{paddingLeft:30}}>STORE</Text>       
                </ImageBackground>  
          </View>

          <View style={{alignItems:"center",marginTop:18}}>
                <ImageBackground source={require("../images/home/boy11.jpg")}
                                 style={{width:width*0.95, height:width*0.4, borderRadius:3}}>
                    <Text style={{color:"gray",fontSize:10,paddingTop:25,paddingLeft:30}}>FOR GEN</Text>
                    <Text style={{paddingLeft:30}}>HANG OUT & PARTY </Text>    
                </ImageBackground>
          </View>

          <View style={{flexDirection:"row", alignItems:"center",marginTop:18}}>
                <View style={{flex:1,alignItems:"center"}}>
                    <ImageBackground source={require("../images/home/man22.jpg")}
                                     style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                      <Text style={{color:"gray",fontSize:10,paddingTop:2,paddingLeft:124}}>T-Shirts</Text>
                      <Text style={{paddingLeft:88,fontSize:13}}>THE OFFICE</Text>
                      <Text style={{paddingLeft:133,fontSize:13}}>LIFE</Text>     
                    </ImageBackground>
                </View>

                <View style={{flex:1,alignItems:"center"}}>
                    <ImageBackground source={require("../images/home/girl22.jpg")}
                                     style={{width:width/2*0.9, height:width*0.6, borderRadius:3}}>
                                  
                      <Text style={{color:"gray",fontSize:10,paddingTop:60,paddingLeft:5}}>Dress</Text>
                      <Text style={{paddingLeft:5,fontSize:13}}>ELEGANT</Text>
                      <Text style={{paddingLeft:5,fontSize:13}}>DESIGN</Text> 
                    </ImageBackground>
                </View>
          </View>

      </ScrollView>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ProfileImagePet:{
    width:30,
    height:30,
  },
});
