import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  Itemrows: {
    //flexDirection: "row",
    marginTop: 5,
    width: width,
    // alignItems:'center',
    // justifyContent:'center'
  },
  TextInputsName: {
    flex: 1,
    paddingStart: 15,
    fontSize: 16,
    marginLeft:12,
    marginBottom:3
    //alignSelf: "center",
  },
  TextInputs: {
    flex: 1.7,
    fontSize: 16,
    paddingHorizontal: 15,
    width:width*0.9,
    height: 45,
    marginRight: 10,
    marginBottom:5,
    borderRadius: 25,
    borderWidth: 1,
    alignSelf:'center',
    borderColor: "rgba(220,220,220,0.8)",
    backgroundColor: "rgba(220,220,220,0.5)",
  },
  PhoneTextInputs: {
    flex: 1.7,
    fontSize: 16,
    paddingHorizontal: 15,
    width:width*0.9,
    height: 45,
    marginRight: 10,
    marginBottom:25,
    borderRadius: 25,
    borderWidth: 1,
    alignSelf:'center',
    borderColor: "rgba(220,220,220,0.8)",
    backgroundColor: "rgba(220,220,220,0.5)",
  },
  Picker: {
    flex: 1.85,
    fontSize: 16,
    color: "rgba(220,220,220,0.8)",
    paddingStart: 10,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "rgba(220,220,220,0.8)",
    backgroundColor: "rgba(220,220,220,0.5)",
  },
  ButtonsScreen: {
    backgroundColor: "#fff",
    position: "absolute",
    flexDirection: "row",
    bottom: 100,
    width: width,
  },
  buttonBack: {
    flex: 1,
    backgroundColor: "rgba(220,220,220,0.8)",
    paddingVertical: 7,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: "#f7941d",
    paddingVertical: 7,
  },
});
