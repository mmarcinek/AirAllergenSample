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
  TimePickerField,
  PickerField
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

class SampleForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      formData: {
        sample_id: this.props.navigation.state.params.sample_id || '',
        location: this.props.navigation.state.params.location || '',
        test_type: this.props.navigation.state.params.test_type || '',
        volume: String(this.props.navigation.state.params.volume) || '',
        area: String(this.props.navigation.state.params.area) || '',
        TAT: String(this.props.navigation.state.params.TAT) || '',
        RH: String(this.props.navigation.state.params.RH) || '',
        temp: String(this.props.navigation.state.params.temp) || '',
        notes: this.props.navigation.state.params.notes || ''
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
      realm.create('Sample', {
        table_id: this.props.navigation.state.params.job_id,
        sample_id: this.state.formData.sample_id,
        location: this.state.formData.location || '',
        test_type: this.state.formData.test_type || '',
        volume: Number(this.state.formData.volume) || 0,
        area: Number(this.state.formData.area) || 0,
        TAT: Number(this.state.formData.TAT) || 0,
        RH: Number(this.state.formData.RH) || 0.0,
        temp: Number(this.state.formData.temp) || 0.0,
        notes: this.state.formData.notes || ''
      })
    });

    this.advanceOnSave('advancing');
  }

  resetForm(){
    this.refs.sampleForm.refs.sample_id.setValue("");
    this.refs.sampleForm.refs.location.setValue("");
    this.refs.sampleForm.refs.test_type.setValue("");
    this.refs.sampleForm.refs.volume.setValue("");
    this.refs.sampleForm.refs.area.setValue("");  
    this.refs.sampleForm.refs.TAT.setValue("");
    this.refs.sampleForm.refs.RH.setValue("");    
    this.refs.sampleForm.refs.temp.setValue("");
    this.refs.sampleForm.refs.notes.setValue("");
  }

  render(){
    return (
      <ScrollView keyboardShouldPersistTaps={'always'} style={{backgroundColor: '#fff', height:200}}>
        <Form
          ref='sampleForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Sample Information">
            <InputField
              ref='sample_id'
              value={this.state.formData.sample_id}
              placeholder='Sample Id'
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
                if(value == '') return "A sample id is required";
                return true;
              }]}
            />
            <InputField
            ref='location'
            value={this.state.formData.location}
            placeholder='Location'
            />
            <InputField
              ref='test_type'
              value={this.state.formData.test_type}
              placeholder='Test Type'
            />
            <View style={{flexDirection:'row', width: 100 + '%', padding: 10}}>
              <InputField
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}              
                ref='volume'
                value={this.state.formData.volume}
                placeholder='Volume'
              />
              <PickerField ref='volume_unit'
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}              
                label='Unit of Measure'
                value='minute'
                options={{
                  "": '',
                  minute: 'liters per minute',
                  hours: 'liters per hour'
                }}
              />
            </View>
            <View style={{flexDirection:'row', width: 100 + '%', padding: 10}}>
              <InputField
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}              
                ref='area'
                value={this.state.formData.area}
                placeholder='Area'
              />
              <PickerField ref='area_unit'
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}              
                label='Unit of Measure'
                value='feet'
                options={{
                  "": '',
                  feet: 'Square Feet',
                  meters: 'Square Meters'
                }}
              />
            </View>
            <View style={{flexDirection:'row', width: 100 + '%', padding: 10}}>
              <InputField
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}
                ref='TAT'
                value={this.state.formData.TAT}
                placeholder='TAT'
              />
              <PickerField ref='time_unit'
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}
                label='Unit of Measure'
                value='minutes'
                options={{
                  "": '',
                  minutes: 'Minutes',
                  hours: 'Hours'
                }}
              />
            </View>
            <InputField
              ref='RH'
              value={this.state.formData.RH}
              placeholder='RH'
            />
            <View style={{flexDirection:'row', width: 100 + '%', padding: 10}}>
              <InputField
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}
                ref='temp'
                value={this.state.formData.temp}
                placeholder='temp'
              />
              <PickerField ref='temp_unit'
                style={{
                  width: 50 + '%', 
                  alignItems:'center'
                }}
                label='Unit of Measure'
                value='Celcius'
                options={{
                  "": '',
                  celcius: 'Celcius',
                  farenheit: 'Farenheit'
                }}
              />
            </View>
            <InputField
              multiline={true}
              ref='notes'
              value={this.state.formData.notes}
              placeholder='Notes'
            />
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
export default SampleForm;