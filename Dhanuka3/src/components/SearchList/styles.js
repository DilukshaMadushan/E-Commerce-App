import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(230,230,230,1)',
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
});
