import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:"50%",
        backgroundColor:'rgba(255,255,255,0.3)',
        height:height
    },
});
