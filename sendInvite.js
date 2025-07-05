// sendInvite.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();

app.use(bodyParser.json());

// Replace with your Twilio credentials
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

const whatsappFrom = 'whatsapp:+YOUR_TWILIO_WHATSAPP_NUMBER';

app.post('/api/send-invite', async (req, res) => {
  const { name, number } = req.body;
  if (!name || !number) {
    return res.status(400).json({ error: 'Name and number are required' });
  }
  const message = `Dear ${name},\nYou are cordially invited to celebrate the wedding of Aman & Garima.\nDate: 25th December 2025\nVenue: Grand Celebration Hall, City\nWe look forward to sharing this special day with you!`;

  try {
    await client.messages.create({
      from: whatsappFrom,
      to: `whatsapp:+${number}`,
      body: message,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
