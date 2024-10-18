import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import moment from "moment-timezone";

export async function POST(req: Request) {
  const {
    name,
    email,
    subject,
    budget,
    meetingLink,
    selectedDate,
    comment,
    country,
  } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    // Parse the selected date correctly as UTC, then convert to the user's time zone and Bangladesh time
    const selectedDateUTC = moment(selectedDate).utc(); // Parse as UTC

    // Convert to user's time zone
    const userTime = selectedDateUTC.tz(country).format("MMMM Do YYYY, h:mm:ss A");

    // Convert to Bangladesh time zone
    const bangladeshTime = selectedDateUTC.tz("Asia/Dhaka").format("MMMM Do YYYY, h:mm:ss A");

    const mailOptions = {
      from: email,
      to: "programmerrabbani@gmail.com",
      subject: `New Contact Message from ${name} - ${subject}`,
      html: `
        <h1>Contact Request Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Meeting Link:</strong> ${meetingLink}</p>
        <p><strong>Preferred Date and Time:</strong> ${country} ${userTime}</p>
        <p><strong>Bangladesh Time:</strong> ${bangladeshTime}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
