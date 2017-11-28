import React, { Component } from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
import { Button } from 'react-native-material-design';
import Orientation from 'react-native-orientation';


const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Modal
} = ReactNative

import { Form,
  Separator, InputField, LinkField,
  SwitchField, PickerField, DatePickerField, TimePickerField
} from 'react-native-form-generator';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.getJobList();
  }

  getJobList(){
    this.jobResults = Array.from(realm.objects('Job').sorted('createdAt'));
    
    if (this.jobResults.length ) {
      this.jobList = this.jobResults.map((job) => {
        return(
          <View onPress={() => this.jobSelect(job)} key={job.job_id} style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
            <TouchableHighlight style={{width: 75, height: 40}} onPress={() => { this.jobSelect(job) }}>
              <Text>Select</Text>
            </TouchableHighlight>
            <Text style={{width: 150, height: 40}}>{job.job_id}</Text>
            <Text style={{width: 150, height: 40}}>{job.client}</Text>
          </View>
        )
      })
    }
  }
  
  componentDidMount() {
    // Orientation.lockToPortrait(); 
    // Orientation.addOrientationListener(this._orientationDidChange);
  }
  jobSelect(job){
    this.props.navigation.navigate('JobTable', job)
  }

  render(){ 
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{flexDirection: 'row', paddingLeft: 20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <Text style={{width: 75, height: 40}}></Text>
          <Text style={{width: 150, height: 40}}>Job ID</Text>
          <Text style={{width: 150, height: 40}}>Company</Text>
        </View> 
        <View>
          {this.jobList}
        </View>
        </ScrollView>
      </View>      
    )
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});

export default JobList;