import React, { Component } from 'react';
import { 
  Form,
  Separator,
  InputField, 
  DatePickerField,
  TimePickerField,
  PickerField
} from 'react-native-form-generator';

class LocationPicker extends React.Component {
  constructor(props){
    super(props)

  }
  
  render(){
    return <PickerField ref='location'
    style={{
      width: 50 + '%', 
      alignItems:'center'
    }}              
    label='Location'
    value=" "
    options = {{
      0: " ",
      1: "Attic",
      2: "Basement",
      3: "Basement (Theater Rm)",
      4: "Basement  HVAC Rm",
      5: "Basement (exercise room)",
      6: "Basement (finished)",
      7: "Basement (main rm)",
      8: "Basement (Playroom)",
      9: "Basement (unfinished)",
      10: "Basement/Crawlspace",
      11: "Basement Bathroom",
      12: "Basement Bedroom",
      13: "Basement Office",
      14: "Basement Stairwell (top)",
      15: "Bathroom",
      16: "Bathroom (hallway)",
      17: "Bathroom (small, main level)",
      18: "Bathroom (upper level)",
      19: "Bedroom",
      20: "Bedroom  (pink)",
      21: "Bedroom (basement)",
      22: "Bedroom (front up)",
      23: "Bedroom (rear up)",
      24: "Bedroom (upper level)",
      25: "Bonus Room",
      26: "Bonus Room (lower level)",
      27: "Boys Rm",
      28: "Break Rm.",
      29: "Breakfast area",
      30: "Classroom",
      31: "Common area",
      32: "Conference Rm",
      33: "Conference Rm (upstairs)",
      34: "Copy Room",
      35: "Crawlspace",
      36: "Customer Service",
      37: "Den",
      38: "Dining / Living Rm",
      39: "Dining Room",
      40: "Dining Room (large)",
      41: "Dining Room (small)",
      42: "Downstairs",
      43: "Entry",
      44: "Exterior",
      45: "Family Room",
      46: "Finished Attic",
      47: "Finished Basement",
      48: "Foyer",
      49: "Front Office",
      50: "Front Room",
      51: "Garage",
      52: "Guest Bedroom",
      53: "Guest House",
      54: "Hallway",
      55: "Hallway (upstairs)",
      56: "Hallway Upstairs",
      57: "HVAC Rm",
      58: "Inside",
      59: "Kitchen",
      60: "Kitchen (wall sample)",
      61: "Kitchen / Den",
      62: "Kitchen /Dining Room",
      63: "Ladies Room",
      64: "Landing (upstairs)",
      65: "Large Office",
      66: "Laundry  (interior wall)",
      67: "Laundry Rm",
      68: "Library (office)",
      69: "Living / Dining",
      70: "Living area (downstairs)",
      71: "Living Room",
      72: "Living Room / Kitchen",
      73: "Lobby",
      74: "Main Rm",
      75: "Master Bathroom",
      76: "Master Bedroom",
      77: "Office",
      78: "Outside",
      79: "Reception area",
      80: "Shipping" 
      }
    }
  />      
  }
}

export default LocationPicker;