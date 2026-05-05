"use server";

import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send email to Site Owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 2. Send Auto-Reply to User
    await transporter.sendMail({
      from: `"Natwar.dev" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out. I have received your message and will get back to you as soon as possible.\n\nBest,\nNatwar`,
      html: `
        <h3>Hello ${name},</h3>
        <p>Thank you for reaching out! I've received your message and will get back to you shortly.</p>
        <hr />
        <p><em>Your Message:</em></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br />
        <p>Best regards,<br/>Natwar</p>
      `,
    });

    return { success: "Message sent successfully! I'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
