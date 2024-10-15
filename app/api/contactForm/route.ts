import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, budget, meetingLink, selectedDate, comment } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: email,
      to: 'programmerrabbani@gmail.com',
      subject: `New Contact Message from ${name} - ${subject}`,
      html: `
        <h1>Contact Request Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Meeting Link:</strong> ${meetingLink}</p>
        <p><strong>Preferred Date and Time:</strong> ${selectedDate ? new Date(selectedDate).toLocaleString() : 'N/A'}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
