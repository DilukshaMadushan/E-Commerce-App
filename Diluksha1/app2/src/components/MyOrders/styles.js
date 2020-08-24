import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 8,
    borderColor: "rgba(184,184,184,0.1)",
    height: "100%",
    justifyContent: "center",
  },
  ItemImage: {
    width: 0.3 * width,
    height: 0.3 * width,
    marginLeft: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
});
