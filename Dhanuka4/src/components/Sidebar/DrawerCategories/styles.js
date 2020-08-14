import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(150,150,150)",
    paddingLeft: 15,
    paddingTop: 15,
  },
});
