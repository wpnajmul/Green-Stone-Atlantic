import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for Quote Submissions
  app.post("/api/quote", async (req, res) => {
    const data = req.body;
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL || "wpnajmul@gmail.com";

    console.log("New Lead Received:", data);

    if (!gmailUser || !gmailPass) {
      console.warn("Gmail credentials missing (GMAIL_USER / GMAIL_APP_PASSWORD). Simulated successful lead capture.");
      return res.json({ 
        success: true, 
        message: "Lead captured (development mode - email skipped)", 
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
        to: contactEmail,
        subject: `New Lead: ${data.fullName} - ${data.serviceId}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 12px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #8b735b; margin-top: 0;">New Landscaping Inquiry</h2>
              <div style="height: 4px; width: 60px; background: #8b735b; margin: 10px auto;"></div>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Full Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Needed</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.serviceId}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Site Address</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.address}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Preferred Date</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.preferredDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget Range</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.budgetRange}</td>
              </tr>
            </table>

            <h3 style="color: #8b735b; margin-top: 25px;">Project Details</h3>
            <div style="background: #fdfaf7; padding: 20px; border-radius: 8px; border-left: 4px solid #8b735b; color: #444; line-height: 1.6;">
              ${data.description.replace(/\n/g, '<br>')}
            </div>

            <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
              Sent from Green Stone Atlantic Website Leads System
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.json({ success: true, message: "Lead sent successfully" });
    } catch (error) {
      console.error("Nodemailer Error:", error);
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
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
