import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, message } = await req.json();

  // Validate required fields
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can also use "smtp.mailtrap.io" or others
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email details
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Message from ${name}`,
      text: message,
    };

    // Send mail
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
