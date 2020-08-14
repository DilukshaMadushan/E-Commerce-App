import React, { Component } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";
import StarRating from "react-native-star-rating";
import RatingStars from "../RatingStars";
import RelatedProducts from "../RelatedProducts";
import AddReview from "../Review";
import DropDownMenu from "../DropDownMenu";
import { SliderBox } from "react-native-image-slider-box";
import Images from "../../common/Images";
import PostAPI from "../../services/PostAPI";
import { connect } from "react-redux";

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
    isModalVisible: false,
    review: null,
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
      //console.log(this.state.item);
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
                ></Text>
                <Text style={styles.Description}>{item}</Text>
              </View>
            )}
          />
        </View>
      );
    } else if (this.state.statusTab === 2) {
      return (
        <View>
          <AddReview
            reviewList={this.props.reviewList}
            email={this.props.profile_email}
            profile_name={this.props.profile_name}
            toggleModel={(review) => {
              this.setState({ review: review, isModalVisible: true });
            }}
          />
          <Modal isVisible={this.state.isModalVisible}>
            <RatingStars toggleModal={(rating) => this.postingReview(rating)} />
          </Modal>
        </View>
      );
    } else if (this.state.statusTab === 3) {
      return <View style={{ width: "100%", height: 200 }}></View>;
    }
  }

  postingReview(rating) {
    this.setState({ isModalVisible: false });
    const review = this.state.review;
    const average_rating =
      (this.state.item.average_rating * this.state.item.rating_count + rating) /
      (this.state.item.rating_count + 1);
    const New_Avarege = Math.round(Number(average_rating));

    PostAPI.reviewApi(
      JSON.stringify({
        product_id: this.state.item.id,
        review: review,
        reviewer: this.props.profile_name,
        reviewer_email: this.props.profile_email,
        rating: New_Avarege,
      })
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.props._onRefresh();
        this.props.Scroll();
        console.log(responseJson);
      });
  }

  relatedItemChange = (relatedItem) => {
    this.setState({ item: relatedItem });
  };

  ItemImageShow() {
    if (this.state.item.images.length == 0) {
      return (
        <Image style={styles.ItemImage} source={Images.splashScreen}></Image>
      );
    } else if (this.state.item.images.length == 1) {
      return (
        <Image
          style={styles.ItemImage}
          source={{ uri: this.state.item.images[0].src }}
        ></Image>
      );
    } else if (this.state.item.images.length > 1) {
      return (
        <SliderBox
          style={styles.ItemImage}
          images={this.state.item.images}
        ></SliderBox>
      );
    }
  }
  updateData = (item) => {
    this.props.updateData(item);
  };

  render() {
    const rate = Math.round(Number(this.state.item.average_rating));
    return (
      <View style={{ paddingBottom: 10, paddingTop: 10 }}>
        {this.ItemImageShow()}
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
          <StarRating
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            iconSet={"Ionicons"}
            maxStars={5}
            starSize={19}
            starStyle={{
              paddingEnd: 1,
            }}
            disabled={true}
            rating={rate}
            fullStarColor={"rgba(0,179,155,1)"}
          />
          <Text style={styles.ReviewNumber}>
            {" "}
            {this.state.item.average_rating} ({this.state.item.rating_count})
          </Text>
        </View>
        {this.state.item.attributes.length > 0 ? (
          <DropDownMenu
            itemOptions={this.state.item.attributes[0].options}
            updateData={(val) => this.updateData(val)}
          />
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
              console.log(this.state.item.images.length);
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
        {this.state.item.related_ids.length > 0 ? (
          <RelatedProducts
            related_ids={this.state.item.related_ids}
            navigation={this.props.navigation}
            relatedItem={(item) => this.relatedItemChange(item)}
            Scroll={this.props.Scroll}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    profile_name: state.auth.profile_name,
    profile_email: state.auth.profile_email,
  };
};

export default connect(mapStateToProps, null)(ItemView);
