import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate request body
  const body = await request.json();
  const validation = schema.safeParse(body);
  // If invalid return 404
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with the given id
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  // If doesn't exist return 404
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  // Update the user
  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  // Return the updated user
  return NextResponse.json(updatedUser, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!user)
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  await prisma.user.delete({
    where: { id: user.id },
  });
  return NextResponse.json({}, { status: 200 });
}
