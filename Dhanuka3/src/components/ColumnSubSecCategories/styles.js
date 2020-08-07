import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  List: {
    flexDirection: "column",
    alignSelf: "center",
  },
  ListItem: {
    width: 0.7 * width,
    height: 0.14 * width,
    marginTop: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(10, 10, 10, 0.4)",
  },
  ArrowIcon: {
    justifyContent: "flex-end",
    paddingRight: 5,
  },
});
