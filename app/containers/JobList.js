import React, { Component } from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
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

    this.jobResults = Array.from(realm.objects('Job').sorted('createdAt'));
    if (this.jobResults.length < 1) {
      realm.write(() => {
        realm.create('Job', {
          job_id: 'ed441234', 
          uploaded: false, 
          company: 'Foo Company', 
          address_1: '456 Buford highway',
          address_2: '',
          city: 'Atlanta',
          state: 'GA',
          zipcode: 30307,
          createdAt: new Date(),
          updatedAt: new Date()
        })
      })
    }
    
    this.jobList = this.jobResults.map((job) => {
      return(
        <View onPress={() => this.jobSelect(job)} key={job.job_id} style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
          <TouchableHighlight style={{width: 75, height: 40}} onPress={() => { this.jobSelect(job) }}>
            <Text>Select</Text>
          </TouchableHighlight>
          <Text style={{width: 150, height: 40}}>{job.job_id}</Text>
          <Text style={{width: 150, height: 40}}>{job.company}</Text>
        </View>
      )
    })

    this.state = {
      modalVisible: false,
      formData: {}
    }
  }
  componentDidMount() {
    Orientation.lockToPortrait();
    
    // Orientation.addOrientationListener(this._orientationDidChange);
  }

  handleFormChange(formData){
    this.setState({formData:formData})
    this.props.onFormChange && this.props.onFormChange(formData);
  }
  handleFormFocus(e, component){
    //console.log(e, component);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  jobSelect(job){
    this.props.navigation.navigate('JobTable', job)
  }

  saveJob(params){
    realm.write(() => {
      realm.create('Job', {
        job_id: this.state.formData.job_id, 
        uploaded: false, 
        company: this.state.formData.company, 
        address_1: this.state.formData.address_1,
        address_2: this.state.formData.address_2 || '',
        city: this.state.formData.city,
        state: this.state.formData.state,
        zipcode: Number(this.state.formData.zipcode),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    });

    this.setState({formData: {}})
    this.setModalVisible(!this.state.modalVisible)
    this.forceUpdate();
    
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
        <Button
            raised
            icon={{name: 'add'}}
            title='Add a Job' 
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }} />
        </ScrollView>
        <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
        >
        <View style={{marginTop: 22}}>
        <Form
          ref='jobForm'
          onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Job Information">
          <InputField 
              ref='job_id' 
              label='Job Id' 
              placeholder='Job ID'/>
          
          <InputField 
              ref='company' 
              label='Company'
              placeholder='Company'/>
      
          <InputField 
              ref='address_1' 
              label='Address 1'
              placeholder='Address 1'/>
          
          <InputField 
              ref='address_2' 
              label='Address 2'
              placeholder='address 2'/>
          
          <InputField 
              ref='city' 
              label='City' 
              placeholder='City'/>
          
          <InputField 
              ref='state' 
              label='State'
              placeholder='State'/>

          <InputField 
              ref='zipcode' 
              label='Zipcode'
              placeholder='Zipcode'/>

          </Form>
          {/* <Button
            raised
            icon={{name: 'save'}}
            title='Save Job' 
            onPress={() => { this.saveJob()} } /> */}
        </View>
      </Modal>  
      </View>      
    )
  }  
}



const mapStateToProps = (state, props) => ({
  // ...getJobList(state),
  // dataSource: store.jobsDS.cloneWithRows(jobsResults)
})

const mapDispatchToProps = {
  // ...ActionCreators
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