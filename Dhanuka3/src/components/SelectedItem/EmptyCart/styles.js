import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        alignItems:'center',
        paddingVertical:100,
        backgroundColor:'rgba(250,250,250,1)'
    },
    ShoppingButton:{
        height:50,
        width:200,
        marginHorizontal:30,
        marginVertical:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'rgba(0, 179, 155,0.7)'
        
    },
});
