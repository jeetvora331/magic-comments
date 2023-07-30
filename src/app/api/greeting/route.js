// app/api/greeting/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
	// Parse the request body
	const body = await request.json();
	const username = body.username;

	// Return a greeting message
	return NextResponse.json({ message: `Hello, ${username}!` });
}
