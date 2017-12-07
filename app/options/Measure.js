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
    label='Location'
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
  }
}

export default MeasurePicker;