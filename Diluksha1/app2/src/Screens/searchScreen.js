import React, { Component } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import Filters from "../components/Filters";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import Images from "../common/Images";
import SearchList from "../components/SearchList";
import GetAPI from "../services/GetApi";

class searchScreen extends Component {
  state = {
    search: null,
    searchList: [],
    listStatus: false,
    isLoading: false,
    isModalVisible: false,
  };

  handleSearch() {
    this.getItems(this.state.search);
  }

  getItems(search) {
    GetAPI.searchApi(search)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({ searchList: responsejson });
        this.setState({ listStatus: true });
        this.setState({ isLoading: true });
      });
  }

  filterItem(item) {
    this.setState({ isModalVisible: false });
    console.log(item);
  }
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.Search}>Search</Text>
          <Modal isVisible={this.state.isModalVisible}>
            <Filters toggleModal={(item) => this.filterItem(item)} />
          </Modal>
          <TouchableOpacity
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Icon
              style={{ marginRight: 22 }}
              name='th-list'
              size={20}
              type='font-awsome'
              color={"grey"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.SearchView}>
          <TextInput
            style={styles.SearchInput}
            placeholder=' search for the item'
            maxLength={20}
            onChangeText={(text) => this.setState({ search: text })}
          />
          <TouchableOpacity onPress={() => this.handleSearch()}>
            <Icon name='search' size={25} type='Entypo' color={"black"} />
          </TouchableOpacity>
        </View>
        {this.state.listStatus == false ? (
          <View style={styles.SearchBack}>
            <Image source={Images.logo} style={styles.SearchImage} />
            <Text>Search item you are looking for...!!!</Text>
          </View>
        ) : this.state.isLoading == false ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50%",
            }}
          >
            <ActivityIndicator />
            <StatusBar barStyle='default' />
          </View>
        ) : (
          <SearchList
            searchList={this.state.searchList}
            navigation={this.props.navigation}
            isLoading={this.state.isLoading}
          />
        )}
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Search: {
    flex: 1,
    fontSize: 25,
    padding: 10,
  },
  SearchView: {
    flexDirection: "row",
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  SearchInput: {
    flex: 1,
    fontSize: 16,
    paddingStart: 10,
  },
  SearchBack: {
    opacity: 0.4,
    top: "45%",
    alignSelf: "center",
    position: "absolute",
    alignItems: "center",
  },
  SearchImage: {
    width: 0.53 * width,
    height: 0.2 * width,
    marginBottom: 20,
  },
});

export default searchScreen;
