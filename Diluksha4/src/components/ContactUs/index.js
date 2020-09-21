import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Formstyles from './styles';
import EmailSender from 'react-native-smtp';

class ContactUs extends Component {
  state = {
    isLoading: false,
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  sendMessage = () => {
    if (
      this.state.name != null &&
      this.state.email != null &&
      this.state.message != null &&
      this.state.message != null
    ) {
      this.setState({isLoading: true});

      const to = 'Waytoogolk@gmail.com';
      const body = (
        'Name : ' +
        this.state.name +
        '<br><br>' +
        'Email : ' +
        this.state.email +
        '<br><br>' +
        'Message : ' +
        this.state.message
      ).toString();

      EmailSender.config({
        host: 'smtp.gmail.com',
        port: '587', // Optional. Default to 465
        username: 'waytoogolanka@gmail.com',
        password: 'Waytoogo321*',
        isAuth: 'true', // Optional. Default to `true`
        tls: 'true', // Optional. Default to `true`
      });

      /*
       * Used react-native-fs module to get file path.
       * Keep this array empty if there is no attachment.
       */
      const attachments = [];

      // Now send the mail
      EmailSender.send(
        {
          from: 'waytoogolanka@gmail.com',
          to: 'waytoogolk@gmail.com',
          subject: this.state.subject,
          body: body,
        },
        attachments, // This second parameter is mandatory. You can send an empty array.
      )
        .then((success) => {
          this.setState({isLoading: false});
          alert('successfully Sent!');
          //this.props.navigation.navigate("Account")
        })
        .catch((err) => {
          this.setState({isLoading: false});
          alert(err);
        });
    } else {
      alert('Please Enter Your Details!');
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{alignSelf: 'center', marginTop: 10}}>
          <Image
            source={require('../../images/logo-main.png')}
            style={{
              width: width * 0.6,
              height: 100,
              resizeMode: 'contain',
            }}></Image>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Icon name="envelope-o" type="font-awesome" color={'red'} size={25} />
          <Text style={styles.Text}>Waytoogolk@gmail.com</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="volume-control-phone"
            type="font-awesome"
            color={'red'}
            size={25}
          />
          <Text style={styles.Text}>+94 70 291 3290</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            name="institution"
            type="font-awesome"
            color={'red'}
            size={25}
          />
          <Text style={styles.Text}>
            No. C16, 3rd floor, Commercial Center, Bandarawela.
          </Text>
        </View>

        <View style={Formstyles.container}>
          {this.state.isLoading ? (
            <View
              style={{
                flex: 1,
                marginTop: width * 0.35,
              }}>
              <ActivityIndicator size="large" color="#FF8C00" />
            </View>
          ) : (
            <View>
              <View>
                {/* <Text>Your Name </Text> */}
                <TextInput
                  style={Formstyles.TextView}
                  placeholder="Your Name (required)"
                  maxLength={40}
                  onChangeText={(text) => this.setState({name: text})}
                />
              </View>
              <View>
                <TextInput
                  style={Formstyles.TextView}
                  placeholder="Your Email (required)"
                  maxLength={40}
                  onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View>
                <TextInput
                  style={Formstyles.TextView}
                  placeholder="Subject (required)"
                  maxLength={40}
                  onChangeText={(text) => this.setState({subject: text})}
                />
              </View>
              <View>
                <TextInput
                  multiline={true}
                  onChangeText={(text) => this.setState({message: text})}
                  style={[Formstyles.TextView, {paddingVertical: 30}]}
                  placeholder="Your Message"
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                delayPressIn={0}
                style={Formstyles.Button}
                onPress={this.sendMessage}>
                <Text
                  style={{color: '#fff', fontFamily: 'Exo-Bold', fontSize: 25}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 100,
    backgroundColor: '#FFF',
  },
  Text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Exo-Medium',
    color: 'grey',
    fontSize: 15,
    marginVertical: 10,
    textAlign: 'center',
    paddingLeft: 5,
  },
});

export default ContactUs;
