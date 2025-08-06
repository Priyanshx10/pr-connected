const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function diagnoseConnection() {
  console.log('🔍 MongoDB Atlas Connection Diagnostics');
  console.log('=====================================\n');

  // Check if environment variable exists
  console.log('1. Checking environment variables...');
  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI is not set in .env.local');
    console.log('💡 Solution: Create .env.local file with your connection string');
    return;
  }
  console.log('✅ MONGODB_URI is set');

  // Parse connection string
  console.log('\n2. Analyzing connection string...');
  const uri = process.env.MONGODB_URI;
  
  try {
    // Extract parts of the connection string
    const match = uri.match(/mongodb\+srv:\/\/([^:]+):([^@]+)@([^\/]+)\/([^?]+)/);
    if (match) {
      const [, username, password, host, database] = match;
      console.log('✅ Connection string format is correct');
      console.log(`   Host: ${host}`);
      console.log(`   Database: ${database}`);
      console.log(`   Username: ${username}`);
      console.log(`   Password: ${password ? '***' + password.slice(-3) : 'Not set'}`);
    } else {
      console.error('❌ Connection string format is incorrect');
      console.log('💡 Expected format: mongodb+srv://username:password@cluster.xxxxx.mongodb.net/database');
    }
  } catch (error) {
    console.error('❌ Error parsing connection string:', error.message);
  }

  // Test DNS resolution
  console.log('\n3. Testing DNS resolution...');
  const dns = require('dns');
  const { promisify } = require('util');
  const resolveSrv = promisify(dns.resolveSrv);

  try {
    const host = uri.match(/@([^\/]+)/)?.[1];
    if (host) {
      console.log(`   Testing DNS for: ${host}`);
      const records = await resolveSrv(`_mongodb._tcp.${host}`);
      console.log('✅ DNS resolution successful');
      console.log(`   Found ${records.length} SRV records`);
    }
  } catch (dnsError) {
    console.error('❌ DNS resolution failed:', dnsError.message);
    console.log('💡 This might be a network or cluster name issue');
  }

  // Test connection
  console.log('\n4. Testing MongoDB connection...');
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('✅ Successfully connected to MongoDB Atlas!');
    
    // Test database operations
    const testCollection = mongoose.connection.collection('diagnostic_test');
    await testCollection.insertOne({ 
      test: 'diagnostic', 
      timestamp: new Date(),
      message: 'Connection test successful'
    });
    console.log('✅ Successfully wrote to database!');
    
    // Clean up
    await testCollection.deleteOne({ test: 'diagnostic' });
    console.log('✅ Successfully cleaned up test data!');
    
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully!');
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    
    if (error.message.includes('ENOTFOUND')) {
      console.log('\n🔧 Troubleshooting ENOTFOUND error:');
      console.log('1. Check your cluster name in MongoDB Atlas');
      console.log('2. Verify the connection string format');
      console.log('3. Make sure your IP is whitelisted in Network Access');
      console.log('4. Try using the connection string from MongoDB Atlas "Connect" button');
    }
    
    if (error.message.includes('Authentication failed')) {
      console.log('\n🔧 Troubleshooting Authentication error:');
      console.log('1. Check your username and password');
      console.log('2. Verify the database user exists in MongoDB Atlas');
      console.log('3. Ensure the user has proper permissions');
    }
  }
}

diagnoseConnection().catch(console.error); 