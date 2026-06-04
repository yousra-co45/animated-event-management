const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // process.env.MONGO_URI aapki .env file se aayega
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📁 Active Database: ${conn.connection.name}`); 
  } catch (error) {
    console.error(`❌ Connection Error: ${error.message}`);
    process.exit(1); // Error ki surat mein server stop ho jaye
  }
};

module.exports = connectDB;