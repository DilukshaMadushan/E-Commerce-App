import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230,230,230,1)",
    paddingBottom: 40,
    height: "100%",
  },
  ItemImage: {
    width: 0.3 * width,
    height: 0.3 * width,
    marginLeft: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
  ItemName: {
    flex: 2,
    paddingHorizontal: 10,
  },
  IconDelete: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(184,184,184,1)",
  },
  IconAddCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250,120,120,0.8)",
  },
});
