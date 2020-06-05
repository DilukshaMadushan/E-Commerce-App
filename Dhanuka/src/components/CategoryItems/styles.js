import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  item: {
    width:'50%',
    height:0.8*width,
    paddingBottom:90,
    paddingHorizontal:5,
    borderRadius:10,

  },
  itemView:{
    justifyContent:'center',
    borderRadius:10,
  },
  itemImage:{
    width:'100%',
    height:'100%',
    alignSelf:'center',
    borderRadius:5
  },
  ItemName:{
    fontSize:18,
    fontWeight:'500',
    color:'black',
    alignSelf:'center'
  },
  ItemPrice:{
    alignSelf:'flex-start',
    fontSize:15,
    color:'grey',
    paddingVertical:2
    
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
