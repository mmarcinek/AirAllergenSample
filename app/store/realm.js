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
      location: {type: 'string'},
      sample_id: {type: 'string'},      
      sample_type: {type: 'string'},
      sample_for: {type: 'string'},
      analysis_req: {type: 'string'},
      volume: {type: 'int'},
      measure: {type: 'string'},
      RH: {type: 'float' },
      temp: {type: 'float' },
      notes: {type: 'string'}
    } 
  }

export default new Realm({schema: [Job, Sample]});  



