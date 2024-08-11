import { NextResponse } from 'next/server';
const access = require('./access')

export async function POST(req) {
    const reqUrl = new URL(req.url)
    console.log(reqUrl)
    const query = new URLSearchParams(reqUrl.search);
    const store_url = query.get("store_url")
    const data = await req.json()
    console.log(data)
    console.log(store_url)

    await access({req: {body: JSON.stringify({...data, store_url})}})

    return NextResponse.json({ success: true });
}
