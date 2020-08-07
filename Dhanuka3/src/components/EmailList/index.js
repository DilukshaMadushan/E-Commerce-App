import React, {Component} from 'react';
import {Text,View,TouchableOpacity,Button} from 'react-native';
import styles from './styles';
import { Icon } from 'react-native-elements';
import email from 'react-native-email'
import Mailer from 'react-native-mail'


   
  // Now send the mail
  
class EmailList extends Component{

    handleEmail = () => {

     /*   const to = 'crathnayke1103@gmail.com' // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: 'dhanuka.96@outlook.com', // string or array of email addresses
            bcc: 'dhanuka.96@outlook.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error) */

        Mailer.mail({
            subject: 'need help',
            recipients: ['dhanuka.96@outlook.com'],
            ccRecipients: ['crathnayke1103@gmail.com'],
            bccRecipients: ['crathnayke1103@gmail.com'],
            body: '<b>A Bold Body</b>',
            isHTML: true,
            attachments: [{
              path: '',  // The absolute path of the file from which to read data.
              type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
              // mimeType - use only if you want to use custom type
              name: '',   // Optional: Custom filename for attachment
            }]
          }, (error, event) => {
            Alert.alert(
              error,
              event,
              [
                {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
              ],
              { cancelable: true }
            )
          });

    }

  render(){
    return (
    <View style={styles.container}>
        <Button title="Send Mail" onPress={this.handleEmail} />
    </View>
    );
  }
}

export default EmailList;
