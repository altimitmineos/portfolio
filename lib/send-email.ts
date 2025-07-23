// lib/send-email.ts
import nodemailer from "nodemailer";

export async function sendEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    to: "muhammad.alhamdi001@gmail.com",
    subject: `New message from ${data.name}`,
    text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
    `,
  });
}
