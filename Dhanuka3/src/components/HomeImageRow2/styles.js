import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        width:width,
        marginVertical:10,
        paddingLeft:5
    },
    item: {
        width:175,
        paddingHorizontal:10,
        marginBottom:10,
      },
      itemView:{
        height:200,
        justifyContent:'center',
      },
      itemImage:{
        width:'100%',
        height:'95%',
        borderRadius:5
      },
      ItemName:{
        fontSize:15,
        fontWeight:'500',
        color:'black',
        alignSelf:'center'
      },
      ItemPrice:{
        alignSelf:'flex-start',
        fontSize:15,
        color:'grey',
        paddingTop:5
        
      },
      wishlist:{
        height:10,
        width:10
      },
      ShopItemIcon:{
        alignSelf:'flex-end',
        paddingEnd:5
      },
});
