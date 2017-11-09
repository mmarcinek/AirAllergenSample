import * as realm from './realm';
// wrapper for realm, when Users, 
//or future Schema are necessary, add to export, 
//allowing all methods to be accessed from store

export default ({
  ...realm
})