import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "center",
  },
  Logo: {
    width: 0.52 * width,
    height: 0.2 * width,
    alignSelf: "center",
  },
  TextView: {
    marginHorizontal: 5,
    marginTop: 7,
    marginBottom:12,
    padding: 10,
    paddingHorizontal:20,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.1)",
    fontSize: 18,
  },
  Button: {
    marginTop: 30,
    height: 50,
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#f7941d",
  },
});
