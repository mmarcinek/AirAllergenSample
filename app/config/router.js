import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../containers/Home';
import JobList from '../containers/JobList';
import JobTable from '../containers/JobTable';
import FormView from '../containers/FormView';
  
export const Nav = StackNavigator({
  Home: {screen: Home, navigationOptions: { title: 'Home' } },
  JobList: { screen: JobList, navigationOptions: {title: 'Jobs'} },
  JobTable: { screen: JobTable, navigationOptions: { title: 'Sample Data'} },
  FormView: { screen: FormView, navigationOptions: { title: 'Test Form'} }
});