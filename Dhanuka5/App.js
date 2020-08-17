import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";
import MainApp from "./src/navigations/MainApp";

export default class MainClass extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}
