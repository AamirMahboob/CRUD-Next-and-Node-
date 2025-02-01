"use server"; // This makes the function run on the server

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    // Configure the email transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider (e.g., Outlook, SMTP)
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email details
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-receiver-email@example.com", // Change to your recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
