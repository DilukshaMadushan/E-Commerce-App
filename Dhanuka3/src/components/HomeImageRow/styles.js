import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        width:width,
        flexDirection:"row", 
        alignItems:"center",
        marginVertical:18
    },
    Images:{
        alignItems:"center",
        marginHorizontal:10,
    },
});
