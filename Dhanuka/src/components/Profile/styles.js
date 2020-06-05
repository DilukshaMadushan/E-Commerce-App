import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    List:{
        marginTop:5,
        flexDirection:'column'
    },
    ListItem:{
        width:width,
        height:0.17*width,
        marginTop:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.1)',
        
    },
    ItemIcon:{
        justifyContent:'flex-start',
        paddingStart:15
    },
    ArrowIcon:{
        justifyContent:'flex-end',
        paddingRight:10
    },
});
