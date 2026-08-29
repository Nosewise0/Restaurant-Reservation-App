// routes/reservations.js
const express = require("express")
const router = express.Router()
const supabase = require('../config/supabase');

router.post("/reservations", async (req, res) => {
  const { fullName, date, time, partySize, phoneOrEmail, specialRequests } = req.body

  if (!fullName || !date || !time || !partySize || !phoneOrEmail) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  const { data, error } = await supabase
    .from("reservations")
    .insert({
      full_name: fullName,
      reservation_date: date,
      reservation_time: time,
      party_size: Number(partySize),
      phone_or_email: phoneOrEmail,
      special_requests: specialRequests || null,
    })
    .select()

  if (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }

  res.status(201).json({ reservation: data[0] })
})

module.exports = router