import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 13,
  },
  ImageIcons: {
    marginRight: 12,
    marginLeft: 12,
    width: 47,
    height: 47,
    borderRadius: 47,
    justifyContent: "center",
    alignItems: "center",
  },
});
