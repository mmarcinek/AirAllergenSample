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

    render(){
      let allSamples = realm.objects('Sample')
      let tableData = allSamples.filtered(`table_id = "${this.props.navigation.state.params.job_id}"`)
      this.jobDetails = Array.from(tableData)
      
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
            onPress={()=> { this.navigate('SampleList', job) } }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>View all Samples</Text>
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