import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: "100%",
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
    paddingVertical: 5,
  },
  buttonNext: {
    flex: 1,
    backgroundColor: "rgba(0, 179, 155,0.7)",
    paddingVertical: 5,
  },
  paymentMethods: {
    height: 100,
    width: 145,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240,240,240,0.3)",
    margin: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(220,220,220,0.8)",
  },
});
