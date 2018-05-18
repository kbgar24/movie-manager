const mongoose = require('mongoose');
const { URI_Test, URI_PROD } = require('../secrets');

const URI = process.env.NODE_ENV === 'test' ? URI_TEST : URI_PROD;

mongoose.connect(URI)
  .then(() => { console.log('✅  Successfully connected to Mongodb'); })
  .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

module.exports = db;
