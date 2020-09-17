import React, { Component } from "react";
import {
  View,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import EmptyMyOrders from "./EmptyMyOrders";
import GetAPI from "../../services/GetApi";
import Spinner from 'react-native-loading-spinner-overlay';

function Item({ ItemNumber, Date, Status, PaymentMethod, Total }) {
  return (
    <View
      style={{
        flexDirection: "column",
        borderTopWidth: 8,
        padding: 10,
        borderColor: "rgba(184,184,184,0.1)",
        width: width,
        backgroundColor: "#FFF",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Order Number:</Text>
        <Text style={{ alignSelf: "flex-end" }}>{ItemNumber}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Order Date:</Text>
        <Text style={{ alignSelf: "flex-end" }}>{Date}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Status:</Text>
        <Text style={{ alignSelf: "flex-end" }}>{Status}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Payment Method:</Text>
        <Text style={{ alignSelf: "flex-end" }}>{PaymentMethod}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ flex: 1 }}>Total:</Text>
        <Text style={{ alignSelf: "flex-end" }}>Rs {Total}</Text>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

class MyOrders extends Component {
  state = {
    OrderedList: [],
    isLoading: true,
  };

  componentWillMount() {
    console.log("Sign in ID ",this.props.signInId)
    this.getOrderedList();
  }

  getOrderedList() {
    GetAPI.myOrdersApi(this.props.signInId)
      .then((response) => response.json())
      .then((responsejson) => {
        console.log(responsejson);
        this.setState({ OrderedList: responsejson });
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <ScrollView>
        {this.state.isLoading == false ? (
          <View style={styles.container}>
            {this.state.OrderedList.length > 0 ? (
              <FlatList
                data={this.state.OrderedList}
                numColumns={1}
                renderItem={({ item }) => (
                  <Item
                    ItemNumber={item.number}
                    Date={item.date_created}
                    Status={item.status}
                    PaymentMethod={item.payment_method_title}
                    Total={item.total}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <EmptyMyOrders navigation={this.props.navigation} />
            )}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: width * 0.8,
            }}
          >
            <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              /> */}
          </View>
        )}
      </ScrollView>
    );
  }
}

//export default MyOrders;

const mapStateToProps = (state) => {
  return {
    signInId: state.auth.signInId,
  };
};

export default connect(mapStateToProps, null)(MyOrders);
