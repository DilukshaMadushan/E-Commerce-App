import React from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";
import Images from "../../common/Images";
import SubCategories from "../ColumnSubCategories";
import GetAPI from "../../services/GetApi";
import Spinner from 'react-native-loading-spinner-overlay';


function Item({ title, uri, id, product }) {
  return (
    <View style={styles.item} activeOpacity={0.7}>
      <Image style={styles.imagecategories} source={uri}></Image>
      <View style={styles.dark}></View>
      <View
        style={[
          id % 2 == 0 && { alignItems: "flex-end", paddingEnd: 20 },
          id % 2 != 0 && { alignItems: "flex-start", paddingStart: 20 },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.product}>{product}</Text>
      </View>
    </View>
  );
}


function SubCategorylist({ CategoryList, status, SubCategoryList }) {
  if (status === 1) {
    return (
      <SubCategories
        CategoryList={CategoryList}
        SubCategoryList={SubCategoryList}
      />
    );
  } else status === 0;
  return <View />;
}


class Categories extends React.Component {
  state = {
    CategoryList: [],
    MainCategoryList: [],
    SubCategoryStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0 ,0],
    SubCategoryList: [],
    isLoading: true,
  };

  componentWillMount() {
    this.getCategories();
  }

  getCategories() {
    this.setState({ isLoading: true });
    GetAPI.MainCategoryApi()
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        this.setState({ CategoryList: json });
        this.setState({
          MainCategoryList: json.filter(function (cat) {
            return cat.parent == 0;
          }),
        });
        console.log(json.id);
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { width } = Dimensions.get("window");
    return (
      <View>
        {this.state.isLoading == false ? (
          <View style={{ alignSelf: "center", paddingBottom: 15 }}>
            <FlatList
              data={this.state.MainCategoryList}
              renderItem={({ item }) => (
                <View>
                  {(item.name==='Special offer')?<Text></Text>:
                  <View>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      delayPressIn={0}
                      onPress={() => {
                        this.props.navigation.navigate("Items", {curentCategory:{
                          id: item.id, name: item.name
                        }});
                        /*if (
                          this.state.CategoryList.filter(function (cat) {
                            return cat.parent == item.id;
                          }).length == 0
                        ) {
                          this.props.navigation.navigate("Items", {
                            id: item.id,
                          });
                        } else {
                          const index = this.state.MainCategoryList.indexOf(item);
                          if (this.state.SubCategoryStatus[index] == 0) {
                            const dup_array = this.state.SubCategoryStatus;
                            dup_array[index] = 1;
                            this.setState({ SubCategoryStatus: dup_array });
                          } else {
                            const dup_array = this.state.SubCategoryStatus;
                            dup_array[index] = 0;
                            this.setState({ SubCategoryStatus: dup_array });
                          }
                        }
                      }}*/
                      }}
                    >
                      <Item
                        title={item.name}
                        uri={(item.image==null)?Images.default_Category:{uri:item.image.src}}
                        id={this.state.MainCategoryList.indexOf(item)}
                        product={item.count.toString()}
                      />
                    </TouchableOpacity>
                    <SubCategorylist
                      status={
                        this.state.SubCategoryStatus[
                          this.state.MainCategoryList.indexOf(item)
                        ]
                      }
                      CategoryList={this.state.CategoryList}
                      SubCategoryList={this.state.CategoryList.filter(function (
                        cat
                      ) {
                        return cat.parent == item.id;
                      })}
                    />
                  </View>}
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: width * 0.8,
            }}
          >
            <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              /> */}
            {/* <StatusBar barStyle='default' /> */}
          </View>
        )}
      </View>
    );
  }
}

export default withNavigation(Categories);
