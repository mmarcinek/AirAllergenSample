import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class AnalysisPicker extends React.Component {
  constructor(props){
    super(props)
    
    this.state ={
      formData: {}
    }
  }
  
  render(){
    return <PickerField 
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
  }
}

export default AnalysisPicker;