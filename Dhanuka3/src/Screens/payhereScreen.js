import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import PostAPI from "../services/PostAPI";

class payhereScreen extends Component {
  state = {
    htmlCode: "",
  };

  componentWillMount() {
    this.getPaymentsGateway();
  }

  getPaymentsGateway() {
    PostAPI.payhereApi()
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        this.setState({ htmlCode: text });
      });
  }

  render() {
    const { width } = Dimensions.get("window");
    return (
      <WebView originWhitelist={["*"]} source={{ html: this.state.htmlCode }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default payhereScreen;
