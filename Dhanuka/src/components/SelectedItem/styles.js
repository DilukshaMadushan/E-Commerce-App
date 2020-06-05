import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.1)',
        paddingBottom:40
    },
    TotalPrice:{
        paddingHorizontal:10,
        paddingVertical:5,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    ItemImage:{
        width:0.3*width,
        height:0.3*width,
        marginLeft:15,
        borderRadius:10,
        alignSelf:'center'
    },
    ItemName:{
        flex:2,
        paddingHorizontal:10,
    },
    Delete:{
        justifyContent:'flex-end',
        paddingHorizontal:3,
    },
    ItemCount:{
        paddingHorizontal:15,
        justifyContent:'center',
    },
    IconMathPlus:{
        backgroundColor:'rgba(230,230,230,1)',
        padding:6,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderColor:'rgba(184,184,184,1)'
    },
    IconMathMinus:{
        backgroundColor:'rgba(230,230,230,1)',
        padding:6,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderColor:'rgba(184,184,184,1)'
    },
});
