import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  Picker,
  ActivityIndicator,
  StatusBar,
  Dimensions,
  FlatList
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import GetAPI from '../../services/GetApi';
import PostAPI from '../../services/PostAPI';
import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';


class DeliveryTextInputs extends Component {
  state = {
    customerDetails: {
      id: 0,
      date_created: '',
      date_created_gmt: '',
      date_modified: '',
      date_modified_gmt: '',
      email: '',
      first_name: '',
      last_name: '',
      role: '',
      username: '',
      billing: {
        first_name: '',
        last_name: '',
        company: '',
        address_1: '',
        address_2: '',
        city: '',
        postcode: '',
        country: '',
        state: '',
        email: '',
        phone: '',
      },
    },
    first_name: null,
    last_name: null,
    company: '',
    address_1: null,
    address_2: null,
    city: null,
    postcode: null,
    country: 'Sri Lanka',
    State: 'Uva',
    email: null,
    phone: '',
    isLoading: true,
    isModalVisible:false,
    cities:[],
    locations:[],
    radio_props:[],
    selected_radio:null,
    deliveryCost:null,
    itemData: this.props.navigation.getParam('itemData'),
    area: ''
  };

  componentDidMount() {
    this.getItemPlaceholders();
  }

  getItemPlaceholders() {
    GetAPI.deliveryTextInputApi(this.props.signInId)
      .then((response) => response.json())
      .then((json) => {
        try {
          if (json.role == 'customer') {
            this.setState({isLoading: false});
            this.setState({customerDetails: json});

            this.setState({first_name: json.first_name});
            this.setState({last_name: json.last_name});
            this.setState({company: json.billing.company});
            this.setState({address_1: json.billing.address_1});
            this.setState({address_2: json.billing.address_2});
            this.setState({city: json.billing.city});
            this.setState({postcode: json.billing.postcode});
            this.setState({email: json.billing.email});
            this.setState({phone: json.billing.phone});
            this.setState({State: json.billing.state});
            //this.setState({isLoading: false});
            this.getCities();
          } else {
            this.setState({isLoading: false});
            this.props.navigation.navigate('Auth');
            alert('Please Login before Shop !');
          }
        } catch {
          alert('error');
        }
      });
  }

