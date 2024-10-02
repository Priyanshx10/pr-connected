import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri!);

export async function POST(req: Request) {
  try {
    const { userId, date, time } = await req.json();

    await client.connect();
    const database = client.db('pr_connect_db');
    const appointments = database.collection('appointments');

    const result = await appointments.insertOne({
      userId,
      date,
      time,
      createdAt: new Date(),
    });

    return NextResponse.json({ appointmentId: result.insertedId });
  } catch (error) {
    console.error('Error scheduling appointment:', error);
    return NextResponse.json({ error: 'Error scheduling appointment' }, { status: 500 });
  } finally {
    await client.close();
  }
}