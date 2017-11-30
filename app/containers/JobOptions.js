import React, { Component } from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
import { Button } from 'react-native-material-design';

const {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
  } = ReactNative

  class JobOptions extends React.Component{
    constructor(props){
      super(props)

 
    }

    navigate(location, params){
      this.props.navigation.navigate(location, params)
    }

    test(sample){
      alert(this.props.navigation.state.params.job_id)
    }    

    render(){
      let allSamples = realm.objects('Sample')
      let tableData = allSamples.filtered(`table_id = "${this.props.navigation.state.params.job_id}"`)
      this.jobDetails = Array.from(tableData)
      alert(this.jobDetails.table_id)
      
      const job = {
        job_id: this.props.navigation.state.params.job_id,
        client: this.props.navigation.state.params.client,
        address_1: this.props.navigation.state.params.address_1,
        address_2: this.props.navigation.state.params.address_2,
        city: this.props.navigation.state.params.city,
        state: this.props.navigation.state.params.state,
        zipcode: this.props.navigation.state.params.zipcode,
        date: this.props.navigation.state.params.date        
      } 

      const sample = {
        table_id: this.props.navigation.state.params.job_id,
        sample_id: this.jobDetails.sample_id,
        location: this.jobDetails.location,
        test_type: this.jobDetails.test_type,
        volume: this.jobDetails.volume,
        volume_unit: this.jobDetails.volume_unit,
        area: this.jobDetails.area,
        area_unit: this.jobDetails.area_unit,
        TAT: this.jobDetails.TAT,
        time_unit: this.jobDetails.time_unit,
        RH: this.jobDetails.RH,
        temp: this.jobDetails.temp,
        temp_unit: this.jobDetails.temp_unit,
        notes: this.jobDetails.notes
      }

      return(
        <View style={styles.container}>
          <TouchableHighlight 
            style={styles.button} 
            onPress={() => { this.navigate('JobForm', job)} }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>Update Job</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.button} 
            onPress={()=> { this.navigate('SampleForm', job) } }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>Add Sample</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.button} 
            onPress={()=> { this.test('SampleForm', sample) } }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>Edit Sample</Text>
          </TouchableHighlight>
        </View>
      )
    }

  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    button: {
      marginBottom: 15,
    },
    btnText:{
      fontSize: 20
    }
  })

  export default JobOptions;