import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            marginVertical: 20,
            textAlign: "center",
          }}
        >
          Contact Us
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name='envelope-o' type='font-awesome' color={"red"} size={35} />
          <Text style={styles.Text}>Waytoogolk@gmail.com</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name='volume-control-phone'
            type='font-awesome'
            color={"red"}
            size={35}
          />
          <Text style={styles.Text}>+94 70 291 3290</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon
            name='institution'
            type='font-awesome'
            color={"red"}
            size={35}
          />
          <Text style={styles.Text}>
            #c16, Commercial Center, Bandarawela, Uva, Sri Lanka.
          </Text>
        </View>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height: "80%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  Text: {
    flex: 1,
    textAlign: "center",
    color: "grey",
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    paddingLeft: 5,
  },
});

export default ContactUs;
