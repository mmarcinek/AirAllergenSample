import React, { Component } from 'react';
import ReactNative from 'react-native';
import realm from '../store/realm';
import { Button, Icon } from 'react-native-material-design';

const {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class JobTable extends Component {
  constructor(props){
    super(props)

    this.state = {
      //empty for now`
    }
    this.getSampleList()
  }

  getSampleList(){
    let allSamples = realm.objects('Sample')
    let tableData = allSamples.filtered(`table_id = "${this.props.navigation.state.params.job_id}"`)
    this.jobDetails = Array.from(tableData)

    if (this.jobDetails.length > 0 ){
      this.samples = this.jobDetails;
      this.samplesList = this.samples.map((detail) =>{
        return (
          <View key={detail.sample_id} style={{flexDirection: 'row', paddingTop: 20, paddingLeft:20, borderBottomColor: '#d3d3d3', borderBottomWidth: 1}}>
            <Text style={{
              width: 100, 
              height: 40}}>{detail.sample_id}
            </Text>
            <Text style={{
              width: 100, 
              height: 40}}>{detail.location}
            </Text>
            <Text style={{
              width: 75, 
              height: 40}}>{detail.test_type}
            </Text>
            <TouchableHighlight
              style={{
                width: 75, 
                height: 40,
                paddingLeft: 10,
                borderLeftColor:'#d3d3d3',
                borderLeftWidth: 1 
              }} 
              onPress={() => {this.editSample(detail.sample_id)}}              
            >
              <View style={{marginTop: -5 }}>
                <Icon name="edit" />
              </View>
            </TouchableHighlight>
          </View>
        )
      })
    }

  }

  editSample(){

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{
            flexDirection: 'row', 
            paddingTop: 20, 
            paddingLeft:20, 
            borderBottomColor: '#d3d3d3', 
            borderBottomWidth: 1}}
          >
            <Text style={{
              width: 100, 
              height: 20}}>Sample Id
            </Text>
            <Text style={{
              width: 100, 
              height: 20}}>Location
            </Text>
            <Text style={{
              width: 75, 
              height: 20}}>Test Type
            </Text>

          </View>
          <View>
            {this.samplesList}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  table: { 
    width: 660,
    marginTop: 25,
    marginLeft: 10
   },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { textAlign: 'center' },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  flexContainer: {
    padding: 0,
    margin: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col1: {
    width: 200
  },
  col2: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  col3: {
    width: 200
  }  
});

export default JobTable;