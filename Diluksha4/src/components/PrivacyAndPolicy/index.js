import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

class PrivacyAndPolicy extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.Title}>Who we are</Text>
          <Text style={styles.Text}>
            Our website address is:https://www.waytoogo.com
          </Text>
          <Text style={styles.Title}>
            What personal data we collect and why we collect it
          </Text>
          <Text style={styles.Title2}>Comments</Text>
          <Text style={styles.Text}>
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection.{'\n\n'} An anonymized
            string created from your email address (also called a hash) may be
            provided to the Gravatar service to see if you are using it. The
            Gravatar service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.
          </Text>
          <Text style={styles.Title2}>Media</Text>
          <Text style={styles.Text}>
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </Text>
          <Text style={styles.Title2}>Contact forms</Text>
          <Text style={styles.Title2}>Cookies</Text>
          <Text style={styles.Text}>
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.{'\n\n'} If you visit our login page, we will set a temporary
            cookie to determine if your browser accepts cookies. This cookie
            contains no personal data and is discarded when you close your
            browser.{'\n\n'} When you log in, we will also set up several
            cookies to save your login information and your screen display
            choices. Login cookies last for two days, and screen options cookies
            last for a year. If you select “Remember Me”, your login will
            persist for two weeks. If you log out of your account, the login
            cookies will be removed.{'\n\n'} If you edit or publish an article,
            an additional cookie will be saved in your browser. This cookie
            includes no personal data and simply indicates the post ID of the
            article you just edited. It expires after 1 day.
          </Text>
          <Text style={styles.Title2}>
            Embedded content from other websites
          </Text>
          <Text style={styles.Text}>
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.{'\n\n'} These websites may collect data about you,
            use cookies, embed additional third-party tracking, and monitor your
            interaction with that embedded content, including tracking your
            interaction with the embedded content if you have an account and are
            logged in to that website.
          </Text>
          <Text style={styles.Title2}>Analytics</Text>
          <Text style={styles.Title}>Who we share your data with</Text>
          <Text style={styles.Title}>How long we retain your data</Text>
          <Text style={styles.Text}>
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.{'\n\n'} For users that register on our website (if any), we
            also store the personal information they provide in their user
            profile. All users can see, edit, or delete their personal
            information at any time (except they cannot change their username).
            Website administrators can also see and edit that information.
          </Text>
          <Text style={styles.Title}>What rights you have over your data</Text>
          <Text style={styles.Text}>
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </Text>
          <Text style={styles.Title}>Where we send your data</Text>
          <Text style={styles.Text}>
            Visitor comments may be checked through an automated spam detection
            service.
          </Text>
          <Text style={styles.Title}>Your contact information</Text>
          <Text style={styles.Title}>Additional information</Text>
          <Text style={styles.Title2}>How we protect your data</Text>
          <Text style={styles.Title2}>
            What data breach procedures we have in place
          </Text>
          <Text style={styles.Title2}>
            What third parties we receive data from
          </Text>
          <Text style={styles.Title2}>
            What automated decision making and/or profiling we do with user data
          </Text>
          <Text style={styles.Title2}>
            Industry regulatory disclosure requirements
          </Text>
        </View>
        <Button
          title="Terms"
          onPress={() => this.props.navigation.navigate('Terms')}>
          Terms
        </Button>
      </ScrollView>
    );
  }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
  },
  Title: {
    fontSize: 25,
    fontFamily: 'Exo-Bold',
    color: '#162539',
    marginTop: 10,
  },

  Title2: {
    fontSize: 20,
    fontFamily: 'Exo-Bold',
    color: '#162539',
  },
  Text: {
    fontFamily: 'Exo-Regular',
    color: 'grey',
    fontSize: 15,
  },
});

export default PrivacyAndPolicy;
