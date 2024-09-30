/* eslint-disable no-var */
import mongoose from 'mongoose';

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<{ conn: mongoose.Mongoose | null; promise: null }> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached: {
  conn: mongoose.Mongoose | null;
  promise: Promise<{ conn: mongoose.Mongoose | null; promise: null }> | null;
} = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return { conn: mongoose, promise: null };
    });
  }

  try {
    const result = await cached.promise;
    cached.conn = result.conn;
    cached.promise = null;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export default dbConnect;