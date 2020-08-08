import React, { Component } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  AppRegistry,
} from "react-native";
import styles from "./styles";
import RatingStars from "../RatingStars";
import DropDownMenu from "../DropDownMenu";
import { SliderBox } from "react-native-image-slider-box";
import { connect } from "react-redux";
import Images from "../../common/Images";

const { width, height } = Dimensions.get("window");

class ItemView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusTab: 1,
    };
  }

  state = {
    item: null,
  };

  componentWillMount() {
    this.setState({ item: this.props.item });
  }

  //short_description
  Tabs(width, height, description) {
    if (this.state.statusTab === 1) {
      let des_array = [];
      let new_description = "";
      let newLine = "";
      let i = 0;
      while (i < description.length) {
        if (description[i] == "<") {
          if (description[i + 1] == "b") {
            let j = 2;
            while (description[i + j] !== ">") {
              j = j + 1;
            }
            des_array.push(newLine);
            new_description = new_description + newLine;
            newLine = "";
            i = i + j;
          } else {
            let k = 1;
            while (description[i + k] !== ">") {
              k = k + 1;
            }
            if (i + k + 1 < description.length) {
              i = i + k;
            } else {
              des_array.push(newLine);
              new_description = new_description + newLine;
            }
          }
        } else {
          if (description[i] !== "\n") {
            newLine = newLine + description[i];
          }
        }
        i = i + 1;
      }
      console.log(this.state.item);
      return (
        <View style={{ width: "100%", paddingLeft: 60, paddingTop: 30 }}>
          <FlatList
            data={des_array}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontWeight: "500",
                    paddingVertical: 5,
                    fontSize: 15,
                    marginRight: 10,
                  }}
                >
                  -
                </Text>
                <Text style={styles.Description}>{item}</Text>
              </View>
            )}
          />
        </View>
      );
    } else if (this.state.statusTab === 2) {
      return <View style={{ width: "100%" }}></View>;
    } else if (this.state.statusTab === 3) {
      return <View style={{ width: "100%" }}></View>;
    }
  }

  render() {
    return (
      <View style={{ paddingBottom: 10, paddingTop: 10 }}>
        {
          //(this.state.item.images[i].length<1)?
          <Image
            style={styles.ItemImage}
            source={{ uri: this.state.item.images[0].src }}
          ></Image>
          //:
          //<SliderBox style={styles.ItemImage} source={{uri:this.state.item.images}}></SliderBox>
        }
        <Text style={styles.ItemName}>{this.state.item.name}</Text>
        {this.state.item.stock_status == "instock" ? (
          <View></View>
        ) : (
          <Text style={{ color: "red", fontSize: 15, alignSelf: "center" }}>
            Item Is out of stock... We are sorry{" "}
          </Text>
        )}
        <Text style={styles.ItemPrice}>Rs. {this.state.item.price}</Text>
        <View style={styles.ItemReviews}>
          <RatingStars item={this.state.item} />
          <Text style={styles.ReviewNumber}>
            {" "}
            {this.state.item.average_rating} ({this.state.item.rating_count})
          </Text>
        </View>
        {this.state.item.attributes.length > 0 ? (
          <DropDownMenu itemOptions={this.state.item.attributes[0].options} />
        ) : (
          <View></View>
        )}

        <View
          style={{
            width: width,
            flexDirection: "row",
            marginTop: 10,
            paddingRight: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            style={
              this.state.statusTab == 1 ? styles.button : styles.buttonPressed
            }
            onPress={() => {
              this.state.statusTab == 1
                ? this.setState({ statusTab: 1 })
                : this.setState({ statusTab: 1 });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
              Description
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={
              this.state.statusTab == 2 ? styles.button : styles.buttonPressed
            }
            onPress={() => {
              this.state.statusTab == 2
                ? this.setState({ statusTab: 2 })
                : this.setState({ statusTab: 2 });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
              Reveiws
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={
              this.state.statusTab == 3 ? styles.button : styles.buttonPressed
            }
            onPress={() => {
              this.state.statusTab == 3
                ? this.setState({ statusTab: 3 })
                : this.setState({ statusTab: 3 });
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
              Features
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DescriptionView}>
          {this.Tabs(width, height, this.state.item.short_description)}
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={
            this.state.statusTab == 3 ? styles.button : styles.buttonPressed
          }
          onPress={() => this.facebookShare()}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>
            Facebook
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default ItemView;
