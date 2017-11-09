import Realm from 'realm';

class Job extends Realm.Object {}
Job.schema = {
  name: 'Job',
    primaryKey: 'job_id',
    properties: {
    job_id: {type: 'string', indexed: true },
    uploaded: { type: 'bool' },
    company: {type: 'string' },
    address_1: {type: 'string'},
    address_2: {type: 'string'},
    city: { type:'string' },
    state: { type:'string' },
    zipcode: { type:'int' },
    createdAt: { type:'date' },
    updatedAt: { type:'date' },
    tables: 'JobTable[]' 
  }
}

class JobTable extends Realm.Object {}
  JobTable.schema = {
    name: 'JobTable',
    properties: {
      prop: {type: 'linkingObjects', objectType: 'Job', property: 'tables'},
      table_id: { type: 'string'},
      sample_id: {type: 'string'},
      location: {type: 'string'},
      test_type: {type: 'string'},
      volume: {type: 'int'},
      area: {type: 'int' },
      TAT: {type: 'string'},
      RH: {type: 'float' },
      temp: {type: 'float' },
      notes: {type: 'string'}
    } 
  }

export default new Realm({schema: [Job, JobTable]});  



