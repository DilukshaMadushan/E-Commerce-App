import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#FFF",
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
  TotalPrice: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  SelectedItemsView: {
    paddingTop: 10,
  },
});
