import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,ScrollView,TouchableHighlight, Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



import { Form,
  Separator,InputField, LinkField,
  SwitchField, PickerField,DatePickerField,TimePickerField
} from 'react-native-form-generator';

class CustomModal extends React.Component{
  handleClose(){
    this.props.onHidePicker && this.props.onHidePicker();
  }
  render(){
    return <Modal transparent={true}>
    <View style={{padding:20, flex:1, justifyContent:'center', backgroundColor:'rgba(43, 48, 62, 0.57)'}}>
    <View
      style={{
        backgroundColor:'white',
        borderRadius: 8,
        flexDirection:'column',

    }}
      >
      <Text style={{
        textAlign: 'center',
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        fontSize:18
      }}>A Custom Wrapper for your picker</Text>
      {this.props.children}

    <TouchableHighlight
      onPress={this.handleClose.bind(this)}
    underlayColor='#78ac05'>
    <View style={{
        flex:1, alignItems:'center'
      }}><Text style={{fontSize:19,padding:15,}}>Close</Text></View></TouchableHighlight>
      </View>
      </View>
    </Modal>
  }
}

class WrappedIcon extends React.Component {
  render() {
    return (
      <Icon {...this.props} />
    );
  }
}

class FormView extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      formData:{}
    }

  }
  handleFormChange(formData){
    formData = {
      job_id: this.state.formData.job_id || '', 
      uploaded: false, 
      company: this.state.formData.company || '', 
      address_1: this.state.formData.address_1 || '',
      address_2: this.state.formData.address_2 || '',
      city: this.state.formData.city || '',
      state: this.state.formData.state || '',
      zipcode: Number(this.state.formData.zipcode) || 11111,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }
  openTermsAndConditionsURL(){

  }
  resetForm(){
    this.refs.jobForm.refs.job_id.setValue("");
    this.refs.jobForm.refs.client.setValue("");
    this.refs.jobForm.refs.address_1.setValue("");
    this.refs.jobForm.refs.address_2.setValue("");
    this.refs.jobForm.refs.city.setValue("");  
    this.refs.jobForm.refs.state.setValue("");
    this.refs.jobForm.refs.zip.setValue("");    
    this.refs.jobForm.refs.date.setDate(new Date());
    this.refs.jobForm.refs.time.setDate(new Date());
  }

  render(){
    return (<ScrollView keyboardShouldPersistTaps={'always'} style={{ height:200}}>
      <Form
        ref='jobForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Job Information">
        <Separator />
        <InputField
          ref='job_id'
          label='Job Id'
          placeholder='JobId'
          helpText={((self)=>{
            if(Object.keys(self.refs).length !== 0){
              if(!self.refs.jobForm.refs.job_id.valid){
                return self.refs.jobForm.refs.job_id.validationErrors.join("\n");
              }

            }
            // if(!!(self.refs && self.refs.first_name.valid)){
            // }
          })(this)}
          validationFunction={[(value)=>{
            /*
            you can have multiple validators in a single function or an array of functions
             */

            if(value == '') return "Required";
            //Initial state is null/undefined
            if(!value) return true;
            var matches = value.match(/\d+/g);
            if (matches != null) {
                return "A job id is required";
            }
            return true;
          }]}
          />
          <InputField
          ref='client'
          label='client'
          placeholder='client'
          />
        <Separator />  
          <Text>Address</Text>
          <InputField
            ref='address_1'
            label='Address 1'
            placeholder='Address 1'
            />
          <InputField
            ref='address_2'
            label='Address 2'
            placeholder='Address 2'
          />
          <InputField
            ref='city'
            label='City'
            placeholder='City'
          />
          <InputField
            ref='state'
            label='State'
            placeholder='State'
          />
          <InputField
            ref='zipcode'
            label='Zipcode'
            placeholder='Zipcode'
          />
        <Separator />
          <DatePickerField ref='day'
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()}
          iconRight={[<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-arrow-forward' size={30} />,
                      <Icon style={{alignSelf:'center', marginLeft:10}} name='ios-arrow-down' size={30} />
                      ]}
          placeholder='Day'/>
        <TimePickerField ref='time'
      placeholder='Time'
      iconLeft={<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-alarm' size={30} />}
      prettyPrint={true}
      pickerWrapper={<CustomModal />}
      />
        <DatePickerField ref='meeting'
          iconLeft={[<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-flame' size={30} />,
                     <Icon style={{alignSelf:'center', marginLeft:10, color:'red'}} name='ios-flame' size={30} />
                  ]}
          minimumDate={new Date('1/1/1900')}
          maximumDate={new Date()} mode="datetime" placeholder='Meeting'/>
        </Form>
        <Text>{JSON.stringify(this.state.formData)}</Text>
      <TouchableHighlight
        onPress={this.resetForm.bind(this)}
      underlayColor='#78ac05'>
      <View style={[{
          flex:1, alignItems:'center'
        }
      ]}><Text style={{fontSize:19,padding:15,}}>Clear</Text></View></TouchableHighlight>
      </ScrollView>);
    }
  }
export default FormView;