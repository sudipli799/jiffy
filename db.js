// db.js
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/express';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
