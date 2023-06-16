const mongoose = require('mongoose');
const { mongodb } = require('./keys');

const mongodbURI = mongodb.URI + '/FullStack';

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database is connected');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
};

module.exports = connectDB;