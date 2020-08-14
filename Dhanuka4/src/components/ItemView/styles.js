import React, { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  ItemImage: {
    width: 0.8 * width,
    height: width,
    alignSelf: "center",
  },
  ItemName: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 10,
    alignSelf: "center",
  },
  ItemPrice: {
    fontSize: 17,
    paddingTop: 10,
    alignSelf: "center",
    color: "grey",
  },
  ItemReviews: {
    flexDirection: "row",
    paddingTop: 5,
    alignSelf: "center",
    alignItems: "flex-end",
  },
  Review: {
    fontSize: 17,
    paddingTop: 5,
  },
  ReviewNumber: {
    fontSize: 17,
  },
  ItemTab: {
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  //Tabs
  button: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(10, 10, 10, 0.1)",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 179, 155, 1)",
  },
  buttonPressed: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(20, 20, 20, 0.2)",
    padding: 10,
  },

  DescriptionView: {
    backgroundColor: "rgba(10, 10, 10, 0.1)",
    marginBottom: 5,
    paddingBottom: 40,
  },
  Description: {
    fontWeight: "500",
    paddingVertical: 5,
    fontSize: 15,
  },
});
