import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width,
  },
  Upper: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "center",
  },
  UpperItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  IconView: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(184,184,184,1)",
  },
  Border: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(230,230,230,1)",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(0, 179, 155,1)",
  },
  Cross: {
    flexDirection: "row",
    position: "absolute",
    top: "60%",
    width: 0.8 * width,
    height: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "rgba(184,184,184,1)",
  },
  ThankYouScreen: {
    paddingHorizontal: 10,
    paddingTop: 100,
    height: "100%",
    alignItems: "center",
  },
  ThankIconView: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 40,
  },
  buttonViewOrader: {
    marginTop: 30,
    width: 200,
    height: 50,
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "rgba(0, 179, 155,0.7)",
  },
});
