import React from 'react';
import { StackNavigator } from 'react-navigation';

import JobList from '../containers/JobList';
import JobTable from '../containers/JobTable';
  
  export const Nav = StackNavigator({
    JobList: { screen: JobList, navigationOptions: {title: 'Jobs'} },
    JobTable: { screen: JobTable, navigationOptions: { title: 'Job detail'} },
  });