import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Mali VonFeline" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid return 404
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the given id
  const user = fetch(`/api/users/${params.id}`);
  // If doesn't exist return 404
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  // Update the user
  // Return the updated user
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  return NextResponse.json({}, { status: 200 });
}
