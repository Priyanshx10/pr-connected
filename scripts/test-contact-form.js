const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function testContactForm() {
  console.log('🧪 Testing Contact Form Submission');
  console.log('================================\n');

  // Check environment
  console.log('1. Environment Check:');
  console.log('- MONGODB_URI exists:', !!process.env.MONGODB_URI);
  console.log('- NODE_ENV:', process.env.NODE_ENV);

  if (!process.env.MONGODB_URI) {
    console.error('❌ MONGODB_URI not found in .env.local');
    console.log('💡 Please create .env.local with your MongoDB Atlas connection string');
    return;
  }

  try {
    // Connect to database
    console.log('\n2. Connecting to MongoDB Atlas...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas!');

    // Test data
    const testSubmission = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+91 7000566395',
      company: 'Test Company',
      subject: 'Test Subject',
      message: 'This is a test message to verify the contact form is working correctly.',
      timestamp: new Date().toISOString(),
      source: 'test-script',
      status: 'new'
    };

    console.log('\n3. Testing ContactSubmission model...');
    
    // Import the model
    const ContactSubmission = require('../models/ContactSubmission').default;
    
    // Create and save test submission
    const submission = new ContactSubmission(testSubmission);
    await submission.save();
    
    console.log('✅ Test submission saved successfully!');
    console.log('📊 Submission details:');
    console.log(`   - ID: ${submission._id}`);
    console.log(`   - Name: ${submission.name}`);
    console.log(`   - Email: ${submission.email}`);
    console.log(`   - Phone: ${submission.phone}`);
    console.log(`   - Company: ${submission.company}`);
    console.log(`   - Subject: ${submission.subject}`);
    console.log(`   - Message: ${submission.message}`);
    console.log(`   - Status: ${submission.status}`);
    console.log(`   - Created: ${submission.createdAt}`);

    // Clean up test data
    console.log('\n4. Cleaning up test data...');
    await ContactSubmission.deleteOne({ _id: submission._id });
    console.log('✅ Test data cleaned up successfully!');

    // Test API endpoint
    console.log('\n5. Testing API endpoint...');
    const fetch = require('node-fetch');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'API Test User',
        email: 'apitest@example.com',
        phone: '+91 7000566395',
        company: 'API Test Company',
        subject: 'API Test Subject',
        message: 'This is a test message from the API endpoint.',
        source: 'test-script'
      })
    });

    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ API endpoint test successful!');
      console.log('📊 API Response:', result);
    } else {
      console.log('❌ API endpoint test failed');
      console.log('📊 API Response:', result);
    }

    await mongoose.connection.close();
    console.log('\n✅ All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.message.includes('ENOTFOUND')) {
      console.log('\n🔧 ENOTFOUND Error Solutions:');
      console.log('1. Check your MongoDB Atlas connection string');
      console.log('2. Verify your cluster name and credentials');
      console.log('3. Make sure your IP is whitelisted in Network Access');
    }
    
    if (error.message.includes('Authentication failed')) {
      console.log('\n🔧 Authentication Error Solutions:');
      console.log('1. Check your username and password');
      console.log('2. Verify the database user exists in MongoDB Atlas');
      console.log('3. Ensure the user has proper permissions');
    }
  }
}

testContactForm().catch(console.error); 