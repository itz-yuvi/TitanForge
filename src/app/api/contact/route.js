// src/app/api/contact/route.js
import clientPromise from '../../lib/mongodb';
import { validateContactData } from '../../models/contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { valid, error } = validateContactData(body);

    if (!valid) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('titanforge'); // You can rename this
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name: body.name,
      email: body.email,
      message: body.message,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}
