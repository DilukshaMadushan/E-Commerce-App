import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.2)',
        paddingBottom:60
    },
    TotalPrice:{
        fontSize:20,
        paddingStart:10,
        paddingVertical:5,
        borderColor:'grey',
        backgroundColor:'#fff',
        borderBottomWidth:2
    },
    ItemImage:{
        width:0.3*width,
        height:0.3*width,
        marginLeft:15,
        borderRadius:10,
        alignSelf:'center'
    },
    ItemName:{
        flex:1,
        fontSize:20,
        paddingHorizontal:10,
        alignSelf:'center'
    },
    Delete:{
        alignSelf:'flex-end',
    },
    ItemCount:{
        paddingHorizontal:15,
        justifyContent:'center' 
    },
    IconMathPlus:{
        backgroundColor:'grey',
        padding:5,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    IconMathMinus:{
        backgroundColor:'grey',
        padding:5,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
});
