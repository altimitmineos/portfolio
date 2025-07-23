// app/api/contact/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendEmail } from "@/lib/mail"; // optional
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("✅ Received form data:", body);
    const parsed = ContactSchema.parse(body);

    // Store to DB
    const saved = await prisma.contact.create({ data: parsed });

    // Optional: Send email
    await sendEmail(parsed); // remove if not needed

    return NextResponse.json({ success: true, data: saved });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
