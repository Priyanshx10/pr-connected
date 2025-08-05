import mongoose from 'mongoose'

const ContactSubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    maxlength: [100, 'Email cannot be more than 100 characters'],
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    maxlength: [20, 'Phone cannot be more than 20 characters'],
    default: '',
    trim: true
  },
  company: {
    type: String,
    maxlength: [100, 'Company name cannot be more than 100 characters'],
    default: '',
    trim: true
  },
  subject: {
    type: String,
    maxlength: [200, 'Subject cannot be more than 200 characters'],
    default: '',
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Please provide a message'],
    maxlength: [1000, 'Message cannot be more than 1000 characters'],
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  source: {
    type: String,
    default: 'contact-page',
    maxlength: [50, 'Source cannot be more than 50 characters'],
    trim: true
  },
  status: {
    type: String,
    enum: {
      values: ['new', 'read', 'replied', 'archived'],
      message: 'Status must be one of: new, read, replied, archived'
    },
    default: 'new',
  },
}, {
  timestamps: true,
  // Add validation to prevent duplicate submissions from same email within 24 hours
  indexes: [
    { email: 1, createdAt: 1 },
    { status: 1 },
    { createdAt: -1 }
  ]
})

// Pre-save middleware to ensure data is properly formatted
ContactSubmissionSchema.pre('save', function(next) {
  // Ensure email is lowercase
  if (this.email) {
    this.email = this.email.toLowerCase().trim()
  }
  
  // Ensure name is properly formatted
  if (this.name) {
    this.name = this.name.trim()
  }
  
  // Ensure message is trimmed
  if (this.message) {
    this.message = this.message.trim()
  }
  
  next()
})

// Check if model already exists to prevent overwriting
const ContactSubmission = mongoose.models.ContactSubmission || mongoose.model('ContactSubmission', ContactSubmissionSchema)

export default ContactSubmission