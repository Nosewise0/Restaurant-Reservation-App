require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const reservationRoutes = require('./routes/reservations');

const app = express();

    const allowedOrigins = [
    process.env.FRONTEND_URL || 'http://localhost:5173',
     "https://olivesarah.vercel.app",
    ];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}))

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/api', contactRoutes);
app.use('/api', reservationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})