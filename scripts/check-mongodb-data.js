const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function checkMongoDBData() {
  try {
    console.log('🔍 Checking MongoDB Data...\n');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas\n');
    
    // Get the database name from the connection string
    const dbName = mongoose.connection.db.databaseName;
    console.log(`📊 Database: ${dbName}\n`);
    
    // List all collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('📁 Collections in database:');
    collections.forEach(collection => {
      console.log(`   - ${collection.name}`);
    });
    console.log('');
    
    // Check contactsubmissions collection specifically
    const ContactSubmission = mongoose.model('ContactSubmission', new mongoose.Schema({}));
    
    try {
      const submissions = await ContactSubmission.find({}).sort({ createdAt: -1 }).limit(10);
      
      if (submissions.length === 0) {
        console.log('❌ No contact submissions found in the database');
        console.log('   This could mean:');
        console.log('   1. The data is being saved to a different collection');
        console.log('   2. The database connection is pointing to a different database');
        console.log('   3. The data is being saved but then deleted');
      } else {
        console.log(`✅ Found ${submissions.length} contact submission(s):\n`);
        
        submissions.forEach((submission, index) => {
          console.log(`📝 Submission ${index + 1}:`);
          console.log(`   Name: ${submission.name || 'N/A'}`);
          console.log(`   Email: ${submission.email || 'N/A'}`);
          console.log(`   Phone: ${submission.phone || 'N/A'}`);
          console.log(`   Company: ${submission.company || 'N/A'}`);
          console.log(`   Subject: ${submission.subject || 'N/A'}`);
          console.log(`   Message: ${submission.message ? (submission.message.substring(0, 50) + (submission.message.length > 50 ? '...' : '')) : 'N/A'}`);
          console.log(`   Created: ${submission.createdAt}`);
          console.log(`   Status: ${submission.status || 'N/A'}`);
          console.log(`   Source: ${submission.source || 'N/A'}`);
          console.log('');
        });
      }
    } catch (error) {
      console.log('❌ Error accessing contactsubmissions collection:', error.message);
    }
    
    // Check if there are any other collections that might contain the data
    console.log('🔍 Checking other collections for contact data...\n');
    
    for (const collection of collections) {
      if (collection.name.toLowerCase().includes('contact') || collection.name.toLowerCase().includes('submission')) {
        try {
          const count = await mongoose.connection.db.collection(collection.name).countDocuments();
          console.log(`📊 Collection "${collection.name}": ${count} documents`);
          
          if (count > 0) {
            const sample = await mongoose.connection.db.collection(collection.name).findOne();
            console.log(`   Sample document:`, JSON.stringify(sample, null, 2));
          }
        } catch (error) {
          console.log(`   Error reading collection "${collection.name}":`, error.message);
        }
      }
    }
    
    console.log('\n📍 How to find this data in MongoDB Atlas:');
    console.log('1. Go to MongoDB Atlas dashboard');
    console.log('2. Click on your cluster');
    console.log('3. Click "Browse Collections"');
    console.log(`4. Look for database: "${dbName}"`);
    console.log('5. Look for collection: "contactsubmissions"');
    console.log('6. If not found, check other collections or verify the database name');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

checkMongoDBData(); 