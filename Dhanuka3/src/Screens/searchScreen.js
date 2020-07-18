import React, {Component} from 'react';
import {TextInput,StyleSheet, Text, View, Image, Dimensions,TouchableOpacity,ActivityIndicator,StatusBar,} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../common/Images';

import SearchList from '../components/SearchList'



class searchScreen extends Component {
  state={
    search:null,
    searchList:[],
    listStaus:false,
    isLoading:false,
  }

  handleSearch(){
    this.getItems(this.state.search);
  }

  getItems(search){
  
    fetch('https://www.waytoogo.com/wp-json/wc/v3/products?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd&per_page=50&search='+search,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
          //'Authorization': ('Bearer '+token)
      }
      
      })
    .then((response) => response.json())
    .then((responsejson) => {
       
       this.setState({searchList:responsejson});
       this.setState({listStaus:true});
       this.setState({isLoading:true});
    })
  }


  render() {
    const { width } = Dimensions.get('window');
    return (
        <View style={styles.container}>
            <Text style={styles.Search}>Search</Text>
            <View style={styles.SearchView}>
                <TextInput  style={styles.SearchInput}
                  placeholder=" search for the item"
                  maxLength={20}
                  onChangeText={text => this.setState({search:text})}
                />
                <TouchableOpacity onPress={() => this.handleSearch()}>
                  <Icon name='search'
                        size={25}
                        type='Entypo'
                        color={'black'}/>
                </TouchableOpacity>
            </View>
            {(this.state.listStaus==false)?
            <View style={styles.SearchBack}>
              <Image source={Images.logo} style={styles.SearchImage}/>
              <Text>Search item you are looking for...!!!</Text>
            </View>
            : 
            (this.state.isLoading==false)?
              <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:"50%"}}>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
              </View> 
              :
              <SearchList searchList={this.state.searchList} navigation={this.props.navigation} isLoading={this.state.isLoading}/>
            }
          
        </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Search:{
    fontSize:25,
    padding:10,
  },
  SearchView:{
    flexDirection:'row',
    height: 50,
    marginHorizontal:10,
    paddingHorizontal:10,
    marginBottom:10,
    alignItems:'center',
    borderRadius:5,
    backgroundColor:'rgba(0,0,0,0.1)',
  },
  SearchInput:{
    flex:1,
    fontSize:16,
    paddingStart:10
  },
  SearchBack:{
    opacity:0.4,
    top:'45%',
    alignSelf:'center',
    position:'absolute',
    alignItems:'center'
  },
  SearchImage:{
    width:0.53*width,
    height:0.2*width,
    marginBottom:20
  },
});

export default searchScreen;