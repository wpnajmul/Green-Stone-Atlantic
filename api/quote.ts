import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const data = req.body;
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    return res.status(500).json({ 
      error: 'Server configuration error: Missing email credentials.',
      details: 'Please set GMAIL_USER and GMAIL_APP_PASSWORD in Vercel Environment Variables.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"Green Stone Atlantic Leads" <${gmailUser}>`,
      to: ["GreenStoneNS1@gmail.com", "wpnajmul@gmail.com"],
      subject: `New Lead: ${data.fullName} - ${data.serviceId}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #8b735b; padding-bottom: 10px;">New Landscaping Inquiry</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${data.serviceId}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
          <p><strong>Budget:</strong> ${data.budgetRange}</p>
          <h3 style="color: #1a1a1a;">Project Description</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${data.description}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This lead was submitted via Vercel Serverless Function.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
