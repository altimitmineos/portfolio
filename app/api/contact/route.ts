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
    console.log("📦 Received body:", body); // ✅ Log the request body

    const parsed = ContactSchema.parse(body);
    console.log("✅ Zod validated:", parsed); // ✅ Log parsed result

    const saved = await prisma.contact.create({ data: parsed });
    console.log("💾 Saved to DB:", saved); // ✅ Log DB result

    const { sendEmail } = await import("@/lib/send-email");
    await sendEmail(parsed);

    return NextResponse.json({ success: true, data: saved });
  } catch (err: unknown) {
    console.error("❌ Error occurred:", err); // ✅ Log the actual error

    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    return NextResponse.json({ error: "Unknown error occurred." }, { status: 400 });
  }
}

