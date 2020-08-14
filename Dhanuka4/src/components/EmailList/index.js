import React, { Component } from "react";
import { Text, View, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "./styles";
import email from "react-native-email";
import Images from "../../common/Images";
import AutoheightTextInput from "react-native-textinput-autoheight";

// Now send the mail

class EmailList extends Component {
  state = {
    username: null,
    phoneNumber: null,
    //email: null,
    address: null,
    List: null,
  };
  handleEmail = () => {
    if (
      this.state.username != null &&
      this.state.phoneNumber != null &&
      this.state.address != null &&
      this.state.List != null
    ) {
      const to = "Waytoogolk@gmail.com";
      const body = (
        "User Name : " +
        this.state.username +
        "<br><br>" +
        "Phone Number : " +
        this.state.phoneNumber +
        "<br><br>" +
        "Address : " +
        this.state.address +
        "<br><br>" +
        "Your Orders List : " +
        this.state.List
      ).toString();
      email(to, {
        //cc: "Waytoogolk@gmail.com",
        //bcc: "Waytoogolk@gmail.com",
        subject: "Waytoogo Email Delivery",
        body: body,
      }).catch(console.error);
    } else {
      alert("Something Missing!");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignSelf: "center", marginBottom: 30 }}>
          <Image source={Images.logo} style={styles.Logo}></Image>
        </View>
        <View>
          <TextInput
            style={styles.TextView}
            placeholder='Enter User Name'
            maxLength={40}
            onChangeText={(text) => this.setState({ username: text })}
          />
        </View>
        <View>
          <TextInput
            style={styles.TextView}
            placeholder='Enter Phone Number'
            maxLength={40}
            keyboardType={"number-pad"}
            onChangeText={(text) => this.setState({ phoneNumber: text })}
          />
        </View>
        <View>
          <TextInput
            style={styles.TextView}
            placeholder='Enter Address'
            maxLength={40}
            onChangeText={(text) => this.setState({ address: text })}
          />
        </View>
        {/*<View style={styles.TextView}>
          <TextInput
            style={styles.TextInput}
            placeholder='Enter Email'
            maxLength={40}
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>*/}
        <View>
          <AutoheightTextInput
            onChangeText={(text) => this.setState({ List: text })}
            style={[styles.TextView, { paddingVertical: 30 }]}
            placeholder='Enter your Orders List'
          />
        </View>

        <TouchableOpacity style={styles.Button} onPress={this.handleEmail}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
            Send Email
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmailList;
