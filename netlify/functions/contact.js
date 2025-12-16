const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

    // Validation
    if (!firstName || !lastName || !email || !phone || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ code: 400, message: "All fields are required" }),
      };
    }

    // Debug: check env variables
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "SET" : "NOT SET");

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return {
        statusCode: 500,
        body: JSON.stringify({ code: 500, message: "Email credentials not set" }),
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const fullName = `${firstName} ${lastName}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER_MAIN,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ code: 500, message: "Failed to send message" }),
    };
  }
};
