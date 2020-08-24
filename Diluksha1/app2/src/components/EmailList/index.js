import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
//import email from 'react-native-email';
import Mailer from 'react-native-mail';
import ImagePicker from 'react-native-image-picker';
import Images from '../../common/Images';
import AutoheightTextInput from 'react-native-textinput-autoheight';

class EmailList extends Component {
  state = {
    username: null,
    phoneNumber: null,
    address: null,
    List: null,
    file_url: null,
    file_type: null,
    file_name: null,
  };

  componentWillMount() {
    this.requestCameraPermission();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  _pickImage = async () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({file_url: response.uri});
        this.setState({file_type: response.type});
        this.setState({file_name: response.fileName});
      }
    });
  };

  handleEmail = () => {
    if (
      this.state.username != null &&
      this.state.phoneNumber != null &&
      this.state.address != null
    ) {
      const to = 'Waytoogolk@gmail.com';
      const body = (
        'User Name : ' +
        this.state.username +
        '<br><br>' +
        'Phone Number : ' +
        this.state.phoneNumber +
        '<br><br>' +
        'Address : ' +
        this.state.address +
        '<br><br>' +
        'Your Orders List : ' +
        this.state.List
      ).toString();
      Mailer.mail(
        {
          subject: 'Waytoogo Email Delivery',
          recipients: ['Waytoogolk@gmail.com'],
          ccRecipients: [],
          bccRecipients: [],
          body: body,
          isHTML: true,
          attachments: [
            {
              path: this.state.file_url, // The absolute path of the file from which to read data.
              type: 'jpg', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
              // mimeType - use only if you want to use custom type
              //name: this.state.file_name,   // Optional: Custom filename for attachment
            },
          ],
        },
        (error, event) => {
          Alert.alert(
            error,
            event,
            [
              {
                text: 'Ok',
                onPress: () => console.log('OK: Email Error Response'),
              },
              {
                text: 'Cancel',
                onPress: () => console.log('CANCEL: Email Error Response'),
              },
            ],
            {cancelable: true},
          );
        },
      );
    } else {
      alert('Something Missing!');
    }
  };

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignSelf: 'center', marginBottom: 30}}>
            <Image source={Images.logo} style={styles.Logo}></Image>
          </View>
          <View>
            <TextInput
              style={styles.TextView}
              placeholder="Enter User Name"
              maxLength={40}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextView}
              placeholder="Enter Phone Number"
              maxLength={40}
              keyboardType={'number-pad'}
              onChangeText={(text) => this.setState({phoneNumber: text})}
            />
          </View>
          <View>
            <TextInput
              style={styles.TextView}
              placeholder="Enter Address"
              maxLength={40}
              onChangeText={(text) => this.setState({address: text})}
            />
          </View>
          <View>
            {!this.state.file_url ? (
              <AutoheightTextInput
                onChangeText={(text) => this.setState({List: text})}
                style={[styles.TextView, {paddingVertical: 30}]}
                placeholder="Enter your Orders List"
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
                alignSelf: 'center',
                paddingTop: 10,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                }}
                resizeMode="contain"
                source={{uri: this.state.file_url}}
              />
            </View>
          )}
          <TouchableOpacity
            style={[styles.Button, {backgroundColor: 'red'}]}
            onPress={() => this._pickImage()}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Select List Image
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Button} onPress={this.handleEmail}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Send Email
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default EmailList;
