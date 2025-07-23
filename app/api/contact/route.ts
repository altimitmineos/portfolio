// app/api/contact/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// tell Next.js this route is dynamic (to avoid static analysis issues)
export const dynamic = "force-dynamic";


const ContactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.parse(body);

    // Save to DB
    const saved = await prisma.contact.create({ data: parsed });

    // Dynamically import sendEmail so Next doesn't include it during build
    const { sendEmail } = await import("@/lib/send-email");
    await sendEmail(parsed);

    return NextResponse.json({ success: true, data: saved });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error occurred." }, { status: 400 });
  }
}
