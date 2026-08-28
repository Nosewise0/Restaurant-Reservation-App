const express = require('express');
const { Resend } = require('resend');
const supabase = require('../config/supabase');

const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        name,
        email,
        subject: subject || 'No subject',
        message,
      });

    if (dbError) throw dbError;

    const emailHtml = `
      <div style="background-color:#231F20; color:#ffffff; font-family:Georgia, 'Times New Roman', serif; padding:40px 24px; max-width:600px; margin:0 auto;">
        <p style="color:#AC2B2B; font-size:11px; letter-spacing:3px; text-transform:uppercase; margin:0 0 12px;">
          New Contact Form Message
        </p>
        <h1 style="font-size:26px; font-weight:normal; margin:0 0 32px; letter-spacing:0.5px;">
          ${subject || 'No subject'}
        </h1>

        <table style="width:100%; border-collapse:collapse; margin-bottom:28px;">
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
              <p style="color:rgba(255,255,255,0.4); font-size:11px; text-transform:uppercase; letter-spacing:1.5px; margin:0 0 4px;">Name</p>
              <p style="font-size:16px; margin:0;">${name}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:12px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
              <p style="color:rgba(255,255,255,0.4); font-size:11px; text-transform:uppercase; letter-spacing:1.5px; margin:0 0 4px;">Email</p>
              <p style="font-size:16px; margin:0;">${email}</p>
            </td>
          </tr>
        </table>

        <p style="color:rgba(255,255,255,0.4); font-size:11px; text-transform:uppercase; letter-spacing:1.5px; margin:0 0 8px;">Message</p>
        <p style="font-size:16px; line-height:1.7; color:rgba(255,255,255,0.85); margin:0 0 32px; white-space:pre-wrap;">${message}</p>

        <div style="border-top:1px solid rgba(255,255,255,0.1); padding-top:20px;">
          <p style="color:rgba(255,255,255,0.3); font-size:12px; margin:0;">
            Sent from <a href="${process.env.FRONTEND_URL}" style="color:rgba(255,255,255,0.3); text-decoration:none;">Oliver & Sarah</a>
          </p>
        </div>
      </div>
    `;

    const { error: emailError } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: subject ? `New message: ${subject}` : `New contact form message from ${name}`,
      html: emailHtml,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\nMessage:\n${message}`, // fallback for clients that don't render HTML
    });

    if (emailError) throw emailError;

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
});

module.exports = router;