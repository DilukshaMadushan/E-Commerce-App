import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  List: {
    flexDirection: "column",
    padding: 5,
  },
  ListItem: {
    width: width,
    height: 0.17 * width,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  ItemIcon: {
    paddingStart: 15,
    alignContent: "center",
  },
  ArrowIcon: {
    justifyContent: "flex-end",
    paddingRight: 10,
  },
});
