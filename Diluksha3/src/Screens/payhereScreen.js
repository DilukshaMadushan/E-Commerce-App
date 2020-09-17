import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
//import { WebView } from "react-native-webview";
import PostAPI from '../services/PostAPI';

class payhereScreen extends Component {
  state = {
    htmlCode: '',
  };


  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>

      </View>
      // <WebView originWhitelist={["*"]} source={{ html: this.state.htmlCode }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default payhereScreen;
