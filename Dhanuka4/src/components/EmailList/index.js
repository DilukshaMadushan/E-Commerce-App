import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import styles from "./styles";
import email from "react-native-email";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import Images from "../../common/Images";
import AutoheightTextInput from "react-native-textinput-autoheight";

class EmailList extends Component {
  state = {
    username: null,
    phoneNumber: null,
    address: null,
    List: null,
    file_url: null,
    file_type: null,
  };

  componentWillMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.cancelled) {
        this.setState({ file_url: result.uri });
        this.setState({ file_type: result.type });
      }
      console.log(this.state.file_url);
      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  handleEmail = () => {
    if (
      this.state.username != null &&
      this.state.phoneNumber != null &&
      this.state.address != null
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
        isHTML: true,
        attachment: [
          {
            path: this.state.file_url, // The absolute path of the file from which to read data.
            type: this.state.file_type, // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            name: "Waytoogo Email image",
          },
        ],
      }).catch(console.error);
    } else {
      alert("Something Missing!");
    }
  };

  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <ScrollView>
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
          <View>
            {!this.state.file_url ? (
              <AutoheightTextInput
                onChangeText={(text) => this.setState({ List: text })}
                style={[styles.TextView, { paddingVertical: 30 }]}
                placeholder='Enter your Orders List'
              />
            ) : (
              <View />
            )}
          </View>
          {!this.state.file_url ? (
            <View />
          ) : (
            <View
              style={{
                width: width,
                height: width * 0.4,
                alignSelf: "center",
                paddingTop: 10,
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                resizeMode='contain'
                source={{ uri: this.state.file_url }}
              />
            </View>
          )}
          {/* <TouchableOpacity
            style={[styles.Button, { backgroundColor: "red" }]}
            onPress={() => this._pickImage()}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Select List Image
            </Text>
          </TouchableOpacity>*/}

          <TouchableOpacity style={styles.Button} onPress={this.handleEmail}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              Send Email
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default EmailList;
