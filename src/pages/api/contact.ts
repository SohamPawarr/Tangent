import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address from environment variable
        pass: process.env.EMAIL_PASS, // Your email password from environment variable
      },
    });

    // Set up email data
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // Your email address or recipient email address from environment variable
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send mail with defined transport object
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}
