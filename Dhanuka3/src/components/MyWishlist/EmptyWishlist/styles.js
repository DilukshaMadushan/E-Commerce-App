import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:100,
        backgroundColor:'rgba(255,255,255,0.3)',
        height:472
    },
    ShoppingButton:{
        height:50,
        width:200,
        marginHorizontal:30,
        marginVertical:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        backgroundColor:'rgb(102,255,220)'
        
    },
});
