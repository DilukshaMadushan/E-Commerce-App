import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  
} from "react-native";


const { width, height } = Dimensions.get("window");

class welcomeScreen extends Component {
 
    state={
        imageStatus:1
    }

    renderImage=()=>{
        if (this.state.imageStatus==1){
            return(
                <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                    <View style={{  marginTop:10 }}>
                        <Image source={require('../images/Welcome/1.jpg')} style={{width:width*0.8, height:height*0.8}}></Image>
                    </View>

                    <TouchableOpacity
                        style={styles.Button}
                        activeOpacity={0.5}
                        onPress={() => {
                            this.setState({imageStatus:2});
                        }}
                        >
                        <Text
                            style={{ color: "#fff", fontWeight: "bold", fontSize: 28 }}
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            )

        }else if (this.state.imageStatus==2){
            return(
            <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{ marginTop:10 }}>
                    <Image source={require('../images/Welcome/2.jpg')} style={{width:width*0.8, height:height*0.8}}></Image>
                </View>

                <TouchableOpacity
                    style={styles.Button}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.setState({imageStatus:this.state.imageStatus+1});
                    }}
                    >
                    <Text
                        style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>)

        }else if (this.state.imageStatus==3){
            return(
            <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{ marginTop:10 }}>
                    <Image source={require('../images/Welcome/3.jpg')} style={{width:width*0.8, height:height*0.8}}></Image>
                </View>

                <TouchableOpacity
                    style={styles.Button}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.setState({imageStatus:this.state.imageStatus+1});
                    }}
                    >
                    <Text
                        style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                    >
                        Next
                    </Text>
                </TouchableOpacity>
            </View>)

        }else if (this.state.imageStatus==4){
            return(
            <View style={{backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
                <View style={{ marginTop:10 }}>
                    <Image source={require('../images/Welcome/4.jpg')} style={{width:width*0.8, height:height*0.8}}></Image>
                </View>

                <TouchableOpacity
                    style={styles.Button}
                    activeOpacity={0.5}
                    onPress={() => {
                        this.props.navigation.navigate('Register');
                    }}
                    >
                    <Text
                        style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}
                    >
                        Finish
                    </Text>
                </TouchableOpacity>
            </View>)
        }
    }

  render() {
    return (
      <ScrollView style={{backgroundColor:'white'}}>
        {this.renderImage()}
      </ScrollView>
    );
  }
}

export default welcomeScreen;



const styles = StyleSheet.create({
    Button: {
        //marginTop: 5,
        height: 50,
        marginVertical: 5,
        //marginHorizontal: 10,
        width:width*0.6,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        backgroundColor: "#FF8C00",
    },
});