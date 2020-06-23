import React, { useState  } from 'react';
import {
  FlatList,
  Text, 
  View, 
  Image, 
  Dimensions,
  TouchableOpacity, 
} from 'react-native';

import styles from './styles';
import { Icon } from 'react-native-elements';

import SubSecCategories from '../ColumnSubSecCategories';


function SubSecCategorylist(SubSecCategorylist,subStatus){
  if(subStatus===1){
    return(
      <SubSecCategories SubSecCategorylist={SubSecCategorylist}/>
      );
  }else(subStatus===0)
    return(
      <View/>
    );    
} 
class SubCategories extends React.Component{
  state = {
    //SubSecCategoryStatus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  }

  render(){
    return (
        <View style={styles.List}>
           {this.props.CategoryList.filter(function(cat){return cat.parent == this.props.id;}).map((item,index) => (
            <View>
              <TouchableOpacity
                onPress ={()=>{   const index = this.state.CategoryList.indexOf(item);
                              if (this.state.SubSecCategoryStatus[index]==0){
                                  const dup_array = this.state.SubSecCategoryStatus;
                                        dup_array[index] = 1;
                                        this.setState({SubSecCategoryStatus:dup_array});
                              }else{const dup_array = this.state.SubSecCategoryStatus;
                                        dup_array[index] = 0;
                                        this.setState({SubSecCategoryStatus:dup_array});}}}
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
              <SubSecCategorylist SubSecCategorylist={this.props.CategoryList.filter(function(cat){return cat.parent == item.id;})}
                                  //subStatus={this.state.SubSecCategoryStatus[this.state.CategoryList.indexOf(item)]} 
                                  />
            </View>
            ))
          }
        </View>
    );
  }
}

export default SubCategories;
