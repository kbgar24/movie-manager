const mongoose = require('mongoose');

const URI_PROD = 'mongodb://kindHealth:kindHealth@ds259325.mlab.com:59325/movies'
const URI_TEST = 'mongodb://kindHealth:kindHealth@ds137207.mlab.com:37207/movies-test';

const URI = process.env.NODE_ENV === 'test' ? URI_TEST : URI_PROD;


mongoose.connect(URI)
  .then(() => { console.log('✅  Successfully connected to Mongodb'); })
  .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));


module.exports = db;
