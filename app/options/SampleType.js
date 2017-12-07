import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class SampleForPicker extends React.Component {
  constructor(props){
    super(props)
    
    this.state ={
      formData: {}
    }
  }
  
  render(){
    return <PickerField 
    ref='sample_for'
    value={this.state.formData.state}
    style={{
      width: 50 + '%', 
      alignItems:'center'
    }}              
    label='Location'
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
  }
}

export default SampleForPicker;