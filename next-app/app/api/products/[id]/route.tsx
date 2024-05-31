import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 2)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Milk", price: 2.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = fetch(`/api/products/${params.id}`);
  if (params.id > 2)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });

  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 201 }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = request.json();

  if (params.id > 2)
    return NextResponse.json({ error: "Product not found." }, { status: 404 });

  return NextResponse.json({}, { status: 200 });
}
