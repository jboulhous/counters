import Dexie from 'dexie';

const db = new Dexie('MyReactCounterApp');
db.version(1).stores({ counters: '++id' });

export default db;