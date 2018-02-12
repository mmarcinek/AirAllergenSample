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
            <PickerField ref='location'
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              label='Location'
              value=" "
              options = {{
                1: "Attic",
                2: "Basement",
                3: "Basement (Theater Rm)",
                4: "Basement  HVAC Rm",
                5: "Basement (exercise room)",
                6: "Basement (finished)",
                7: "Basement (main rm)",
                8: "Basement (Playroom)",
                9: "Basement (unfinished)",
                10: "Basement/Crawlspace",
                11: "Basement Bathroom",
                12: "Basement Bedroom",
                13: "Basement Office",
                14: "Basement Stairwell (top)",
                15: "Bathroom",
                16: "Bathroom (hallway)",
                17: "Bathroom (small, main level)",
                18: "Bathroom (upper level)",
                19: "Bedroom",
                20: "Bedroom  (pink)",
                21: "Bedroom (basement)",
                22: "Bedroom (front up)",
                23: "Bedroom (rear up)",
                24: "Bedroom (upper level)",
                25: "Bonus Room",
                26: "Bonus Room (lower level)",
                27: "Boys Rm",
                28: "Break Rm.",
                29: "Breakfast area",
                30: "Classroom",
                31: "Common area",
                32: "Conference Rm",
                33: "Conference Rm (upstairs)",
                34: "Copy Room",
                35: "Crawlspace",
                36: "Customer Service",
                37: "Den",
                38: "Dining / Living Rm",
                39: "Dining Room",
                40: "Dining Room (large)",
                41: "Dining Room (small)",
                42: "Downstairs",
                43: "Entry",
                44: "Exterior",
                45: "Family Room",
                46: "Finished Attic",
                47: "Finished Basement",
                48: "Foyer",
                49: "Front Office",
                50: "Front Room",
                51: "Garage",
                52: "Guest Bedroom",
                53: "Guest House",
                54: "Hallway",
                55: "Hallway (upstairs)",
                56: "Hallway Upstairs",
                57: "HVAC Rm",
                58: "Inside",
                59: "Kitchen",
                60: "Kitchen (wall sample)",
                61: "Kitchen / Den",
                62: "Kitchen /Dining Room",
                63: "Ladies Room",
                64: "Landing (upstairs)",
                65: "Large Office",
                66: "Laundry  (interior wall)",
                67: "Laundry Rm",
                68: "Library (office)",
                69: "Living / Dining",
                70: "Living area (downstairs)",
                71: "Living Room",
                72: "Living Room / Kitchen",
                73: "Lobby",
                74: "Main Rm",
                75: "Master Bathroom",
                76: "Master Bedroom",
                77: "Office",
                78: "Outside",
                79: "Reception area",
                80: "Shipping" 
                }
              }
            />               
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
            <PickerField 
              ref='sample_type'
              value={this.state.formData.state}
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              label='Sample Type'
              options = {{
                  8: 'Micro 5',
                  9: 'Zefon Air-O-Cell',
                  10: 'Allergenco D Posi-Track',
                  11: 'Swab',
                  12: 'Tape',
                  13: 'Bulk',
                  14: 'Dust',
                  15: 'Liquid',
                  16: 'Anderson Air',
                  17: 'Canister',
                  18: 'Sorbent Tube',
                  19: 'Cyclone',
                  20: 'Other',
                  21: 'Allergenco D',
                  22: 'Culture Plate',
                  23: 'Zefon Z5',
                  24: 'Micro 5 Positrak',
                  25: 'Mold Snap',
                  26: 'Test Not Submitted',
                  27: 'Zefon Via-Cell',
                  28: 'Contact Plate',
                  29: '',
                  30: 'soil'
                }
              }
            />  
            <PickerField 
              ref='sample_for'
              value={this.state.formData.state}
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              label='Sample For'
              options = {{
                1: 'Mold',
                2: 'Bacteria',
                3: 'Coliforms',
                4: 'Allergens',
                5: 'Asbestos',
                6: 'Particulate',
                7: "VOC's",
                8: 'Other',
                9: 'E. coli',
                }
              }
            />       
            <PickerField 
              ref='analysis_req'
              value={this.state.formData.state}
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              label='Analysis Req'
              options = {{
                  1: 'Spore Trap 1',
                  2: 'Direct 2',
                  3: 'Culture	3',
                  4: 'Sewage Screen 4',
                  5: 'Colilert 5',
                  6: 'Dust Mite 5',
                  7: 'PLM	5',
                  8: 'Point Count	5',
                  9: 'TEM	5',
                  10: 'TO-15	5',	
                  11: 'Respirable	5',
                  12: 'Other 5'
                }
              }
            />                 
            <InputField
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              ref='volume'
              value={this.state.formData.volume}
              placeholder='Volume'
            />  
            <PickerField 
              ref='measure'
              value={this.state.formData.state}
              style={{
                width: 50 + '%', 
                alignItems:'center'
              }}              
              label='Measure'
              options = {{
                  0 : ' ',
                  1: 'L',
                  2: 'in2',
                  3: 'ft2',
                  4: 'cm2',
                  5: 'm2',
                  6: 'm3',
                  7: 'g',
                  8: 'mL',
                  9: 'swab',
                  10: 'plate'
                }
              }
            />      
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