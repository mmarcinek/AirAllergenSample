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
        1: 'Spore Trap 1',
        2: 'Direct 2',	
        3: 'Culture	3',
        4: 'Sewage Screen 4',
        5: 'Colilert 5',	
        6: 'Dust Mite	5',	
        7: 'PLM	5',
        8: 'Point Count	5',
        9: 'TEM	5',
        10: 'TO-15 5',
        11: 'Respirable	5',
        12: 'Other 5'
      }
    }
  />      
  }
}

export default SampleForPicker;