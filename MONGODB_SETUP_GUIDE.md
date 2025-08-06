# MongoDB Atlas Setup Guide

## 🔧 **Fix the ENOTFOUND Error**

The error `querySrv ENOTFOUND _mongodb._tcp.cluster0.maukh.mongodb.net` indicates a DNS resolution issue. Here's how to fix it:

### **Step 1: Get the Correct Connection String**

1. **Go to MongoDB Atlas Dashboard**
2. **Click on your cluster**
3. **Click "Connect" button**
4. **Choose "Drivers"**
5. **Select "Node.js"**
6. **Copy the exact connection string provided**

### **Step 2: Create .env.local File**

Create a `.env.local` file in your project root with the correct connection string:

```env
# MongoDB Atlas Connection String
# Replace with your actual MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.xxxxx.mongodb.net/pr-connect?retryWrites=true&w=majority

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key-here

# Other Environment Variables
NODE_ENV=development
```

### **Step 3: Verify Your Cluster Name**

The error shows `cluster0.maukh.mongodb.net` - this might be incorrect. Your cluster name should look like:
- `cluster0.abc123.mongodb.net`
- `cluster0.def456.mongodb.net`

### **Step 4: Check Network Access**

1. **Go to Network Access in MongoDB Atlas**
2. **Click "Add IP Address"**
3. **Add your current IP address**
4. **Or temporarily allow access from anywhere (0.0.0.0/0)**

### **Step 5: Test the Connection**

Run the diagnostic script:

```bash
node scripts/diagnose-mongodb.js
```

Or the simple test:

```bash
node scripts/simple-test.js
```

## 📋 **Complete MongoDB Atlas Setup**

### **1. Create MongoDB Atlas Account**

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project

### **2. Create a Cluster**

1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select your preferred cloud provider and region
4. Click "Create"

### **3. Set Up Database Access**

1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Select "Read and write to any database"
6. Click "Add User"

### **4. Set Up Network Access**

1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### **5. Get Connection String**

1. Go back to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Drivers"
4. Select "Node.js"
5. Copy the connection string

### **6. Update Your .env.local**

Replace the placeholder values in your `.env.local`:

```env
MONGODB_URI=mongodb+srv://your-actual-username:your-actual-password@your-actual-cluster.xxxxx.mongodb.net/pr-connect?retryWrites=true&w=majority
```

### **7. Test the Connection**

```bash
# Test database connection
node scripts/simple-test.js

# Test contact form submission
node scripts/test-contact-form.js
```

## 🔍 **Troubleshooting**

### **ENOTFOUND Error**
- Check your cluster name in the connection string
- Verify the connection string from MongoDB Atlas
- Make sure your IP is whitelisted

### **Authentication Failed**
- Check your username and password
- Verify the database user exists in MongoDB Atlas
- Ensure the user has proper permissions

### **Connection Timeout**
- Check your internet connection
- Try using a different network
- Verify the cluster is running

## ✅ **Expected Database Schema**

Your contact form will save submissions with this structure:

```json
{
  "_id": "68919377c532db1c7202a334",
  "name": "Priyansh",
  "email": "priyansh@gmail.com",
  "phone": "+91 7000566395",
  "company": "Your Company",
  "subject": "Inquiry about services",
  "message": "Hello world Beauty",
  "timestamp": "2025-08-05T05:15:35.217+00:00",
  "source": "contact-page",
  "status": "new",
  "createdAt": "2025-08-05T05:15:35.217+00:00",
  "updatedAt": "2025-08-05T05:15:35.217+00:00",
  "__v": 0
}
```

## 🚀 **Next Steps**

1. **Fix the connection string** in your `.env.local`
2. **Test the connection** with the diagnostic scripts
3. **Run the build** to ensure all ESLint errors are fixed
4. **Test the contact form** to verify it saves all fields

Once you complete these steps, your contact form should work perfectly with MongoDB Atlas! 🎉 