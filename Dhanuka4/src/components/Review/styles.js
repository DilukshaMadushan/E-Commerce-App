import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  TextView: {
    marginHorizontal: 5,
    marginTop: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#FFF",
    fontSize: 18,
  },
  Button: {
    marginTop: 20,
    height: 40,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "rgba(0, 179, 155,0.7)",
  },
});
