import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import JobList from '../containers/JobList';
import JobTable from '../containers/JobTable';
import JobForm from '../containers/FormView';
  
export const Nav = StackNavigator({
  Home: {screen: Home, navigationOptions: { title: 'Home' } },
  JobList: { screen: JobList, navigationOptions: {title: 'Jobs'} },
  JobTable: { screen: JobTable, navigationOptions: { title: 'Sample Data'} },
  JobForm: { screen: JobForm, navigationOptions: { title: 'Job Form'} }
});