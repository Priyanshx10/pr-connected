const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function testContactForm() {
  try {
    console.log('🧪 Testing Contact Form Submission...\n');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas\n');
    
    // Import the ContactSubmission model
    const ContactSubmission = require('../models/ContactSubmission').default;
    
    // Create a test submission
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      company: 'Test Company',
      subject: 'Test Subject',
      message: 'This is a test message to verify the contact form is working properly.',
      timestamp: new Date().toISOString(),
      source: 'test-script',
      status: 'new'
    };
    
    console.log('📝 Creating test submission with data:');
    console.log(JSON.stringify(testData, null, 2));
    console.log('');
    
    // Save the test submission
    const submission = new ContactSubmission(testData);
    const savedSubmission = await submission.save();
    
    console.log('✅ Test submission saved successfully!');
    console.log('📄 Saved document:');
    console.log(JSON.stringify(savedSubmission.toObject(), null, 2));
    console.log('');
    
    // Now retrieve all submissions to see what's in the database
    const allSubmissions = await ContactSubmission.find({}).sort({ createdAt: -1 });
    
    console.log(`📊 Total submissions in database: ${allSubmissions.length}`);
    console.log('');
    
    allSubmissions.forEach((sub, index) => {
      console.log(`📄 Submission ${index + 1}:`);
      console.log(`   _id: ${sub._id}`);
      console.log(`   Name: ${sub.name}`);
      console.log(`   Email: ${sub.email}`);
      console.log(`   Phone: ${sub.phone || 'N/A'}`);
      console.log(`   Company: ${sub.company || 'N/A'}`);
      console.log(`   Subject: ${sub.subject || 'N/A'}`);
      console.log(`   Message: ${sub.message}`);
      console.log(`   Created: ${sub.createdAt}`);
      console.log(`   Status: ${sub.status}`);
      console.log(`   Source: ${sub.source}`);
      console.log('');
    });
    
    console.log('📍 To view this data in MongoDB Atlas:');
    console.log('1. Go to MongoDB Atlas dashboard');
    console.log('2. Click on your cluster');
    console.log('3. Click "Browse Collections"');
    console.log('4. Navigate to database: "pr-connect"');
    console.log('5. Click on collection: "contactsubmissions"');
    console.log('6. You should see all your contact form submissions there!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack trace:', error.stack);
  } finally {
    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
  }
}

testContactForm(); 