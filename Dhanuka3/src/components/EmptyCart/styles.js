import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        marginTop:"45%",
        width:width,
        
    },
    ShoppingButton:{
        height:50,
        marginHorizontal:30,
        marginVertical:70,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'rgb(102,255,220)'
        
    },
});
