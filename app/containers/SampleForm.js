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

import LocationPicker from '../options/Location';
import SampleTypePicker from '../options/SampleType'
import SampleForPicker from '../options/SampleFor';
import MeasurePicker from '../options/Measure';
import AnalysisPicker from '../options/AnalysisReq';

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
        location: this.props.navigation.state.params.location || '',
        sample_id: this.props.navigation.state.params.sample_id || '',
        sample_type: this.props.navigation.state.params.sample_type || '',
        sample_for: this.props.navigation.state.params.sample_for || '',
        analysis_req: this.props.navigation.state.params.analysis_req || '',    
        volume: this.props.navigation.state.params.volume || '',
        measure: this.props.navigation.state.measure || '',
        RH: this.props.navigation.state.params.RH || '',
        temp: this.props.navigation.state.params.temp || '',
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
        location: this.state.formData.location || '',
        sample_id: this.state.formData.sample_id,        
        sample_type: this.state.formData.sample_type || '',
        sample_for: this.state.formData.sample_for || '',
        analysis_req: this.state.formData.analysis_req || '',        
        volume: Number(this.state.formData.volume) || 0,
        measure: this.state.formData.measure || '',
        RH: Number(this.state.formData.RH) || 0.0,
        temp: Number(this.state.formData.temp) || 0.0,
        notes: this.state.formData.notes || ''
      })
    });

    this.advanceOnSave('advancing');
  }

  resetForm(){
    this.refs.sampleForm.refs.location.setValue("");
    this.refs.sampleForm.refs.sample_id.setValue("");    
    this.refs.sampleForm.refs.sample_type.setValue("");
    this.refs.sampleForm.refs.sample_for.setValue("");
    this.refs.sampleForm.refs.analysis_req.setValue("");
    this.refs.sampleForm.refs.volume.setValue("");
    this.refs.sampleForm.refs.measure.setValue("");
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
            <LocationPicker ref='location'/>          
            <InputField
              ref='sample_id'
              value={this.state.formData.sample_id}
              placeholder='Sample Id'
              helpText={((self)=>{
                if(Object.keys(self.refs).length !== 0){
                  if(!self.refs.sampleForm.refs.sample_id.valid){
                    return self.refs.sampleForm.refs.sample_id.validationErrors.join("\n");
                  }
                }
              })(this)}
              validationFunction={[(value)=>{
                if(value == '') return "A sample id is required";
                return true;
              }]}
            />
            <SampleTypePicker />
            <SampleForPicker />      
            <AnalysisPicker />             
            <InputField
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              ref='volume'
              value={this.state.formData.volume}
              placeholder='Volume'
            />  
            <MeasurePicker />
            <InputField
              ref='RH'
              value={this.state.formData.RH}
              placeholder='RH'
            />        
            <InputField
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}
              ref='temp'
              value={this.state.formData.temp}
              placeholder='temp'
            />
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