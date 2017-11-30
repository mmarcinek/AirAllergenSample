import Realm from 'realm';

class Job extends Realm.Object {}
Job.schema = {
  name: 'Job',
    primaryKey: 'job_id',
    properties: {
    job_id: {type: 'string', indexed: true },
    uploaded: { type: 'bool' },
    client: {type: 'string' },
    address_1: {type: 'string'},
    address_2: {type: 'string'},
    city: { type:'string' },
    state: { type:'string' },
    zipcode: { type:'int' },
    date: {type:'date'},
    createdAt: { type:'date' },
    updatedAt: { type:'date' }
  }
}

class Sample extends Realm.Object {}
  Sample.schema = {
    name: 'Sample',
    properties: {
      table_id: { type: 'string'},
      sample_id: {type: 'string'},
      location: {type: 'string'},
      test_type: {type: 'string'},
      volume: {type: 'int'},
      volume_unit: {type: 'string'},
      area: {type: 'int' },
      area_unit: {type: 'string'},
      TAT: {type: 'int'},
      time_unit: {type: 'string'},
      RH: {type: 'float' },
      temp: {type: 'float' },
      temp_unit: {type: 'string'},
      notes: {type: 'string'}
    } 
  }

export default new Realm({schema: [Job, Sample]});  



