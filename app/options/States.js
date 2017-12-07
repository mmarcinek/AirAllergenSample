import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class StatePicker extends React.Component {
  constructor(props){
    super(props)
    
    this.state ={
      formData: {}
    }
  }
  
  render(){
    return <PickerField 
    ref='state'
    value={this.state.formData.state}
    style={{
      width: 50 + '%', 
      alignItems:'center'
    }}              
    label='Location'
    options = {{
      AL: 'AL',
      AK: 'AK',
      AZ: 'AZ',
      AR: 'AR',
      CA: 'CA',
      CO: 'CO',
      CT: 'CT',
      DE: 'DE',
      FL: 'FL',
      GA: 'GA',
      HI: 'HI',
      ID: 'ID',
      IL: 'IL',
      IN: 'IN',
      IA: 'IA',
      KS: 'KS',
      KY: 'KY',
      LA: 'LA',
      ME: 'ME',
      MD: 'MD',
      MA: 'MA',
      MI: 'MI',
      MN: 'MN',
      MS: 'MS',
      MO: 'MO',
      MT: 'MT',
      NE: 'NE',
      NV: 'NV',
      NH: 'NH',
      NJ: 'NJ',
      NM: 'NM',
      NY: 'NY',
      NC: 'NC',
      ND: 'ND',
      OH: 'OH',
      OK: 'OK',
      OR: 'OR',
      PA: 'PA',
      RI: 'RI',
      SC: 'SC',
      SD: 'SD',
      TN: 'TN',
      TX: 'TX',
      UT: 'UT',
      VT: 'VT',
      VA: 'VA',
      WA: 'WA',
      WV: 'WV',
      WI: 'WI',
      WY: 'WY' 
      }
    }
  />      
  }
}

export default StatePicker;