  handleDeliveryInput() {
    if (
      this.state.first_name !== null &&
      this.state.last_name !== null &&
      this.state.address_1 !== null &&
      this.state.city !== null &&
      this.state.postcode !== null &&
      this.state.State !== null &&
      (this.state.email !== null || this.state.phone !== null)
    ) {
      this.setState({isLoading: true});

      PostAPI.deliveryTextInputsApi(
        this.props.signInId,
        JSON.stringify({
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          billing: {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            address_1: this.state.address_1,
            address_2: this.state.address_2,
            city: this.state.city,
            postcode: this.state.postcode,
            country: 'Sri Lanka',
            state: this.state.State,
            email: this.state.email,
            phone: this.state.phone,
          },
          shipping: {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            address_1: this.state.address_1,
            address_2: this.state.address_2,
            city: this.state.city,
            postcode: this.state.postcode,
            country: 'Sri Lanka',
            state: this.state.state,
          },
        }),
      )
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);

          try {
            if (responseJson.role == 'customer') {
              this.setState({customerDetails:responseJson});
              this.setState({isLoading: false});
              this.setState({isModalVisible:true});
              //this.props.navigation.navigate('Payment', {state: this.state});
            } else {
              this.setState({isLoading: false});
              this.props.navigation.navigate('Auth');
              alert('Please Register before Shop !');
            }
          } catch {
            alert('error');
          }
        })
        .catch((error) => {
          console.error(error);
          alert(error);
        });
    } else {
      alert('something is missing');
    }
  }

  checkTheCity(){
    const cityList = this.state.cities.map(city=>city.name);
    if (cityList.includes(this.state.city)){
      return true;
    }else{
      return false;
    }
  }

  getCities(){
    GetAPI.getDeliveryZones()
      .then((response) => response.json())
      .then((json) => {
          this.setState({cities:json});
          this.setState({isLoading: false});
      });
  }

  show = (value) => {
    this.setState({pickerSelectedValue: value});
    this.setState({State: value});
  };

  // ------------ Shipping Area --------------------

  changeCity = (item) =>{
    this.setState({city: item.label});
    //this.getZoneMethods(item.value);
  }

  getZoneMethods(id){
    GetAPI.getDeliveryZoneMethods(id)
      .then((response) => response.json())
      .then((json) => {
          this.setState({locations:json});
          this.setState({radio_props:json.map((item,i)=>{
            return {
              cost: parseFloat(item.settings.cost.value),
              label: item.title,
              isSelected: false,
              index:i
            }
            })
          });
          //console.log("Hi Hi Hi",this.state.radio_props);
          //this.setState({deliveryCost: parseFloat(json[0].settings.cost.value)});
      });
  }

  selectRadio = (item)=>{
      let radioList = this.state.radio_props.map((item1,i)=>{
        return {
          cost: parseFloat(item1.cost),
          label: item1.label,
          isSelected: false,
          index:i
        }
        });

      radioList[item.index].isSelected = true;
      this.setState({radio_props:radioList});
      
      this.setState({deliveryCost:item.cost});
      console.log(this.state.deliveryCost);
      this.setState({area:item.label});
  }

  render() {
    const {width} = Dimensions.get('window');
    return (
      <View>
        {this.state.isLoading == false ? (
          <View>
            <Modal isVisible={this.state.isModalVisible}>
              <View style={{
                      //height: '50%',
                      backgroundColor: '#FFF',
                      borderRadius: 10,
                      padding: 15,
                    }}>
                  <ScrollView>
                    <Text style={{fontSize:20}}>Select a Delivery Area</Text>

                    
                    <FlatList
                      style={{marginTop:10}}
                      data={this.state.radio_props}
                      renderItem={({item}) => (
                        <TouchableOpacity
                          style={{marginTop:10}}
                          activeOpacity={0.6}
                          delayPressIn={0}
                          onPress={() => this.selectRadio(item)}
                          >
                          <View style={{flexDirection:'row'}}>
                            <View style={{
                              height: 24,
                              width: 24,
                              borderRadius: 12,
                              borderWidth: 2,
                              borderColor: '#000',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                              {
                                item.isSelected ?
                                  <View style={{
                                    height: 12,
                                    width: 12,
                                    borderRadius: 6,
                                    backgroundColor: '#000',
                                  }}></View>
                                  : null
                              }
                            </View>
                            <Text style={{marginLeft:10, marginTop:1}}>{item.label}</Text>
                          </View>
                        
                        </TouchableOpacity>
                      )}
                      //keyExtractor={(item) => item.id}
                    />


                    <View style={{flexDirection:'row', marginTop:15}}>
                      <TouchableOpacity
                        style={{paddingVertical:7, backgroundColor:'gray', borderRadius:5, width:width*0.4, marginRight:5}}
                        activeOpacity={0.6}
                        delayPressIn={0}
                        onPress={() => {
                          this.setState({isModalVisible:false});
                          this.setState({deliveryCost:null});
                          }}>
                        <Text
                          style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                          Cancel
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        disabled={this.state.deliveryCost===null}
                        style={(this.state.deliveryCost===null)?
                                {paddingVertical:7, backgroundColor:'orange', borderRadius:5, width:width*0.4, opacity:0.4}
                              :{paddingVertical:7, backgroundColor:'orange', borderRadius:5, width:width*0.4, opacity:1}}
                        activeOpacity={ 0.6}
                        delayPressIn={0}
                        onPress={() => {
                          if (this.state.deliveryCost!==null){
                            this.setState({isModalVisible:false});
                            this.props.navigation.navigate('Payment', {state: this.state});
                          }
                          
                        }}>
                        <Text
                          style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                          Continue
                        </Text>
                      </TouchableOpacity>
                    </View>


                  </ScrollView>
                
              </View>
            </Modal>

            <ScrollView style={{flexDirection: 'column', marginBottom: 135}}>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>First Name</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.first_name}
                  maxLength={30}
                  onChangeText={(text) => this.setState({first_name: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Last Name</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.last_name}
                  maxLength={30}
                  onChangeText={(text) => this.setState({last_name: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Company</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.company}
                  maxLength={30}
                  onChangeText={(text) => this.setState({company: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Address Line 1</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.address_1}
                  maxLength={50}
                  onChangeText={(text) => this.setState({address_1: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Address Line 2</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.address_2}
                  maxLength={50}
                  onChangeText={(text) => this.setState({address_2: text})}
                />
              </View>

              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Town/City</Text>
                <View style={{flex:2, marginRight:10}}>
                  <DropDownPicker
                      dropDownStyle={{backgroundColor: '#FFF'}}
                      placeholder={(!this.checkTheCity())?"Select an option":this.state.city}
                      items={this.state.cities.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })}
                      defaultIndex={0}
                      containerStyle={{
                                  //flex:1.9,
                                  width: "100%",
                                  height: 45,
                                  //marginRight:10,
                                  //justifyContent: 'center',
                                  marginVertical: 10,
                                }}
                      labelStyle={{fontSize: 16, color: 'grey'}}
                      activeLabelStyle={{color: 'red'}}
                      onChangeItem={(item) => {
                        this.changeCity(item);
                      }}
                    />
                </View>
                
                {/* <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.city}
                  maxLength={30}
                  onChangeText={(text) => this.setState({city: text})}
                /> */}
              </View>
              {/* <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>State</Text>
                <View style={(styles.TextInputs, styles.Picker)}>
                
                  <Picker
                    selectedValue={this.state.pickerSelectedValue}
                    onValueChange={this.show}>
                    <Picker.Item label="Central" value="Central"></Picker.Item>
                    <Picker.Item label="South" value="South"></Picker.Item>
                    <Picker.Item label="Western" value="Western"></Picker.Item>
                    <Picker.Item label="North" value="North"></Picker.Item>
                  </Picker>
                </View>
              </View> */}
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Postcode</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.postcode}
                  maxLength={30}
                  onChangeText={(text) => this.setState({postcode: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Email</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.email}
                  maxLength={30}
                  onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Phone Number</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.phone}
                  keyboardType={'number-pad'}
                  maxLength={15}
                  onChangeText={(text) => this.setState({phone: text})}
                />
              </View>
            </ScrollView>
            <View style={styles.ButtonsScreen}>
              <TouchableOpacity
                style={styles.buttonBack}
                activeOpacity={0.6}
                delayPressIn={0}
                onPress={() => this.props.navigation.navigate('Mycart')}>
                <Text
                  style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                  Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonNext}
                activeOpacity={0.6}
                delayPressIn={0}
                //onPress={() =>this.props.navigation.navigate('Payment')}
                onPress={() => {
                  if (this.checkTheCity()){
                    const oldCity = this.state.cities.filter((city)=>{
                      return city.name==this.state.city;
                    });
                    this.getZoneMethods(oldCity[0].id);
                    this.handleDeliveryInput();
                  }else{
                    alert("Please select a Valid City to Continue!")
                  }
                  
                }}>
                <Text
                  style={{color: '#fff', fontSize: 20, textAlign: 'center'}}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: width * 0.7,
            }}>
              <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              /> */}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signInId: state.auth.signInId,
  };
};

export default connect(mapStateToProps, null)(DeliveryTextInputs);
