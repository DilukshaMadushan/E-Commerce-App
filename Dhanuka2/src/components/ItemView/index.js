import React, { Component } from "react";
import { View, FlatList, Image, Text,TouchableOpacity,Dimensions, StatusBarIOS } from "react-native";
import { connect } from "react-redux";
import Images from "../../common/Images";
import styles from "./styles";
import RatingStars from "../RatingStars";
import DropDownMenu from '../DropDownMenu';


const { width, height } = Dimensions.get("window");

class ItemView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status:false,
          }
      }

    state={
      item:null
    }

    componentWillMount(){
      this.setState({item:this.props.item});
    }
    
    Tabs( width ,height) {
        if (this.state.status === false) {
          return (
            <View style={{width:'100%',paddingLeft:60,paddingTop:30}}>
                <Text style={styles.Description}>Stretch jersey</Text>
                <Text style={styles.Description}>Soft-touch finish</Text>
                <Text style={styles.Description}>Round neckline</Text>
                <Text style={styles.Description}>Extreme double thigh splits to front</Text>
                <Text style={styles.Description}>Slim fit - cut closely to the body</Text>
                <Text style={styles.Description}>Machine wash</Text>
                <Text style={styles.Description}>95% Viscose,5% Elastane</Text>
            </View>  );
        } else if (this.state.status === true) {
          return (
            <View style={{width:'100%',}}>
            </View>);
        }  
      }

    render() {
      return (
        <View style={{paddingBottom:10,paddingTop:10}}>
            <Image style={styles.ItemImage} source={{uri:this.state.item.images[0].src}}></Image>
            <Text style={styles.ItemName}>{this.state.item.name}</Text>
            <Text style={styles.ItemPrice}>Rs. {this.state.item.price}</Text>
            <View style={styles.ItemReviews}>
                <RatingStars/>
                <Text style={styles.ReviewNumber}> (0.5)  </Text>
                <Text style={styles.Review}>Reviews</Text>
            </View>
            <DropDownMenu/>

            <View style={{width:width,
                          flexDirection:'row',
                          marginTop:10,
                          paddingRight:20,
                          alignItems:'center',
                          justifyContent:'center',}}>
                <TouchableOpacity activeOpacity={0.5}
                  style={(this.state.status==true) ? styles.buttonPressed : styles.button}
                  onPress={() => {
                    (this.state.status==false)?(this.setState({status:false})):(this.setState({status:false})); 
                    }}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}
                  style={(this.state.status==true) ? styles.button : styles.buttonPressed}
                  onPress={() => {
                    (this.state.status==true)?(this.setState({status:true})):(this.setState({status:true})); 
                    }}>
                    <Text style={{fontWeight:'bold',fontSize:15,color:'black'}}>Features</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.DescriptionView}>
                {this.Tabs( width ,height)}
            </View>
        </View>

      );
    }
  }
    
  export default ItemView;