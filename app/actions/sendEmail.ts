"use server";

import nodemailer from "nodemailer";

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  let phone = formData.get("phone") as string;
  phone = phone ? phone.trim() : "Not provided";

  if (!name || !email || !message) {
    return { error: "Please fill in all fields." };
  }

  if (phone !== "Not provided") {
    const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return { error: "Please enter a valid phone number." };
    }
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
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 2. Send Auto-Reply to User
    await transporter.sendMail({
      from: `"Natwar Prajapati" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      text: `Hi ${name},\n\nThank you for reaching out. I have received your message and will get back to you within 24-48 hours.\n\nBest regards,\nNatwar Prajapati`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #00f5ff; padding: 24px; text-align: center;">
            <h2 style="color: #111; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h2>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="font-size: 16px; line-height: 1.6; margin-top: 0;">Hi ${name},</p>
            <p style="font-size: 16px; line-height: 1.6;">Thank you for getting in touch. I have received your message and will review it shortly. You can expect to hear back from me within 24-48 hours.</p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px; border-left: 4px solid #7c3aed; margin: 24px 0;">
              <p style="margin: 0; font-size: 14px; color: #555;"><strong>Your Message:</strong></p>
              <p style="margin: 10px 0 0; font-size: 15px; color: #333; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="font-size: 16px; line-height: 1.6;">If you have any urgent questions or need to add more details, feel free to reply directly to this email.</p>
            <br/>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 0;">Best regards,</p>
            <p style="font-size: 16px; font-weight: bold; margin-top: 5px;">Natwar Prajapati</p>
            <p style="font-size: 14px; color: #666; margin-top: 5px;">Frontend Developer</p>
          </div>
          <div style="background-color: #f4f4f5; padding: 16px; text-align: center; font-size: 12px; color: #888;">
            This is an automated message. Please do not hesitate to reply if you need immediate assistance.
          </div>
        </div>
      `,
    });

    return { success: "Message sent successfully! I'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}
