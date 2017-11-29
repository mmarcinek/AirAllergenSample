import React, { Component } from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
import { Icon } from 'react-native-material-design';
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
          <View 
            key={job.job_id} 
            style={{
              flexDirection: 'row', 
              paddingTop: 20, 
              paddingLeft:20, 
              borderBottomColor: '#d3d3d3', 
              borderBottomWidth: 1, 
            }}>
            <TouchableHighlight 
              onPress={() => { this.jobSelect(job) }} >
              <View style={{flexDirection: 'row' } }>
                <Text style={{width: 150, height: 40}}>{job.job_id}</Text>
                <Text style={{width: 150, height: 40}}>{job.client}</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                width: 75, 
                height: 40,
                paddingLeft: 10,
                borderLeftColor:'#d3d3d3',
                borderLeftWidth: 1 
              }} 
              onPress={() => {this.uploadJob(job)}}              
            >
              <View style={{marginTop: -5 }}>
                <Icon name="cloud-upload" />
              </View>
            </TouchableHighlight>
          </View>
        )
      })
    }
  }

  uploadJob(job){
    alert('Uploading job_id: ' + job.job_id);
  }
  
  componentDidMount() {
    // Nothing here for now
  }

  jobSelect(job){
    this.props.navigation.navigate('JobOptions', job)
  }

  render(){ 
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{flexDirection: 'row', paddingLeft: 20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <Text style={{width: 150, height: 40}}>Job ID</Text>
          <Text style={{width: 150, height: 40}}>Client</Text>
          <Text style={{width: 75, height: 40}}></Text>          
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