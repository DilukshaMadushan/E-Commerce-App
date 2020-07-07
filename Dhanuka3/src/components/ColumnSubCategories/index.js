import React, { useState  } from 'react';
import {
  FlatList,
  Text, 
  View, 
  Image, 
  Dimensions,
  TouchableOpacity, 
} from 'react-native';

import { withNavigation } from 'react-navigation'; 

import styles from './styles';
import { Icon } from 'react-native-elements';

import SubSecCategories from '../ColumnSubSecCategories';


function SubSecCategorylist({SubSecCategorylist,subStatus}){
  if(subStatus==1){
    return(
      <SubSecCategories SubSecCategorylist={SubSecCategorylist} name={"HI HI hi"}/>
      );
  }else{
    console.log(subStatus);
    return(
      <View/>
    );}    
} 
class SubCategories extends React.Component{
  state = {
    SubSecCategoryStatus : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    CategoryList:[],
    SubCategoryList:[]
  }

  componentWillMount(){
      this.setState({CategoryList:this.props.CategoryList});
      this.setState({SubCategoryList:this.props.SubCategoryList});
  }

  render(){
    return (
        <View style={styles.List}>
           {this.state.SubCategoryList.map((item,index) => (
            <View>
              <TouchableOpacity
                onPress ={()=>{  
                                  if (this.state.CategoryList.filter(function(cat){return cat.parent == item.id;}).length==0){
                                      this.props.navigation.navigate('Items',{"id":item.id});
                                  }else{
                                    const index = this.state.SubCategoryList.indexOf(item);
                                    if (this.state.SubSecCategoryStatus[index]==0){
                                        const dup_array = this.state.SubSecCategoryStatus;
                                              dup_array[index] = 1;
                                              this.setState({SubSecCategoryStatus:dup_array});
                                              //console.log(this.state.SubSecCategoryStatus);
                                    }else{const dup_array = this.state.SubSecCategoryStatus;
                                              dup_array[index] = 0;
                                              this.setState({SubSecCategoryStatus:dup_array});
                                              //console.log(this.state.SubSecCategoryStatus);
                                    }
                                  }
                                    
                              }}
                key = {item.id}
                style = {styles.ListItem}>
                    <Text style={{flex:1,paddingStart:25,textAlign:'center',fontSize:15,fontWeight:'bold'}}>
                      {item.name}
                    </Text>
                    <Icon name='chevron-right'
                          containerStyle={styles.ArrowIcon}
                          type='Entypo'
                          color={'black'}/>
              </TouchableOpacity>
              <SubSecCategorylist SubSecCategorylist={this.state.CategoryList.filter(function(cat){return cat.parent == item.id;})}
                                  subStatus={this.state.SubSecCategoryStatus[this.state.SubCategoryList.indexOf(item)]} 
                                  />
            </View>
            ))
          }
        </View>
    );
  }
}

export default withNavigation(SubCategories);
