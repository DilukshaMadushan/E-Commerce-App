import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  List: {
    flexDirection: "column",
  },
  ListItem: {
    width: width,
    height: 0.17 * width,
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  ItemIcon: {
    paddingStart: 15,
    alignContent: "center",
  },
  ArrowIcon: {
    justifyContent: "flex-end",
    paddingRight: 5,
  },
  Text: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "grey",
  },
});
