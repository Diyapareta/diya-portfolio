import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ✅ CORS (update after frontend deploy)
app.use(cors({
  origin: "*", // later replace with your Vercel URL
}));

app.use(express.json());

// ✅ ROUTE
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    console.log("DATA:", name, email, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS, // 🔥 MUST be App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Portfolio Message from ${name}`,
      replyTo: email,
      text: `
New Portfolio Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// ✅ IMPORTANT: Railway PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));