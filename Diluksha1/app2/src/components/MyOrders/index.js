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

function Item({ ItemNumber, Date, Status, PaymentMethod, Total }) {
  return (
    <View
      style={{
        flexDirection: "column",
        marginTop: 20,
        borderTopWidth: 0.3,
        borderBottomWidth: 1,
        padding: 10,
        borderColor: "rgba(184,184,184,1)",
        width: width,
        backgroundColor: "#fff",
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
    this.getOrderedList();
  }

  getOrderedList() {
    GetAPI.myOrdersApi(this.props.signInId)
      .then((response) => response.json())
      .then((responsejson) => {
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
              marginTop: width * 0.7,
            }}
          >
            <ActivityIndicator />
            <StatusBar barStyle='default' />
          </View>
        )}
      </ScrollView>
    );
  }
}

//export default MyOrders;

const mapStateToProps = (state) => {
  return {
    signInId: state.Auth.signInId,
  };
};

export default connect(mapStateToProps, null)(MyOrders);
