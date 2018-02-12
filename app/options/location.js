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
      ' ' : 'Pick Location',
      'Attic': "Attic",
      'Basement': "Basement",
      'Basement (Theater Rm)': "Basement (Theater Rm)",
      'Basement  HVAC Rm': "Basement  HVAC Rm",
      'Basement (exercise room)': "Basement (exercise room)",
      'Basement (finished)': "Basement (finished)",
      'Basement (main rm)': "Basement (main rm)",
      'Basement (Playroom)': "Basement (Playroom)",
      'Basement (unfinished)': "Basement (unfinished)",
      'Basement/Crawlspace': "Basement/Crawlspace",
      'Basement Bathroom': "Basement Bathroom",
      'Basement Bedroom': "Basement Bedroom",
      'Basement Office': "Basement Office",
      'Basement Stairwell (top)': "Basement Stairwell (top)",
      'Bathroom': "Bathroom",
      'Bathroom (hallway)': "Bathroom (hallway)",
      'Bathroom (small, main level)': "Bathroom (small, main level)",
      'Bathroom (upper level)': "Bathroom (upper level)",
      'Bedroom': "Bedroom",
      'Bedroom  (pink)': "Bedroom  (pink)",
      'Bedroom (basement)': "Bedroom (basement)",
      'Bedroom (front up)': "Bedroom (front up)",
      'Bedroom (rear up)': "Bedroom (rear up)",
      'Bedroom (upper level)': "Bedroom (upper level)",
      'Bonus Room': "Bonus Room",
      'Bonus Room (lower level)': "Bonus Room (lower level)",
      'Boys Rm': "Boys Rm",
      'Break Rm.': "Break Rm.",
      'Breakfast area': "Breakfast area",
      'Classroom': "Classroom",
      'Common area': "Common area",
      'Conference Rm': "Conference Rm",
      'Conference Rm (upstairs)': "Conference Rm (upstairs)",
      'Copy Room': "Copy Room",
      'Crawlspace': "Crawlspace",
      'Customer Service': "Customer Service",
      'Den': "Den",
      'Dining / Living Rm': "Dining / Living Rm",
      'Dining Room': "Dining Room",
      'Dining Room (large)': "Dining Room (large)",
      'Dining Room (small)': "Dining Room (small)",
      'Downstairs': "Downstairs",
      'Entry': "Entry",
      'Exterior': "Exterior",
      'Family Room': "Family Room",
      'Finished Attic': "Finished Attic",
      'Finished Basement': "Finished Basement",
      'Foyer': "Foyer",
      'Front Office': "Front Office",
      'Front Room': "Front Room",
      'Garage': "Garage",
      'Guest Bedroom': "Guest Bedroom",
      'Guest House': "Guest House",
      'Hallway': "Hallway",
      'Hallway (upstairs)': "Hallway (upstairs)",
      'Hallway Upstairs': "Hallway Upstairs",
      'HVAC Rm': "HVAC Rm",
      'Inside': "Inside",
      'Kitchen': "Kitchen",
      'Kitchen (wall sample)': "Kitchen (wall sample)",
      'Kitchen / Den': "Kitchen / Den",
      'Kitchen /Dining Room': "Kitchen /Dining Room",
      'Ladies Room': "Ladies Room",
      'Landing (upstairs)': "Landing (upstairs)",
      'Large Office': "Large Office",
      'Laundry  (interior wall)': "Laundry  (interior wall)",
      'Laundry Rm': "Laundry Rm",
      'Library (office)': "Library (office)",
      'Living / Dining': "Living / Dining",
      'Living area (downstairs)': "Living area (downstairs)",
      'Living Room': "Living Room",
      'Living Room / Kitchen': "Living Room / Kitchen",
      'Lobby': "Lobby",
      'Main Rm': "Main Rm",
      'Master Bathroom': "Master Bathroom",
      'Master Bedroom': "Master Bedroom",
      'Office': "Office",
      'Outside': "Outside",
      'Reception area': "Reception area",
      'Shipping': "Shipping" 
      }
    }
  />           
  }
}

export default LocationPicker;