import React, {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import styles from './styles';
import { Icon } from 'react-native-elements';


class SubSecCategories extends Component{

  state = {
    SubSecCategorylist:[]
  }

  componentWillMount(){
     this.setState({SubSecCategorylist:this.props.SubSecCategorylist});
     console.log(this.props.name);
  }

 render(){
    return (
        <View style={styles.List}>
           {this.props.SubSecCategorylist.map((item,index) => (
              <TouchableOpacity
                onPress = {()=>{
                  this.props.navigation.navigate('Items',{"id":item.id});
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
            ))
          }
        </View>
    );
  }
}

export default withNavigation(SubSecCategories);
