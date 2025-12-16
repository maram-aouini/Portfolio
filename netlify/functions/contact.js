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
        body: JSON.stringify({ 
          code: 400, 
          message: "All fields are required" 
        }),
      };
    }

    // Create transporter
    const contactEmail = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const name = firstName + " " + lastName;
    const mail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      replyTo: email,
    };

    // Send email
    await contactEmail.sendMail(mail);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        code: 200, 
        status: "Message Sent" 
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        code: 500, 
        message: "Failed to send message" 
      }),
    };
  }
};