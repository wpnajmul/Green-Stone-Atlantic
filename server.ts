import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
   // API Route for Quote Submissions
  app.post("/api/quote", async (req, res) => {
    const data = req.body;
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
   
    console.log("New Lead Received:", data);

    if (!gmailUser || !gmailPass) {
      console.warn("Gmail credentials not found in environment variables. Skipping email delivery.");
      return res.json({ 
        success: true, 
        message: "Lead received but GMAIL_USER or GMAIL_APP_PASSWORD is missing.", 
        data 
      });
    }

    try {
      // Create a transporter using Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
from: {
  name: "Green Stone Atlantic",
  address: gmailUser,
},
        to: ["md.sirforce@gmail.com", "wpnajmul@gmail.com"],
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
            <p style="font-size: 12px; color: #666;">This lead was submitted via the Green Stone Atlantic website.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully to recipients");

      res.json({ success: true, message: "Lead sent successfully via Gmail" });
    } catch (error) {
      console.error("Nodemailer Error:", error);
      res.status(500).json({ success: false, error: "Failed to send email via Gmail" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
