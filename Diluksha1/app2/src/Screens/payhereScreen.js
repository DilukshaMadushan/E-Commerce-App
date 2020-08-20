import React, { Component } from "react";
import { StyleSheet, Dimensions,Button, View } from "react-native";
import { WebView } from "react-native-webview";
import PostAPI from "../services/PostAPI";
import PayHere from 'react-native-pay-here';

class payhereScreen extends Component {

  state = {
    htmlCode: "",
  };

  componentWillMount() {
    //this.getPaymentsGateway();
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
      // <WebView originWhitelist={["*"]} source={{ html: this.state.htmlCode }} />
      <View>
        <Button
          title="Press"
          onPress={()=>{
            PayHere.PayHereOnce(150,
              (message)=>{
                console.log(message);
              }
              );
          }}
        ></Button>
      </View>
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
