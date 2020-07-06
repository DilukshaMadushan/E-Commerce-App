import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({

    ButtonsScreen:{
        backgroundColor:'#fff',
        position:'absolute',
        flexDirection:'row',
        bottom:100,
        width:width,
      },
      buttonBack:{
        flex:1,
        backgroundColor:'rgba(220,220,220,0.8)',
        paddingVertical:5,
      },
      buttonNext:{
        flex:1,
        backgroundColor:'rgba(0, 179, 155,0.7)',
        paddingVertical:5
    },
    paymentMethodsrows:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
    },
    paymentMethods:{
        height:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(240,240,240,0.3)',
        flex:1,
        margin:15,
        borderRadius:10,
        borderWidth:1,
        borderColor:'rgba(220,220,220,0.8)',
    },
      
});
