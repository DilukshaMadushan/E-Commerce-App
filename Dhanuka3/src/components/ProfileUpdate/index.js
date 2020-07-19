import React, { Component } from "react";
import { View, TextInput,Text} from "react-native";
import styles from "./styles";


class DeliveryTextInputs extends Component{
    state={
        Placeholders:this.props.Placeholders,

        first_name:null,
        last_name:null,
        company: null,
        address_1:null,
        address_2: null,
        city:null,
        postcode: null,
        country:null,
        State: null,
        email: null,
        phone: null,
      }
 
     
    handleDeliveryInput(){
        if((this.state.first_name!==null)&&(this.state.last_name!==null)&&(this.state.address_1!==null)&&(this.state.city!==null)
          &&(this.state.postcode!==null)&&(this.state.country!==null)&&(this.state.State!==null)&&(this.state.email!==null)&&(this.state.phone!==null)){
              fetch('https://www.waytoogo.com/wp-json/wc/v3/customers/73?consumer_key=ck_62bbbe337d050335cacf5b4ae4ea791c5862125d&consumer_secret=cs_67f41238f54e68ffbd473a3ca6c64c455e735ecd',
              {
                method:'POST',
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
                    country:this.state.country,
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
                    country:this.state.country,
                    state:this.state.state,
                },

                  }),
              }).then((response) => response.json())
                 .then((responseJson) => {
                     console.log(responseJson);
                     {this.props.navigation.navigate('Payment',{'state':this.state});}
                 })
                 .catch((error) => {
                   console.error(error);
                   alert(error);
                 });
        }else{
          alert("something is missing");
        }
      }


    render(){
      return (
        <View>
            <View style={{flexDirection:'column',marginBottom:10}}>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>First Name</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.first_name}
                        maxLength={30}
                        onChangeText={text => this.setState({first_name:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Last Name</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.last_name}
                        maxLength={30}
                        onChangeText={text => this.setState({last_name:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Company</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.last_name}
                        maxLength={30}
                        onChangeText={text => this.setState({company:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Address Line 1</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders}
                        maxLength={50}
                        onChangeText={text => this.setState({address_1:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Address Line 2</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.address_2}
                        maxLength={50}
                        onChangeText={text => this.setState({address_2:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Select Country</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.country}
                        maxLength={30}
                        onChangeText={text => this.setState({country:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Town/City</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.city}
                        maxLength={30}
                        onChangeText={text => this.setState({city:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>State</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.state}
                        maxLength={30}
                        onChangeText={text => this.setState({State:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Postcode</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.postcode}
                        maxLength={30}
                        onChangeText={text => this.setState({postcode:text})}/>                
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Email</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.email}
                        maxLength={30}
                        onChangeText={text => this.setState({email:text})}/>
                </View>
                <View style={styles.Itemrows}>
                    <Text style={styles.TextInputsName}>Phone Number</Text>
                    <TextInput  style={styles.TextInputs}
                        placeholder={this.state.Placeholders.billing.phone}
                        keyboardType={"number-pad"}
                        maxLength={15}
                        onChangeText={text => this.setState({phone:text})}/>
                </View>
            </View>
        </View>
      );
    }
}
    
  export default DeliveryTextInputs;