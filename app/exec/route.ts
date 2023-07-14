import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        "result": ["Ok", "Yes", "No"]
    }

    return NextResponse.json(data)
}
