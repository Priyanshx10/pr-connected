const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Simple MongoDB Connection Test');
console.log('================================\n');

console.log('Environment check:');
console.log('- MONGODB_URI exists:', !!process.env.MONGODB_URI);
console.log('- NODE_ENV:', process.env.NODE_ENV);

if (!process.env.MONGODB_URI) {
  console.error('❌ MONGODB_URI not found in .env.local');
  process.exit(1);
}

console.log('\nConnection string preview:');
const uri = process.env.MONGODB_URI;
const maskedUri = uri.replace(/(mongodb\+srv:\/\/)([^:]+):([^@]+)@/, '$1***:***@');
console.log(maskedUri);

console.log('\nAttempting connection...');

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ Connected to MongoDB Atlas!');
  console.log('✅ Database:', mongoose.connection.name);
  console.log('✅ Host:', mongoose.connection.host);
  return mongoose.connection.close();
})
.then(() => {
  console.log('✅ Connection closed successfully!');
  process.exit(0);
})
.catch((error) => {
  console.error('❌ Connection failed:', error.message);
  
  if (error.message.includes('ENOTFOUND')) {
    console.log('\n🔧 ENOTFOUND Error Solutions:');
    console.log('1. Check your cluster name in the connection string');
    console.log('2. Verify the connection string from MongoDB Atlas');
    console.log('3. Make sure your IP is whitelisted');
    console.log('4. Try using the exact connection string from Atlas');
  }
  
  process.exit(1);
}); 