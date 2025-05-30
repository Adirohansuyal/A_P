import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'adityasuyal0001@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendEmail(name: string, email: string, message: string): Promise<boolean> {
  try {
    const mailOptions = {
      from: 'adityasuyal0001@gmail.com',
      to: 'adityasuyal0001@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}