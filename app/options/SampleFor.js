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
  }
}

export default SampleForPicker;