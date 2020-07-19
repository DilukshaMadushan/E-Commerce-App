import React, { Component } from "react";
import { View, TextInput,Text,ScrollView,TouchableOpacity, Picker} from "react-native";
import styles from "./styles";


class DeliveryTextInputs extends Component{
    state={
      customerDetails:{
        "id": 0,
        "date_created": "",
        "date_created_gmt": "",
        "date_modified": "",
        "date_modified_gmt": "",
        "email": "",
        "first_name": "",
        "last_name": "",
        "role": "",
        "username": "",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        }
        
    },
        first_name:null,
        last_name:null,
        company: "",
        address_1:null,
        address_2: null,
        city:null,
        postcode: null,
        country:"Sri Lanka",
        State: "Central",
        email: null,
        phone: "",
      }

      componentDidMount(){
        this.getItemPlaceholders();
      }
 
      getItemPlaceholders(){
      
        fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/73?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
              //'Authorization': ('Bearer '+token)
          }
          
          })
        .then((response) => response.json())
        .then((json) => {
           
           this.setState({customerDetails:json});
           console.log(this.state.customerDetails);
           this.setState({first_name:json.first_name});
           this.setState({last_name:json.last_name});
           this.setState({company:json.billing.company});
           this.setState({address_1:json.billing.address_1});
           this.setState({address_2:json.billing.address_2});
           this.setState({city:json.billing.city});
           this.setState({postcode:json.billing.postcode});
           this.setState({email:json.billing.email});
           this.setState({phone:json.billing.phone});
           this.setState({State:json.billing.state});

        });
      }
     
    handleDeliveryInput(){
        if((this.state.first_name!==null)&&(this.state.last_name!==null)&&(this.state.address_1!==null)&&(this.state.city!==null)
          &&(this.state.postcode!==null)&&(this.state.State!==null)&&(this.state.email!==null || this.state.phone!==null)){
              fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/73?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
              {
                method:'PUT',
                headers : { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                  first_name:this.state.first_name,
                  last_name:this.state.last_name,
                  billing:{
                    first_name:this.state.first_name,
                    last_name:this.state.last_name,
                    company:this.state.company,
                    address_1:this.state.address_1,
                    address_2:this.state.address_2,
                    city:this.state.city,
                    postcode:this.state.postcode,
                    country:"Sri Lanka",
                    state:this.state.State,
                    email:this.state.email,
                    phone:this.state.phone,
                  },
                  shipping: {
                    first_name:this.state.first_name,
                    last_name:this.state.last_name,
                    company:this.state.company,
                    address_1:this.state.address_1,
                    address_2:this.state.address_2,
                    city:this.state.city,
                    postcode:this.state.postcode,
                    country:"Sri Lanka",
                    state:this.state.state,
                },

                  }),
              }).then((response) => response.json())
                 .then((responseJson) => {
                     console.log(responseJson);
                     
                     try {
                        if (responseJson.role=="customer"){
                          this.props.navigation.navigate('Payment',{'state':this.state});
                        }else{
                          alert('Please check inputs');
                        }
                     }catch{
                        alert('error');
                     }
                 })
                 .catch((error) => {
                   console.error(error);
                   alert(error);
                 });
        }else{
          alert("something is missing");
        }
      }

      show=(value)=>{
        this.setState({pickerSelectedValue:value});
        this.setState({State:value});
      }


    render(){
      return (
        <View>
            <ScrollView style={{flexDirection:'column',marginBottom:135}}>
            <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>First Name</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.first_name}
                        maxLength={30}
                        onChangeText={text => this.setState({first_name:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Last Name</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.last_name}
                        maxLength={30}
                        onChangeText={text => this.setState({last_name:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Company</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.company}
                        maxLength={30}
                        onChangeText={text => this.setState({company:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Address Line 1</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.address_1}
                        maxLength={50}
                        onChangeText={text => this.setState({address_1:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Address Line 2</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.address_2}
                        maxLength={50}
                        onChangeText={text => this.setState({address_2:text})}/>
                </View>

                {/* <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Select Country</Text>
                    <TextInput  style={styles.TextInputs}
                        maxLength={30}
                        onChangeText={text => this.setState({country:text})}/>
                </View> */}

                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Town/City</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.city}
                        maxLength={30}
                        onChangeText={text => this.setState({city:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>State</Text>
                    <View style={{flex:1.7,borderWidth:1,paddingHorizontal:13,marginRight:10,
                                    borderRadius:5,
                                    borderWidth:2,
                                    borderColor:'rgba(220,220,220,0.8)',
                                    fontSize: 16
                                    }}>
                        <Picker
                          selectedValue = {this.state.pickerSelectedValue}
                          onValueChange={this.show}
                        >
                          <Picker.Item label="Central" value="Central"></Picker.Item>
                          <Picker.Item label="South" value="South"></Picker.Item>
                          <Picker.Item label="Western" value="Western"></Picker.Item>
                          <Picker.Item label="North" value="North"></Picker.Item>
                        </Picker>
                    </View>
                    {/* <TextInput  style={styles.TextInputs}
                        maxLength={30}
                        onChangeText={text => this.setState({State:text})}/> */}
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Postcode</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.postcode}
                        maxLength={30}
                        onChangeText={text => this.setState({postcode:text})}/>                
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Email</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.email}
                        maxLength={30}
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Phone Number</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.customerDetails.billing.phone}
                        keyboardType={"number-pad"}
                        maxLength={15}
                        onChangeText={text => this.setState({phone:text})}/>
                </View>
            </ScrollView>
            <View style={styles.ButtonsScreen}>
                <TouchableOpacity style={styles.buttonBack} activeOpacity={0.5}
                                onPress={() => this.props.navigation.navigate('Mycart')}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonNext} activeOpacity={0.5}
                                  //onPress={() =>this.props.navigation.navigate('Payment')}
                                  onPress={() =>{this.handleDeliveryInput()}}>
                    <Text style={{color:'#fff',fontSize:20,textAlign:'center'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
    }
}
    
  export default DeliveryTextInputs;