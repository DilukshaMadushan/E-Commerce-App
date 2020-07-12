import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:40,
        height:'100%',
        justifyContent:'center',
        backgroundColor:'rgba(230,230,230,1)'
    },
    ItemImage:{
        width:0.3*width,
        height:0.3*width,
        marginLeft:15,
        borderRadius:10,
        alignSelf:'center'
    },
});
