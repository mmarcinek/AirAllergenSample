import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import JobList from '../containers/JobList';
import JobEdit from '../containers/JobEdit';
import SampleList from '../containers/SampleList';
import JobForm from '../containers/JobForm';
import JobOptions from '../containers/JobOptions';
import SampleForm from '../containers/SampleForm';
import SampleEdit from '../containers/SampleEdit';
  
export const Nav = StackNavigator({
  Home: {screen: Home, navigationOptions: { title: 'Home' } },
  JobList: { screen: JobList, navigationOptions: {title: 'Active Jobs'} },
  JobEdit: { screen: JobEdit, navigationOptions: {title: 'Job Edit'} },
  SampleList: { screen: SampleList, navigationOptions: { title: 'Sample Data'} },
  JobForm: { screen: JobForm, navigationOptions: { title: 'Job Form'} },
  JobOptions: { screen: JobOptions, navigationOptions: { title: 'Options' } },
  SampleForm: { screen: SampleForm, navigationOptions: { title: 'Sample' } },
  SampleEdit: { screen: SampleEdit, navigationOptions: { title: 'Sample' } }
});