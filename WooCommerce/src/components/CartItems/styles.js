import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        width:width,
    },
    Upper:{
        flexDirection:'row',
        marginVertical:20,
        justifyContent:'center',
    },
    UpperItems:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    UpperItemIcons:{

        backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderColor:'#fff',
        borderRadius:30,
        borderWidth:5
    },
    ItemBorder:{
        borderColor:'grey',
        borderWidth:2,
        borderRadius:60,
        marginVertical:5,
    },
    Cross:{
        top:'50%',
        position:'absolute',
        width:width,
        height:20,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:'grey',
    },
    SelectedItemsView:{
        borderTopWidth:2,
        borderColor:'grey'
    },
});
