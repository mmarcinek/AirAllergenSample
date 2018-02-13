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
      location = this.state.formData.location;    
      sample_type = this.state.formData.sample_type;
      sample_for = this.state.formData.sample_for;
      analysis_req = this.state.formData.analysis_req;       
      volume = Number(this.state.formData.volume) || 0;
      measure = this.state.formData.measure;
      RH = Number(this.state.formData.RH) || 0;
      temp = Number(this.state.formData.temp) || 0;
      notes = this.state.formData.notes || '';
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
    // let samples = Array.from(realm.objects('Sample'));
    // this.sample = samples.filtered('sample_id = ' + this.props.navigation.state.params.sample_id)
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
                ' ' : 'Location',
                'Attic': "Attic",
                'Basement': "Basement",
                'Basement (Theater Rm)': "Basement (Theater Rm)",
                'Basement  HVAC Rm': "Basement  HVAC Rm",
                'Basement (exercise room)': "Basement (exercise room)",
                'Basement (finished)': "Basement (finished)",
                'Basement (main rm)': "Basement (main rm)",
                'Basement (Playroom)': "Basement (Playroom)",
                'Basement (unfinished)': "Basement (unfinished)",
                'Basement/Crawlspace': "Basement/Crawlspace",
                'Basement Bathroom': "Basement Bathroom",
                'Basement Bedroom': "Basement Bedroom",
                'Basement Office': "Basement Office",
                'Basement Stairwell (top)': "Basement Stairwell (top)",
                'Bathroom': "Bathroom",
                'Bathroom (hallway)': "Bathroom (hallway)",
                'Bathroom (small, main level)': "Bathroom (small, main level)",
                'Bathroom (upper level)': "Bathroom (upper level)",
                'Bedroom': "Bedroom",
                'Bedroom  (pink)': "Bedroom  (pink)",
                'Bedroom (basement)': "Bedroom (basement)",
                'Bedroom (front up)': "Bedroom (front up)",
                'Bedroom (rear up)': "Bedroom (rear up)",
                'Bedroom (upper level)': "Bedroom (upper level)",
                'Bonus Room': "Bonus Room",
                'Bonus Room (lower level)': "Bonus Room (lower level)",
                'Boys Rm': "Boys Rm",
                'Break Rm.': "Break Rm.",
                'Breakfast area': "Breakfast area",
                'Classroom': "Classroom",
                'Common area': "Common area",
                'Conference Rm': "Conference Rm",
                'Conference Rm (upstairs)': "Conference Rm (upstairs)",
                'Copy Room': "Copy Room",
                'Crawlspace': "Crawlspace",
                'Customer Service': "Customer Service",
                'Den': "Den",
                'Dining / Living Rm': "Dining / Living Rm",
                'Dining Room': "Dining Room",
                'Dining Room (large)': "Dining Room (large)",
                'Dining Room (small)': "Dining Room (small)",
                'Downstairs': "Downstairs",
                'Entry': "Entry",
                'Exterior': "Exterior",
                'Family Room': "Family Room",
                'Finished Attic': "Finished Attic",
                'Finished Basement': "Finished Basement",
                'Foyer': "Foyer",
                'Front Office': "Front Office",
                'Front Room': "Front Room",
                'Garage': "Garage",
                'Guest Bedroom': "Guest Bedroom",
                'Guest House': "Guest House",
                'Hallway': "Hallway",
                'Hallway (upstairs)': "Hallway (upstairs)",
                'Hallway Upstairs': "Hallway Upstairs",
                'HVAC Rm': "HVAC Rm",
                'Inside': "Inside",
                'Kitchen': "Kitchen",
                'Kitchen (wall sample)': "Kitchen (wall sample)",
                'Kitchen / Den': "Kitchen / Den",
                'Kitchen /Dining Room': "Kitchen /Dining Room",
                'Ladies Room': "Ladies Room",
                'Landing (upstairs)': "Landing (upstairs)",
                'Large Office': "Large Office",
                'Laundry  (interior wall)': "Laundry  (interior wall)",
                'Laundry Rm': "Laundry Rm",
                'Library (office)': "Library (office)",
                'Living / Dining': "Living / Dining",
                'Living area (downstairs)': "Living area (downstairs)",
                'Living Room': "Living Room",
                'Living Room / Kitchen': "Living Room / Kitchen",
                'Lobby': "Lobby",
                'Main Rm': "Main Rm",
                'Master Bathroom': "Master Bathroom",
                'Master Bedroom': "Master Bedroom",
                'Office': "Office",
                'Outside': "Outside",
                'Reception area': "Reception area",
                'Shipping': "Shipping" 
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
                  ' ': 'Sample Type',
                  'Micro 5': 'Micro 5',
                  'Zefon Air-O-Cell': 'Zefon Air-O-Cell',
                  'Allergenco D Posi-Track': 'Allergenco D Posi-Track',
                  'Swab': 'Swab',
                  'Tape': 'Tape',
                  'Bulk': 'Bulk',
                  'Dust': 'Dust',
                  'Liquid': 'Liquid',
                  'Anderson Air': 'Anderson Air',
                  'Canister': 'Canister',
                  'Sorbent Tube': 'Sorbent Tube',
                  'Cyclone': 'Cyclone',
                  'Other': 'Other',
                  'Allergenco D': 'Allergenco D',
                  'Culture Plate': 'Culture Plate',
                  'Zefon Z5': 'Zefon Z5',
                  'Micro 5 Positrak': 'Micro 5 Positrak',
                  'Mold Snap': 'Mold Snap',
                  'Test Not Submitted': 'Test Not Submitted',
                  'Zefon Via-Cell': 'Zefon Via-Cell',
                  'Contact Plate': 'Contact Plate',
                  'Soil': 'Soil'
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
                ' ': 'Sample For',
                'Mold': 'Mold',
                'Bacteria': 'Bacteria',
                'Coliforms': 'Coliforms',
                'Allergens': 'Allergens',
                'Asbestos': 'Asbestos',
                'Particulate': 'Particulate',
                "VOC's": "VOC's",
                'Other': 'Other',
                'E. coli': 'E. coli',
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
                  ' ': 'Analysis Req',
                  'Spore Trap 1': 'Spore Trap 1',
                  'Direct 2': 'Direct 2',
                  'Culture	3': 'Culture	3',
                  'Sewage Screen 4': 'Sewage Screen 4',
                  'Colilert 5': 'Colilert 5',
                  'Dust Mite 5': 'Dust Mite 5',
                  'PLM	5': 'PLM	5',
                  'Point Count	5': 'Point Count	5',
                  'TEM	5': 'TEM	5',
                  'TO-15	5': 'TO-15	5',	
                  'Respirable	5': 'Respirable	5',
                  'Other 5': 'Other 5'
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
                  ' ' : 'Measure',
                  'L': 'L',
                  'in2': 'in2',
                  'ft2': 'ft2',
                  'cm2': 'cm2',
                  'm2': 'm2',
                  'm3': 'm3',
                  'g': 'g',
                  'mL': 'mL',
                  'swab': 'swab',
                  'plate': 'plate'
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
export default SampleEdit;

