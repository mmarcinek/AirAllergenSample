import React, { Component } from 'react';
import ReactNative from 'react-native';
import { Button } from 'react-native-material-design';

const {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
  } = ReactNative

  class Home extends React.Component{
    constructor(props){
      super(props)

    }

    navigate(params){
      this.props.navigation.navigate(params, params)
    }

    render(){
      return(
        <View style={styles.container}>
          <TouchableHighlight 
            style={styles.button} 
            onPress={() => { this.navigate('JobForm')} }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>Create new Job</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            style={styles.button} 
            onPress={()=> { this.navigate('JobList') } }
            underlayColor='#78ac05' >
            <Text style={styles.btnText}>Existing Jobs</Text>
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

  export default Home;