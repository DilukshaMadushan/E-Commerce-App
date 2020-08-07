import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  item: {
    width: 0.9 * width,
    height: 0.4 * width,
    marginTop: 10,
    justifyContent: "center",
  },

  imagecategories: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    justifyContent: "center",
  },
  dark: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 15,
    opacity: 0.4,
    backgroundColor: "black",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  product: {
    fontSize: 15,
    color: "#FFF",
  },
});
