import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class SampleTypePicker extends React.Component {
  constructor(props){
    super(props)
    
    this.state ={
      formData: {}
    }
  }
  
  render(){
    return <PickerField 
    ref='sample_type'
    value={this.state.formData.state}
    style={{
      width: 50 + '%', 
      alignItems:'center'
    }}              
    label='Sample Type'
    options = {{
        ' ': 'Pick Sample Type',
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
  }
}

export default SampleTypePicker;