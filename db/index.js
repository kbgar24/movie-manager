const mongoose = require('mongoose');

const URI = 'mongodb://kindHealth:kindHealth@ds259325.mlab.com:59325/movies'

mongoose.connect(URI)
  .then(() => { console.log('✅  Successfully connected to Mongodb'); })
  .catch((e) => { console.error('⚠️ Error connected to MongoDB: ', e); });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));


module.exports = db;
