import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class MeasurePicker extends React.Component {
  constructor(props){
    super(props)
    
    this.state ={
      formData: {}
    }
  }
  
  render(){
    return <PickerField 
    ref='measure'
    value={this.state.formData.state}
    style={{
      width: 50 + '%', 
      alignItems:'center'
    }}              
    label='Measure'
    options = {{
        ' ' : 'Pick Measurement',
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
  }
}

export default MeasurePicker;