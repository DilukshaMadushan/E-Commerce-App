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
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';
import Images from '../../common/Images';
import AutoheightTextInput from 'react-native-textinput-autoheight';
import EmailSender from 'react-native-smtp';

class EmailList extends Component {
  state = {
    username: null,
    phoneNumber: null,
    address: null,
    List: null,
    file_url: null,
    file_type: null,
    file_name: null,
    file_path:null,
    isLoading:false
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
        alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  
  _pickImage = async () => {
    console.log("Hi");
    const options = {
      title: 'Select Avatar',
      noData: true,
      quality: 0.2,
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight : 400,
      //customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    try{
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          console.log("In", response.path);
          this.setState({file_path: response.path});
          this.setState({file_url: response.uri});
          this.setState({file_type: response.type});
          this.setState({file_name: response.fileName});
        }
      });
    }catch (E) {
          console.log(E);
        }
    
  };

  handleEmail = () => {
    if (
      this.state.username != null &&
      this.state.phoneNumber != null &&
      this.state.address != null
    ) {
      this.setState({isLoading:true});
      let ItemListHtml = ""

      if (this.state.List!==null){
        const itemList=this.state.List.split('\n');
        for (let i=0;i<itemList.length;i++){
          ItemListHtml=ItemListHtml+itemList[i]+'<br><br>';
        }
      }
      
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
        ItemListHtml
      ).toString();

      EmailSender.config({
        host: 'smtp.gmail.com',
        port: '587', // Optional. Default to 465
        username: 'waytoogolanka@gmail.com',
        password: 'Waytoogo321*',
        isAuth: 'true', // Optional. Default to `true`
        tls: 'true' // Optional. Default to `true`
        
      });
       
      /*
       * Used react-native-fs module to get file path.
       * Keep this array empty if there is no attachment.
       */
      const attachments = [];
      if (this.state.file_path!==null){
        attachments.push(this.state.file_path);
      }
      
      // Now send the mail
      EmailSender.send(
        {
          from: 'waytoogolanka@gmail.com',
          to: 'waytoogolk@gmail.com',
          subject: 'WayTooGo Email Service',
          body: body
        },
        attachments, // This second parameter is mandatory. You can send an empty array.
      ).then(success => {
        this.setState({isLoading:false});
        this.setState({file_path:null});
        this.setState({file_url:null});
        alert('successfully Sent!');
        //this.props.navigation.navigate("Account")
      })
      .catch((err) => {
        this.setState({isLoading:false});
        this.setState({file_path:null});
        this.setState({file_url:null});
        console.log(err);
        alert(err);
      });

    } else {
      alert('Please Enter Your Details!');
    }
  };

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        {(this.state.isLoading)?<View
            style={{
              flex: 1,
              
              marginTop: width * 0.8,
            }}
          >
            <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
                visible={this.state.isLoading}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              /> */}
            {/* <StatusBar barStyle='default' /> */}
          </View>:
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
              <TextInput
                multiline={true}
                onChangeText={(text) => this.setState({List: text})}
                //onKeyPress={(key)=>this.addNewItem(key)}
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
            activeOpacity={0.6}
            delayPressIn={0}
            style={[styles.Button, {backgroundColor: '#FF8C00'}]}
            onPress={this._pickImage}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Attach a Photo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            delayPressIn={0} 
            style={styles.Button} onPress={this.handleEmail}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Send Email
            </Text>
          </TouchableOpacity>
        </ScrollView>}
      </View>
    );
  }
}

export default EmailList;
