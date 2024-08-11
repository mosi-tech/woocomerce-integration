import { NextResponse } from 'next/server';
const authorize = require('./authorize')

export async function POST(req) {

  const { userId, storeUrl } = await req.json();
   
  try {
    const url = await authorize({req: {body: JSON.stringify({ userId, storeUrl })}})
    console.log("Response:", url)
    return NextResponse.json({success: true, url});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
