// app/api/test/route.js
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    await client.db().admin().ping();
    return Response.json({ message: '✅ Database connected successfully' });
  } catch (error) {
    console.error('❌ Database connection error:', error);
    return new Response(
      JSON.stringify({ message: '❌ Database connection failed', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
