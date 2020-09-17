import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import SubSecCategories from '../DrawerSubSecCategories';

function SubSecCategorylist({SubSecCategorylist, subStatus}) {
  if (subStatus == 1) {
    return <SubSecCategories SubSecCategorylist={SubSecCategorylist} />;
  } else {
    console.log(subStatus);
    return <View />;
  }
}
class SubCategories extends Component {
  state = {
    SubSecCategoryStatus: [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
    ],
    CategoryList: [],
    SubCategoryList: [],
  };

  componentWillMount() {
    this.setState({CategoryList: this.props.CategoryList});
    this.setState({SubCategoryList: this.props.SubCategoryList});
  }

  render() {
    return (
      <View>
        {this.state.SubCategoryList.map((item, index) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.CategoryList.filter(function (cat) {
                    return cat.parent == item.id;
                  }).length == 0
                ) {
                  this.props.navigation.navigate('Items', {curentCategory:{
                    id: item.id, name: item.name
                  }});
                } else {
                  const index = this.state.SubCategoryList.indexOf(item);
                  if (this.state.SubSecCategoryStatus[index] == 0) {
                    const dup_array = this.state.SubSecCategoryStatus;
                    dup_array[index] = 1;
                    this.setState({SubSecCategoryStatus: dup_array});
                    //console.log(this.state.SubSecCategoryStatus);
                  } else {
                    const dup_array = this.state.SubSecCategoryStatus;
                    dup_array[index] = 0;
                    this.setState({SubSecCategoryStatus: dup_array});
                    //console.log(this.state.SubSecCategoryStatus);
                  }
                }
              }}
              key={item.id}
              style={{
                flexDirection: 'row',
                paddingLeft: 40,
                paddingVertical: 10,
              }}>
              <Text style={styles.title}>
                {this.state.SubSecCategoryStatus[
                  this.state.SubCategoryList.indexOf(item)
                ]
                  ? '-'
                  : '+'}
              </Text>
              <Text style={[styles.title, {paddingLeft: 10}]}>{item.name}</Text>
            </TouchableOpacity>
            <SubSecCategorylist
              SubSecCategorylist={this.state.CategoryList.filter(function (
                cat,
              ) {
                return cat.parent == item.id;
              })}
              subStatus={
                this.state.SubSecCategoryStatus[
                  this.state.SubCategoryList.indexOf(item)
                ]
              }
            />
          </View>
        ))}
      </View>
    );
  }
}

export default withNavigation(SubCategories);

