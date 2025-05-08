import nodemailer from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: import.meta.env.VITE_EMAIL_USER,
    pass: import.meta.env.VITE_EMAIL_PASS
  }
});

export const sendEmail = async (data: EmailData) => {
  try {
    const mailOptions = {
      from: import.meta.env.VITE_EMAIL_USER,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendBookingConfirmation = async (
  email: string,
  eventTitle: string,
  eventDate: string,
  eventLocation: string
) => {
  const subject = 'Event Booking Confirmation';
  const text = `
    Thank you for booking the event: ${eventTitle}
    Date: ${eventDate}
    Location: ${eventLocation}
    
    We look forward to seeing you there!
  `;
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4F46E5;">Event Booking Confirmation</h2>
      <p>Thank you for booking the event:</p>
      <h3 style="color: #1F2937;">${eventTitle}</h3>
      <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Location:</strong> ${eventLocation}</p>
      </div>
      <p>We look forward to seeing you there!</p>
      <hr style="border: 1px solid #E5E7EB; margin: 20px 0;">
      <p style="color: #6B7280; font-size: 14px;">
        This is an automated message, please do not reply to this email.
      </p>
    </div>
  `;

  return sendEmail({ to: email, subject, text, html });
}; 