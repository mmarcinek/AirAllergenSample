import React from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
import Icon from 'react-native-vector-icons/Ionicons';

const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight, 
  Modal
} = ReactNative;

import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField
} from 'react-native-form-generator';

import StatePicker from '../options/States';

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
          }}>
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
            }}>
            <Text style={{fontSize:19,padding:15,}}>Close</Text>
            </View>
          </TouchableHighlight>
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

class JobForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      formData: {
        job_id: this.props.navigation.state.params.job_id || '',
        client: this.props.navigation.state.params.client || '',
        address_1: this.props.navigation.state.params.address_1 || '',
        address_2: this.props.navigation.state.params.address_2 || '',
        city: this.props.navigation.state.params.city || '',
        state: this.props.navigation.state.params.state || '',
        zipcode: String(this.props.navigation.state.params.zipcode) || '',
        date: this.props.navigation.state.params.date || new Date()
      }
    }
  }

  handleFormChange(formData){  
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }

  handleFormFocus(e, component){
    //console.log(e, component);
  }

  advanceOnSave(params){
    this.props.navigation.navigate('JobList', params)
  }

  saveJob() {
    realm.write(() => {
      realm.create('Job', {
        job_id: this.state.formData.job_id, 
        uploaded: false, 
        client: this.state.formData.client || '', 
        address_1: this.state.formData.address_1 || '',
        address_2: this.state.formData.address_2 || '',
        city: this.state.formData.city || '',
        state: this.state.formData.state || '',
        zipcode: Number(this.state.formData.zipcode) || 11111,
        date: this.state.formData.date || new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });

    this.advanceOnSave('advancing');
  }

  resetForm(){
    this.refs.jobForm.refs.job_id.setValue("");
    this.refs.jobForm.refs.client.setValue("");
    this.refs.jobForm.refs.address_1.setValue("");
    this.refs.jobForm.refs.address_2.setValue("");
    this.refs.jobForm.refs.city.setValue("");  
    this.refs.jobForm.refs.state.setValue("");
    this.refs.jobForm.refs.zipcode.setValue("");    
    this.refs.jobForm.refs.date.setDate(new Date());
  }

  render(){
    return (
      <ScrollView keyboardShouldPersistTaps={'always'} style={{backgroundColor: '#fff', height:200}}>
        <Form
          ref='jobForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Job Information">
          <Separator />
            <InputField
              ref='job_id'
              value={this.state.formData.job_id}
              placeholder='Job Id'
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
                if(value == '') return "A job id is required";
                return true;
              }]}
            />
            <InputField
            ref='client'
            value={this.state.formData.client}
            placeholder='Client'
            />
          <Separator />  
            <Text>Address</Text>
            <InputField
              ref='address_1'
              value={this.state.formData.address_1}
              placeholder='Address 1'
              />
            <InputField
              ref='address_2'
              value={this.state.formData.address_2}
              placeholder='Address 2'
            />
            <InputField
              ref='city'
              value={this.state.formData.city}
              placeholder='City'
            />
            <StatePicker 
            />
            <InputField
              ref='zipcode'
              value={this.state.formData.zipcode}
              placeholder='Zipcode'
            />
          <Separator />
            <DatePickerField 
              ref={this.state.formData.date}
              minimumDate={new Date('1/1/2000')}
              maximumDate={new Date()}
              iconRight={[<Icon style={{alignSelf:'center', marginLeft:10}} name='ios-arrow-forward' size={30} />,
                          <Icon style={{alignSelf:'center', marginLeft:10}} name='ios-arrow-down' size={30} />
                        ]}
              placeholder='Day'/>
        </Form>
        <View style={{ flexDirection:'row', marginTop: 70}}>
          <TouchableHighlight 
            style={{
              backgroundColor:'#f45942',
              width: 50 + '%', 
              alignItems:'center'
            }}
            onPress={this.saveJob.bind(this)}
            underlayColor='#78ac05'
          >
            <Text style={{fontSize:19,padding:15,}}>Save Job</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ 
              backgroundColor: '#dedede',
              width: 50 + '%', 
              alignItems:'center'
            }}
            onPress={this.resetForm.bind(this)}
            underlayColor='#78ac05'>
            <View style={[{
              flex:1, alignItems:'center'
            }]}>
              <Text style={{fontSize:19,padding:15,}}>Clear</Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>);
    }
  }
export default JobForm;