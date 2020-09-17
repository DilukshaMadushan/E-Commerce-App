import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Picker,
  ActivityIndicator,
  StatusBar,
  Dimensions
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import GetAPI from '../../services/GetApi';
import PostAPI from '../../services/PostAPI';
import Spinner from 'react-native-loading-spinner-overlay';
import DropDownPicker from 'react-native-dropdown-picker';

class ProfileUpdate extends Component {
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
    cities:[]
  };

  componentDidMount() {
    this.getItemPlaceholders();
  }

  getItemPlaceholders() {
    GetAPI.profileUpdateApi(this.props.signInId)
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
            this.getCities();
            
            
          } else {
            this.setState({isLoading: false});
            this.props.navigation.navigate('Auth');
            alert('Please Register before Shop !');
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

      PostAPI.updateProfileApi(
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
              this.setState({isLoading: false});
              this.props.navigation.navigate('Account', {state: this.state});
            } else {
              this.setState({isLoading: false});
              alert('Please Register before Shop !');
              this.props.navigation.navigate('Auth');
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

  show = (value) => {
    this.setState({pickerSelectedValue: value});
    this.setState({State: value});
  };

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

  // ------------ Shipping Area --------------------

  changeCity = (item) =>{
    this.setState({city: item.label});
    //this.getZoneMethods(item.value);
  }

  render() {
    const { width, height } = Dimensions.get("window");
    return (
      <View style={{height:"100%"}}>
        {this.state.isLoading ? (
          <View style={{backgroundColor: '#FFF',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: width * 0.8,
                        marginBottom: width * 1.3,}}>
            <ActivityIndicator size="large" color="#FF8C00" />
            {/* <Spinner
                visible={true}
                textContent={'Loading...'}
                //textStyle={styles.spinnerTextStyle}
              /> */}
          </View>
        ) : (
          <View style={{flexDirection:'column',flex:1}}>
            <View>
            <ScrollView style={{flexDirection: 'column', marginBottom: 30}}>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>First name |පලමු නම |முதலில் பெயர</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.first_name}
                  maxLength={30}
                  onChangeText={(text) => this.setState({first_name: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Last name |අවසන් නම |கடந்த பெயர</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.last_name}
                  maxLength={30}
                  onChangeText={(text) => this.setState({last_name: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Company |ආයතනය |நிறுவனம்</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.company}
                  maxLength={30}
                  onChangeText={(text) => this.setState({company: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Address |ලිපිනය |முகவரி</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.address_1}
                  maxLength={50}
                  onChangeText={(text) => this.setState({address_1: text})}
                />
              </View>
              {/* <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Address Line 2</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.address_2}
                  maxLength={50}
                  onChangeText={(text) => this.setState({address_2: text})}
                />
              </View> */}

              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Town / City |නගරය |நகரம</Text>
                <View style={{flex:2, marginRight:10}}>
                  <DropDownPicker
                      dropDownStyle={{backgroundColor: '#FFF'}}
                      placeholder={(!this.checkTheCity())?"Select a City":this.state.city}
                      items={this.state.cities.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })}
                      defaultIndex={0}
                      containerStyle={{
                                  //flex:1.9,
                                  width:width*0.9,
                                  height: 45,
                                  alignSelf:'center',
                                  borderRadius:25,
                                  //marginRight:10,
                                  //justifyContent: 'center',
                                  marginBottom:5
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
                <Text style={styles.TextInputsName}>Postcode |තැපැල් අංකය |இடுகை எண்</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.postcode}
                  maxLength={30}
                  onChangeText={(text) => this.setState({postcode: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Email |විද්යුත් තැපැල් ලිපිනය | மின்னஞ்சல் முகவர</Text>
                <TextInput
                  style={styles.TextInputs}
                  placeholder={this.state.customerDetails.billing.email}
                  maxLength={30}
                  onChangeText={(text) => this.setState({email: text})}
                />
              </View>
              <View style={styles.Itemrows}>
                <Text style={styles.TextInputsName}>Phone No |දුරකතන අංකය |ப ொலைபெசி எண</Text>
                <TextInput
                  style={styles.PhoneTextInputs}
                  placeholder={this.state.customerDetails.billing.phone}
                  keyboardType={'number-pad'}
                  maxLength={15}
                  onChangeText={(text) => this.setState({phone: text})}
                />
              </View>
            </ScrollView>

            </View>

            <View style={styles.ButtonsScreen}>
                <TouchableOpacity
                  style={styles.Back}
                  activeOpacity={0.6}
                  delayPressIn={0}
                  onPress={() => this.props.navigation.navigate('Account')}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Save}
                  activeOpacity={0.6}
                  delayPressIn={0}
                  onPress={() => this.handleDeliveryInput()}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 18,
                      textAlign: 'center',
                      fontWeight: 'bold',
                    }}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
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

export default connect(mapStateToProps, null)(ProfileUpdate);
