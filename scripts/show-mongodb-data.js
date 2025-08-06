const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function showMongoDBData() {
  try {
    console.log('🔍 Showing MongoDB Data...\n');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas\n');
    
    // Get the database name
    const dbName = mongoose.connection.db.databaseName;
    console.log(`📊 Database: ${dbName}\n`);
    
    // Directly access the contactsubmissions collection
    const collection = mongoose.connection.db.collection('contactsubmissions');
    
    // Get all documents
    const documents = await collection.find({}).sort({ createdAt: -1 }).toArray();
    
    console.log(`📝 Found ${documents.length} contact submission(s):\n`);
    
    documents.forEach((doc, index) => {
      console.log(`📄 Document ${index + 1}:`);
      console.log(`   _id: ${doc._id}`);
      console.log(`   Name: ${doc.name || 'N/A'}`);
      console.log(`   Email: ${doc.email || 'N/A'}`);
      console.log(`   Phone: ${doc.phone || 'N/A'}`);
      console.log(`   Company: ${doc.company || 'N/A'}`);
      console.log(`   Subject: ${doc.subject || 'N/A'}`);
      console.log(`   Message: ${doc.message || 'N/A'}`);
      console.log(`   Created: ${doc.createdAt || 'N/A'}`);
      console.log(`   Updated: ${doc.updatedAt || 'N/A'}`);
      console.log(`   Status: ${doc.status || 'N/A'}`);
      console.log(`   Source: ${doc.source || 'N/A'}`);
      console.log(`   Timestamp: ${doc.timestamp || 'N/A'}`);
      console.log('');
    });
    
    console.log('\n📍 To view this data in MongoDB Atlas:');
    console.log('1. Go to MongoDB Atlas dashboard');
    console.log('2. Click on your cluster');
    console.log('3. Click "Browse Collections"');
    console.log(`4. Navigate to database: "${dbName}"`);
    console.log('5. Click on collection: "contactsubmissions"');
    console.log('6. You should see all your contact form submissions there!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

showMongoDBData(); 