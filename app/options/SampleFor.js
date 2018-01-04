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
  }
}

export default SampleForPicker;