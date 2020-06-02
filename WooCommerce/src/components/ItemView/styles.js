import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    ItemImage:{
        width:0.8*width,
        height:width,
        alignSelf:'center'
    },
    ItemName:{
        fontSize:20,
        fontWeight:"bold",
        paddingTop:10,
        alignSelf:'center',
    },
    ItemPrice:{
        fontSize:17,
        paddingTop:5,
        alignSelf:'center',
        color:'grey'
    },
    ItemReviews:{
        flexDirection:'row',
        paddingTop:5,
        alignSelf:'center',
    },
    Review:{
        fontSize:17,
        paddingTop:5,
        alignSelf:'center',
    },
    ReviewNumber:{
        fontSize:17,
        paddingTop:5,
        alignSelf:'center',
    },
    ItemTab:{
        width:'50%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },

//Tabs
    button: {
        flex:1,
        height:'100%',
        alignItems: 'center',
        backgroundColor: 'rgba(10, 10, 10, 0.1)',     
        padding:10,
        borderBottomWidth:2,
        borderBottomColor:'rgb(102,255,220)'
  },
    buttonPressed:{
        flex:1,
        height:'100%',
        alignItems: 'center',
        backgroundColor: 'rgba(20, 20, 20, 0.2)',      
        padding:10,
  },
  
  DescriptionView:{
      height:300,
      backgroundColor:'rgba(10, 10, 10, 0.1)',
      marginBottom:5
  },
  Description:{
    fontWeight:'500',
    paddingVertical:5,
    fontSize:15
},
});
